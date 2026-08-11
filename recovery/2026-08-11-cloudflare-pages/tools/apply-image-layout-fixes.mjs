import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workRoot = path.dirname(fileURLToPath(import.meta.url));
const fixSourcePath = path.join(workRoot, "image-layout-fixes.css");
const marker = "/* hoang-image-layout-fixes-v1 */";
const coverWrapperRule = ".provided-cover{width:100%;height:100%;position:absolute;inset:0;overflow:hidden}";
const coverDeclarationStart = "{object-fit:cover;object-position:center;";
const targetedCoverSelector = ".gallery-card-visual .provided-cover>img,.mood-work-visual .provided-cover>img,.auroradot-work-visual .provided-cover>img";

const cssTargets = [
  path.join(workRoot, "local-run", "client", "assets", "index-DliUwAq7.css"),
  path.join(workRoot, "local-run", "worker", "assets", "index-DliUwAq7.css"),
  path.join(workRoot, "deployment-artifact", "assets", "index-DliUwAq7.css"),
  path.join(workRoot, "deployment-artifact", ".worker", "assets", "index-DliUwAq7.css"),
];

const fixSource = fs.readFileSync(fixSourcePath, "utf8").trim();

for (const cssPath of cssTargets) {
  let css = fs.readFileSync(cssPath, "utf8");

  const wrapperIndex = css.indexOf(coverWrapperRule);
  const selectorStart = wrapperIndex + coverWrapperRule.length;
  const declarationIndex = css.indexOf(coverDeclarationStart, selectorStart);
  const currentSelector = css.slice(selectorStart, declarationIndex);

  if (wrapperIndex < 0 || declarationIndex < 0 || !currentSelector.includes(".provided-cover>img")) {
    throw new Error(`Cover selector not found in ${cssPath}`);
  }

  css = `${css.slice(0, selectorStart)}${targetedCoverSelector}${css.slice(declarationIndex)}`;

  const markerIndex = css.indexOf(marker);
  if (markerIndex >= 0) {
    css = css.slice(0, markerIndex).trimEnd();
  }

  css = `${css}\n${fixSource}\n`;
  fs.writeFileSync(cssPath, css, "utf8");
  console.log(`Updated ${path.relative(workRoot, cssPath)}`);
}
