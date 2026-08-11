import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workRoot = path.dirname(fileURLToPath(import.meta.url));

function javascriptFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return javascriptFiles(absolutePath);
    return entry.isFile() && entry.name.endsWith(".js") ? [absolutePath] : [];
  });
}

function removeClientMission(text) {
  const missionClass = "className:`mission`,id:`mission`";
  const workClass = "className:`work paper-noise`,id:`work`";
  const missionIndex = text.indexOf(missionClass);
  if (missionIndex === -1) return null;

  const workIndex = text.indexOf(workClass, missionIndex);
  const start = text.lastIndexOf(",(0,", missionIndex);
  const end = text.lastIndexOf(",(0,", workIndex);
  if (workIndex === -1 || start === -1 || end <= start) {
    throw new Error("Could not isolate the client mission section safely.");
  }

  const result = text.slice(0, start) + text.slice(end);
  if (result.includes(missionClass) || result.includes("Sứ mệnh")) {
    throw new Error("Client mission section was not fully removed.");
  }
  return result;
}

function removeServerMission(text) {
  const missionClass = 'className: "mission"';
  const workClass = 'className: "work paper-noise"';
  const sectionMarker = '/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {';
  const missionIndex = text.indexOf(missionClass);
  if (missionIndex === -1) return null;

  const workIndex = text.indexOf(workClass, missionIndex);
  const missionMarker = text.lastIndexOf(sectionMarker, missionIndex);
  const workMarker = text.lastIndexOf(sectionMarker, workIndex);
  if (workIndex === -1 || missionMarker === -1 || workMarker <= missionMarker) {
    throw new Error("Could not isolate the server mission section safely.");
  }

  const start = text.lastIndexOf("\n", missionMarker) + 1;
  const end = text.lastIndexOf("\n", workMarker) + 1;
  const result = text.slice(0, start) + text.slice(end);
  if (result.includes(missionClass) || result.includes("Sứ mệnh")) {
    throw new Error("Server mission section was not fully removed.");
  }
  return result;
}

const clientRoots = [
  path.join(workRoot, "local-run", "client", "assets"),
  path.join(workRoot, "deployment-artifact", "assets"),
];

const serverRoots = [
  path.join(workRoot, "local-run", "worker", "ssr", "assets"),
  path.join(workRoot, "deployment-artifact", ".worker", "ssr", "assets"),
];

const changed = [];
for (const filePath of clientRoots.flatMap(javascriptFiles)) {
  const text = fs.readFileSync(filePath, "utf8");
  const result = removeClientMission(text);
  if (result === null) continue;
  fs.writeFileSync(filePath, result, "utf8");
  changed.push(filePath);
}

for (const filePath of serverRoots.flatMap(javascriptFiles)) {
  const text = fs.readFileSync(filePath, "utf8");
  const result = removeServerMission(text);
  if (result === null) continue;
  fs.writeFileSync(filePath, result, "utf8");
  changed.push(filePath);
}

if (changed.length !== 4) {
  throw new Error(`Expected to update 4 bundles, updated ${changed.length}.`);
}

console.log(JSON.stringify({ changed }, null, 2));
