# mermaids.dev — how to work in this repo

**The site is one Next.js application, in `web/`.** It is a faithful port of the
Jekyll/just-the-docs site that fills the rest of this repo — same pages, same URLs, same
dark look — built 2026-08-06 for Vercel hosting (project Root Directory: `web`).

The Jekyll tree (`_layouts/`, `_includes/`, `_sass/`, the content dirs at the root,
`_config.yml`) is the ORIGINAL site, still deployable to GitHub Pages until the Vercel
cutover is done. After cutover it can be deleted — but note `web/scripts/build-css.mjs`
compiles the committed stylesheet FROM `_sass/`, so regenerate any CSS changes before
removing it, or move `_sass` under `web/` at that point.

## The rules

- **URLs come from front matter `permalink:` only** — never from file paths
  (`othermods/sirenscommands/` serves `/sirens-commands/`). Every page must declare one;
  `web/lib/content.ts` throws on a page without it. Trailing slashes are normalized on.
- **Nav is just-the-docs semantics**: a page is in the nav iff it has a `title`;
  nesting is `parent: <exact title>` (titles used as parents must stay unique);
  ordering is `nav_order` (numbers, then strings, then untitled-order by title).
  `/cultivation/` is deliberately a *titled redirect* — a nav entry that bounces to
  xianxia.dev.
- **`layout: redirect` pages become next.config server redirects** (307), read from the
  same front matter at build time. Add/retire a bounce by editing the .md.
- **Content lives in `web/content/`** — the copies are the source of truth now; the
  root-level Jekyll content dirs are frozen history.
- The DOM classes are the theme's own (`.side-bar`, `.nav-list-item.active`,
  `.highlighter-rouge`, …). The compiled CSS and the theme JS key off them — do not
  "clean them up".

## Generated-and-committed artifacts (web/public/assets/)

| File | Generator | When to re-run |
| --- | --- | --- |
| `css/just-the-docs-default.css` | `npm run css` | theme SCSS changes (needs `_sass/`) |
| `js/just-the-docs.js` | `npm run jtd-js` | theme JS changes (needs Jekyll tree) |
| `js/search-data.json` | prebuild (automatic) | never by hand |

`npm run jtd-js` resolves the liquid in the theme's JS for this site's `_config.yml`
values and **fails loudly if any liquid survives** — a leftover `{%` is a browser syntax
error (the front-matter `---` block already bit once).

## Rendering fidelity notes

- `web/lib/markdown.mjs` is the ONE markdown pipeline (pages + search index). It
  reproduces kramdown/rouge output: kramdown-style heading ids (in-content `#anchor`
  links were written against them), rouge's code-block wrapper divs (copy-code buttons
  target them), `<div class="table-wrapper">`, smartypants typography
  (`--` → en dash, kramdown-style), and mermaid fences as a bare
  `<pre class="language-mermaid">` — **no inner `<code>` tag; mermaid.run() reads
  innerHTML and a nested tag breaks the parse**.
- Mermaid loads from the jsdelivr CDN at 11.16.0, because that is what the live Jekyll
  site does (`_config.yml` has the local `path:` commented out; the
  `mermaid.esm.min.mjs` once vendored in assets was stale and never loaded).
- Code blocks render without token colors (the docs have almost no highlighted-language
  fences — 2 json, 1 java). Rouge's pygments spans were the one thing not ported.

## Live-site bugs fixed in the port (web/content differs from the frozen originals)

- Home + 404 linked `/othermods/marriage/…` which never existed (`/marriage/…` is real).
- `mermaids/config.md` had a same-page `#tail-color-permissions` anchor whose section
  actually lives on `/mermaids/permissions/`.

## What is NOT here

`api.mermaids.dev` (the version API the mods poll) is a separate project and unaffected
by this repo. The only mod-embedded link into this site is
`https://www.mermaids.dev/mermaids/curseforge/` — a redirect page; keep that permalink.
