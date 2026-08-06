// The one Markdown -> HTML pipeline, shared by the page renderer (lib/content.ts)
// and the search-data generator (scripts/build-search-data.mjs) so the two can
// never disagree about ids or structure.
//
// The output mirrors what Jekyll (kramdown + rouge) + just-the-docs produced,
// element for element, because the theme's compiled CSS and its verbatim JS
// (search previews, copy-code buttons, mermaid.run) all key off that exact DOM:
//
//   - headings:    <h2 id="kramdown-slug"><a class="anchor-heading" ...><svg .../></a> Text</h2>
//   - code:        <div class="language-x highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
//   - mermaid:     <pre class="language-mermaid"><code> (mermaid.run's querySelector)
//   - tables:      <div class="table-wrapper"><table> (the table_wrappers layout)

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";

/**
 * kramdown's auto_id algorithm, which is what every in-content `#anchor` link
 * in the existing docs was written against: lowercase, keep only letters,
 * digits, spaces and hyphens, spaces become hyphens, leading non-letters are
 * stripped, empty falls back to "section". Duplicates get -1, -2... suffixes.
 */
export function kramdownSlug(text) {
  let id = text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/ /g, "-");
  id = id.replace(/^[^a-z]+/, "");
  return id || "section";
}

/** Wraps every table in the scroll container the table_wrappers layout added. */
function rehypeTableWrappers() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "table" || !parent || typeof index !== "number") {
        return;
      }
      if (parent.tagName === "div" && (parent.properties?.className ?? []).includes("table-wrapper")) {
        return;
      }
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-wrapper"] },
        children: [node],
      };
    });
  };
}

/**
 * Rebuilds fenced code blocks into rouge's wrapper structure (which the theme's
 * copy-code JS and CSS target), and mermaid fences into the bare
 * `<pre class="language-mermaid">` that mermaid.run() replaces with a diagram.
 */
function rehypeRougeBlocks() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "pre" || !parent || typeof index !== "number") {
        return;
      }
      const code = node.children?.find((child) => child.type === "element" && child.tagName === "code");
      if (!code) {
        return;
      }

      const classes = code.properties?.className ?? [];
      const langClass = classes.find((name) => typeof name === "string" && name.startsWith("language-"));
      const lang = langClass ? langClass.slice("language-".length) : "plaintext";

      if (lang === "mermaid") {
        // Bare text directly under the matched element - mermaid.run() reads
        // the element's innerHTML, so a nested <code> tag would be part of the
        // "graph text" and fail the parse.
        parent.children[index] = {
          type: "element",
          tagName: "pre",
          properties: { className: ["language-mermaid"] },
          children: code.children,
        };
        return;
      }

      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: [`language-${lang}`, "highlighter-rouge"] },
        children: [
          {
            type: "element",
            tagName: "div",
            properties: { className: ["highlight"] },
            children: [
              {
                type: "element",
                tagName: "pre",
                properties: { className: ["highlight"] },
                children: [{ type: "element", tagName: "code", properties: {}, children: code.children }],
              },
            ],
          },
        ],
      };
    });
  };
}

/**
 * kramdown-style heading ids plus just-the-docs' anchor markup
 * (anchor_headings.html with beforeHeading=true).
 */
function rehypeHeadingAnchors() {
  return (tree) => {
    const seen = new Map();
    visit(tree, "element", (node) => {
      if (!/^h[1-6]$/.test(node.tagName)) {
        return;
      }
      const text = toString(node);
      let id = node.properties?.id ?? kramdownSlug(text);
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) {
        id = `${id}-${count}`;
      }
      node.properties = { ...(node.properties ?? {}), id };
      node.children = [
        {
          type: "element",
          tagName: "a",
          properties: {
            href: `#${id}`,
            className: ["anchor-heading"],
            ariaLabelledBy: id,
          },
          children: [
            {
              type: "element",
              tagName: "svg",
              properties: { viewBox: "0 0 16 16", ariaHidden: "true" },
              children: [
                { type: "element", tagName: "use", properties: { xLinkHref: "#svg-link" }, children: [] },
              ],
            },
          ],
        },
        { type: "text", value: " " },
        ...node.children,
      ];
    });
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  // kramdown's typographic conversions: -- becomes an en dash, --- an em
  // dash, ... an ellipsis, straight quotes go curly ("oldschool" is the
  // dash mapping that matches kramdown).
  .use(remarkSmartypants, { dashes: "oldschool" })
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeRougeBlocks)
  .use(rehypeTableWrappers)
  .use(rehypeHeadingAnchors)
  .use(rehypeStringify, { allowDangerousHtml: true });

/** Markdown body (front matter already stripped) -> HTML string. */
export async function renderMarkdown(markdown) {
  const file = await processor.process(markdown);
  return String(file);
}
