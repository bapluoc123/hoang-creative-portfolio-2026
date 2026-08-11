import fs from "node:fs";
import path from "node:path";

const workspace = path.resolve(import.meta.dirname, "..");
const clientFonts = path.join(workspace, "work", "local-run", "client", "assets", "_vinext_fonts");
const targets = [
  path.join(workspace, "work", "local-run", "worker", "index.js"),
  path.join(workspace, "work", "deployment-artifact", ".worker", "index.js"),
];

const legacyFontUrl = /C:\/Users\/hoang\/Documents\/Codex\/2026-08-10\/ta\/work\/hoang-creative-portfolio-2026\/\.vinext\/fonts\/([^/)\s]+)\/([^)'"\s]+\.woff2)/g;

for (const target of targets) {
  const source = fs.readFileSync(target, "utf8");
  const matches = [...source.matchAll(legacyFontUrl)];

  if (matches.length === 0) {
    if (source.includes("/.vinext/fonts/")) {
      throw new Error(`Unrecognized legacy font URL remains in ${target}`);
    }

    console.log(`Already fixed: ${target}`);
    continue;
  }

  for (const match of matches) {
    const fontFile = path.join(clientFonts, match[1], match[2]);
    if (!fs.existsSync(fontFile)) {
      throw new Error(`Missing local font asset: ${fontFile}`);
    }
  }

  const fixed = source.replace(legacyFontUrl, "/assets/_vinext_fonts/$1/$2");
  if (/url\([A-Za-z]:\//.test(fixed)) {
    throw new Error(`An absolute Windows font URL remains in ${target}`);
  }

  fs.writeFileSync(target, fixed, "utf8");
  console.log(`Fixed ${matches.length} font URLs: ${target}`);
}
