// Generates public/assets/js/search-data.json - the index just-the-docs.js
// fetches and feeds to lunr. Replicates the Jekyll template
// (assets/js/zzzz-search-data.json): one entry per page plus one per h2
// section, with the same doc/title/content/url/relUrl fields and the same
// text-flattening rules (block ends become ". ", list/cell boundaries become
// " | ", "Table of contents" removed).
//
// Runs as prebuild, so the index always matches the content that shipped.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { renderMarkdown } from "../lib/markdown.mjs";

const webRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentDir = path.join(webRoot, "content");

const pages = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".md")) {
      const { data, content } = matter(fs.readFileSync(full, "utf8"));
      if (data.title && data.layout !== "redirect" && data.permalink !== "/404.html") {
        // Same trailing-slash normalization lib/content.ts applies.
        if (!data.permalink.endsWith("/") && !data.permalink.endsWith(".html")) {
          data.permalink += "/";
        }
        pages.push({ ...data, body: content });
      }
    }
  }
};
walk(contentDir);

/** The template's strip_html + block-boundary flattening. */
function flatten(html) {
  let text = html
    .replace(/<\/h/g, " . </h")
    .replace(/<hr/g, " . <hr")
    .replace(/<\/p/g, " . </p")
    .replace(/<ul/g, " . <ul")
    .replace(/<\/ul/g, " . </ul")
    .replace(/<ol/g, " . <ol")
    .replace(/<\/ol/g, " . </ol")
    .replace(/<\/tr/g, " . </tr")
    .replace(/<li/g, " | <li")
    .replace(/<\/li/g, " | </li")
    .replace(/<\/td/g, " | </td")
    .replace(/<td/g, " | <td")
    .replace(/<\/th/g, " | </th")
    .replace(/<th/g, " | <th")
    .replace(/<[^>]*>/g, "");
  text = text
    .replace(/Table of contents/g, "")
    .replace(/\s+/g, " ")
    .replace(/\. \. \./g, ".")
    .replace(/\. \./g, ".")
    .replace(/\| \|/g, "|")
    .trim();
  return `${text} `;
}

const data = {};
let i = 0;

for (const page of pages) {
  const html = await renderMarkdown(page.body);

  // Split into h2 sections the way the template rewrites h2 -> h1 and splits.
  const parts = html.split(/<h2\b/);
  const head = parts[0];
  let titleFound = false;

  for (const part of parts.slice(1)) {
    const section = `<h2${part}`;
    const headingMatch = section.match(/^<h2[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h2>/);
    if (!headingMatch) {
      continue;
    }
    const id = headingMatch[1];
    const headingText = headingMatch[2].replace(/<[^>]*>/g, "").trim();
    const rest = section.slice(headingMatch[0].length);

    if (headingText === page.title && head.trim() === "") {
      titleFound = true;
      data[i] = {
        doc: page.title,
        title: page.title,
        content: flatten(rest),
        url: page.permalink,
        relUrl: page.permalink,
      };
    } else {
      data[i] = {
        doc: page.title,
        title: headingText,
        content: flatten(rest),
        url: `${page.permalink}#${id}`,
        relUrl: `${page.permalink}#${id}`,
      };
    }
    i++;
  }

  if (!titleFound) {
    data[i] = {
      doc: page.title,
      title: page.title,
      content: flatten(head),
      url: page.permalink,
      relUrl: page.permalink,
    };
    i++;
  }
}

const outDir = path.join(webRoot, "public", "assets", "js");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "search-data.json"), JSON.stringify(data));
console.log(`Wrote search-data.json (${i} entries from ${pages.length} pages)`);
