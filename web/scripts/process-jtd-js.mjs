// Produces public/assets/js/just-the-docs.js from the theme's liquid-templated
// original (assets/js/just-the-docs.js in the Jekyll tree), resolving every
// liquid tag for THIS site's _config.yml:
//
//   search_enabled: true      search.button: false      search.previews: 2
//   search.preview_words_before: 3   search.preview_words_after: 3
//   search.rel_url: true      search.tokenizer_separator: /[\s/]+/
//   search.focus_shortcut_key: k     enable_copy_code_button: true
//
// Run manually (npm run jtd-js); the output is committed so builds do not
// depend on the Jekyll tree still existing. The script fails loudly if any
// liquid survives - a silent leftover would be a syntax error in the browser.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(webRoot);
const source = fs.readFileSync(path.join(repoRoot, "assets", "js", "just-the-docs.js"), "utf8");

let js = source;

// Jekyll front matter block at the top of the source file.
js = js.replace(/^---\r?\n[\s\S]*?---\r?\n/, "");

// The one FALSE conditional: the floating search button (search.button: false).
js = js.replace(
  /\{%- if site\.search_enabled != false and site\.search\.button %\}[\s\S]*?\{%- endif %\}/,
  "",
);

// Value substitutions.
js = js.replace(
  /\{\{ "assets\/js\/search-data\.json" \| relative_url \}\}/,
  "/assets/js/search-data.json",
);
js = js.replace(
  /\{\{ site\.search\.tokenizer_separator \| default: site\.search_tokenizer_separator \| default: "\/\[\\s\\-\/\]\+\/" \}\}/,
  "/[\\s/]+/",
);
js = js.replace(/\{\{ site\.search\.focus_shortcut_key \}\}/, "k");
js = js.replace(/\{\{ site\.search\.preview_words_before \| default: 5 \}\}/, "3");
js = js.replace(/\{\{ site\.search\.preview_words_after \| default: 10 \}\}/, "3");
js = js.replace(/\{\{ site\.search\.previews \| default: 3 \}\}/, "2");
js = js.replace(
  /\{\{ "assets\/css\/just-the-docs-" \| relative_url \}\}/,
  "/assets/css/just-the-docs-",
);

// Includes that are empty for this site.
js = js.replace(/^.*\{% include lunr\/custom-index\.js %\}.*$/m, "");
js = js.replace(/^.*\{% include js\/custom\.js %\}.*$/m, "");

// Every remaining conditional is TRUE for this config - drop just the tags.
js = js.replace(/^\s*\{%-? (if|elsif|else|endif|unless|endunless)[^%]*%\}\s*$/gm, "");

const leftovers = js.match(/\{\{|\{%/g);
if (leftovers) {
  const lines = js
    .split("\n")
    .map((line, i) => (/\{\{|\{%/.test(line) ? `${i + 1}: ${line.trim()}` : null))
    .filter(Boolean);
  throw new Error(`Liquid survived processing:\n${lines.join("\n")}`);
}

const outDir = path.join(webRoot, "public", "assets", "js");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "just-the-docs.js"), js);
console.log(`Wrote just-the-docs.js (${js.length} bytes)`);
