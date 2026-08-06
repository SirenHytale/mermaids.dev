// Compiles the just-the-docs theme SCSS (still living in the Jekyll tree at
// the repo root) into the one committed stylesheet the site serves. This is
// what Jekyll did with assets/css/just-the-docs-default.scss +
// _includes/css/just-the-docs.scss.liquid, with the liquid resolved for THIS
// site's config: color_scheme dark, the Siren logo, and the five configured
// callouts.
//
// Run manually (npm run css) whenever the theme SCSS changes; the output
// (public/assets/css/just-the-docs-default.css) is committed, so builds do not
// depend on the Jekyll tree still existing.

import * as sass from "sass";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(webRoot);
const sassRoot = path.join(repoRoot, "_sass");

// _includes/css/callouts.scss.liquid expanded for _config.yml's callouts with
// color_scheme dark (background hue 300, color hue 300).
const CALLOUTS = [
  ["highlight", "yellow", null],
  ["important", "blue", "Important"],
  ["new", "green", "New"],
  ["note", "purple", "Note"],
  ["warning", "red", "Warning"],
];

function calloutScss([name, color, title]) {
  const titleBlock = title
    ? `&::before {
        color: $${color}-300;
        content: "${title}";
        display: block;
        font-weight: bold;
        text-transform: uppercase;
        font-size: .75em;
        padding-bottom: .125rem;
    }`
    : "";
  return `
p.${name}, blockquote.${name} {
    border: 1px $${color}-300 solid;
    border-left: $border-radius solid $${color}-300;
    border-radius: $border-radius;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08);
    padding: .8rem;
    ${titleBlock}
    > .${name}-title {
      color: $${color}-300;
      display: block;
      font-weight: bold;
      text-transform: uppercase;
      font-size: .75em;
      padding-bottom: .125rem;
    }
}
p.${name}-title, blockquote.${name}-title {
    border: 1px $${color}-300 solid;
    border-left: $border-radius solid $${color}-300;
    border-radius: $border-radius;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08);
    padding: .8rem;
    > p:first-child {
      margin-top: 0;
      margin-bottom: 0;
      color: $${color}-300;
      display: block;
      font-weight: bold;
      text-transform: uppercase;
      font-size: .75em;
      padding-bottom: .125rem;
    }
}
blockquote.${name} {
  margin-left: 0;
  margin-right: 0;
  > p:first-child { margin-top: 0; }
  > p:last-child { margin-bottom: 0; }
}
blockquote.${name}-title {
  margin-left: 0;
  margin-right: 0;
  > p:nth-child(2) { margin-top: 0; }
  > p:last-child { margin-bottom: 0; }
}
`;
}

const entry = `
$logo: "/assets/images/utils/siren-logo.png";
@import "./support/support";
@import "./custom/setup";
@import "./color_schemes/light";
@import "./color_schemes/dark";
@import "./modules";

div.opaque {
  background-color: $body-background-color;
}
${CALLOUTS.map(calloutScss).join("\n")}
@import "./custom/custom";
`;

const result = sass.compileString(entry, {
  loadPaths: [sassRoot],
  style: "compressed",
  quietDeps: true,
  silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div", "mixed-decls", "abs-percent"],
});

const outDir = path.join(webRoot, "public", "assets", "css");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "just-the-docs-default.css"), result.css);
console.log(`Wrote just-the-docs-default.css (${result.css.length} bytes)`);
