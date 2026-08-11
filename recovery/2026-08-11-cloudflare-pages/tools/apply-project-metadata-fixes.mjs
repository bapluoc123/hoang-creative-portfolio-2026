import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workRoot = path.dirname(fileURLToPath(import.meta.url));
const workerTargets = [
  path.join(workRoot, "local-run", "worker", "index.js"),
  path.join(workRoot, "deployment-artifact", ".worker", "index.js"),
];

const scopeLabel = `PH\u1EA0M VI`;
const roleLabel = `VAI TR\u00D2`;
const scopeFunctions = [
  "AbeeciCaseStudy",
  "AuroradotPage",
  "FixNowCaseStudy",
  "MoodPage",
  "MusaicPage",
  "CollectionPage",
];

function count(source, needle) {
  return source.split(needle).length - 1;
}

function functionBounds(source, functionName) {
  const start = source.indexOf(`function ${functionName}(`);
  if (start < 0) throw new Error(`Function not found: ${functionName}`);
  const next = source.indexOf("\nfunction ", start + 1);
  return { start, end: next < 0 ? source.length : next };
}

function matchingParenthesis(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === `"` || char === `'` || char === "`") {
      quote = char;
      continue;
    }

    if (char === "(" ) depth += 1;
    if (char === ")") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  throw new Error(`Unbalanced call at offset ${openIndex}`);
}

function removeJsxNode(source, { functionName, label, tag }) {
  const bounds = functionBounds(source, functionName);
  const labelNeedle = `children: "${label}"`;
  const labelIndex = source.indexOf(labelNeedle, bounds.start);
  if (labelIndex < 0 || labelIndex >= bounds.end) {
    throw new Error(`${label} not found inside ${functionName}`);
  }

  const marker = `/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("${tag}",`;
  const nodeStart = source.lastIndexOf(marker, labelIndex);
  if (nodeStart < bounds.start) {
    throw new Error(`${tag} node for ${label} not found inside ${functionName}`);
  }

  const callOpen = source.indexOf(`("${tag}",`, nodeStart);
  const callClose = matchingParenthesis(source, callOpen);
  let removeStart = nodeStart;
  let removeEnd = callClose + 1;

  const lineStart = source.lastIndexOf("\n", nodeStart - 1) + 1;
  if (source.slice(lineStart, nodeStart).trim() === "") removeStart = lineStart;

  let after = removeEnd;
  while (source[after] === " " || source[after] === "\t") after += 1;
  if (source[after] === ",") {
    removeEnd = after + 1;
    if (source[removeEnd] === "\r") removeEnd += 1;
    if (source[removeEnd] === "\n") removeEnd += 1;
  } else {
    let before = removeStart - 1;
    while (/\s/.test(source[before] ?? "")) before -= 1;
    if (source[before] !== ",") {
      throw new Error(`Could not remove separator for ${label} in ${functionName}`);
    }
    removeStart = before;
  }

  return source.slice(0, removeStart) + source.slice(removeEnd);
}

function patchWorker(source, target) {
  const scopeNeedle = `children: "${scopeLabel}"`;
  const roleNeedle = `children: "${roleLabel}"`;
  const typeNeedle = `children: "TYPE"`;
  const fieldNeedle = `children: "FIELD"`;
  const before = {
    scope: count(source, scopeNeedle),
    role: count(source, roleNeedle),
    type: count(source, typeNeedle),
    field: count(source, fieldNeedle),
  };

  if (before.scope === 0 && before.role === 6 && before.type === 0 && before.field === 0) {
    return source;
  }

  if (before.scope !== 6 || before.role !== 6 || before.type !== 1 || before.field !== 1) {
    throw new Error(`Unexpected metadata counts in ${target}: ${JSON.stringify(before)}`);
  }

  for (const functionName of scopeFunctions) {
    source = removeJsxNode(source, {
      functionName,
      label: scopeLabel,
      tag: "div",
    });
  }

  source = removeJsxNode(source, {
    functionName: "CollectionPage",
    label: "TYPE",
    tag: "dl",
  });

  const after = {
    scope: count(source, scopeNeedle),
    role: count(source, roleNeedle),
    type: count(source, typeNeedle),
    field: count(source, fieldNeedle),
  };
  if (after.scope !== 0 || after.role !== 6 || after.type !== 0 || after.field !== 0) {
    throw new Error(`Metadata patch failed in ${target}: ${JSON.stringify(after)}`);
  }

  return source;
}

for (const target of workerTargets) {
  const original = fs.readFileSync(target, "utf8");
  const updated = patchWorker(original, target);
  if (updated !== original) fs.writeFileSync(target, updated, "utf8");
  console.log(`${updated === original ? "Verified" : "Updated"} ${path.relative(workRoot, target)}`);
}
