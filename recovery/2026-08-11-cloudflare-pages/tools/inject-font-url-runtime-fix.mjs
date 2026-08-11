import fs from "node:fs";
import path from "node:path";

const workspace = path.resolve(import.meta.dirname, "..");
const targets = [
  path.join(workspace, "work", "local-run", "client", "assets", "index--dFQwBUy.js"),
  path.join(workspace, "work", "deployment-artifact", "assets", "index--dFQwBUy.js"),
];

const marker = "/* local-font-url-fix */";
const runtimeFix = `${marker}
;(() => {
  const oldFontUrl = /url\\([A-Za-z]:\\/[^)]*?\\/\\.vinext\\/fonts\\/([^/)\\s]+)\\/([^)'"\\s]+\\.woff2)\\)/g;
  const fixFontUrls = () => {
    document.querySelectorAll("style[data-vinext-fonts]").forEach((style) => {
      const current = style.textContent || "";
      const fixed = current.replace(oldFontUrl, "url(/assets/_vinext_fonts/$1/$2)");
      if (fixed !== current) style.textContent = fixed;
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixFontUrls, { once: true });
  } else {
    fixFontUrls();
  }
})();
`;

for (const target of targets) {
  const source = fs.readFileSync(target, "utf8");
  if (source.includes(marker)) {
    console.log(`Already injected: ${target}`);
    continue;
  }

  fs.writeFileSync(target, `${source.trimEnd()}\n${runtimeFix}`, "utf8");
  console.log(`Injected runtime font URL fix: ${target}`);
}
