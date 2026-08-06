// The content model: every .md file under content/, keyed by its Jekyll
// permalink - which is the ONLY source of URL truth here. The directory layout
// does not always match (othermods/sirenscommands/ serves /sirens-commands/),
// so nothing may ever derive a route from a file path.
//
// Nav shape is just-the-docs': a page is in the nav when it has a title,
// nesting is by `parent: <exact title>`, ordering is nav_order-numbers first,
// then nav_order-strings, then untitled-order pages by title (numbers before
// strings), matching components/nav/sorted.html with nav_sort: case_sensitive.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderMarkdown } from "./markdown.mjs";

export interface SitePage {
  /** The Jekyll permalink, always with the trailing slash it was written with. */
  permalink: string;
  title?: string;
  description?: string;
  layout: string;
  navOrder?: number | string;
  parent?: string;
  /** External URL for layout: redirect pages. */
  redirectTo?: string;
  /** Raw markdown body (front matter stripped). */
  body: string;
  /** content/-relative source path, for error messages. */
  sourcePath: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * One page (/mermaids/permissions) was authored without the trailing slash
 * every other permalink carries. The whole app lives in Next's trailingSlash
 * world, so permalinks are normalized to it on load - a bare inbound link
 * gets Next's automatic 308 onto the canonical slashed URL.
 */
function normalizePermalink(permalink: string): string {
  if (permalink.endsWith("/") || permalink.endsWith(".html")) {
    return permalink;
  }
  return `${permalink}/`;
}

let cache: SitePage[] | null = null;

export function allPages(): SitePage[] {
  if (cache) {
    return cache;
  }

  const pages: SitePage[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".md")) {
        const { data, content } = matter(fs.readFileSync(full, "utf8"));
        if (!data.permalink) {
          throw new Error(`Page without a permalink: ${full} - every page must declare its URL.`);
        }
        pages.push({
          permalink: normalizePermalink(data.permalink),
          title: data.title,
          description: data.description,
          layout: data.layout ?? "page",
          navOrder: data.nav_order,
          parent: data.parent,
          redirectTo: data.redirect_to,
          body: content,
          sourcePath: path.relative(CONTENT_DIR, full),
        });
      }
    }
  };
  walk(CONTENT_DIR);

  const seen = new Map<string, string>();
  for (const page of pages) {
    const existing = seen.get(page.permalink);
    if (existing) {
      throw new Error(`Duplicate permalink ${page.permalink}: ${existing} and ${page.sourcePath}`);
    }
    seen.set(page.permalink, page.sourcePath);
  }

  cache = pages;
  return pages;
}

/** Every page that renders as a document (everything except the redirect bounces and 404). */
export function contentPages(): SitePage[] {
  return allPages().filter(
    (page) => page.layout !== "redirect" && page.permalink !== "/404.html",
  );
}

export function redirectPages(): SitePage[] {
  return allPages().filter((page) => page.layout === "redirect");
}

export function pageByPermalink(permalink: string): SitePage | undefined {
  return allPages().find((page) => page.permalink === permalink);
}

export function notFoundPage(): SitePage | undefined {
  return pageByPermalink("/404.html");
}

/** just-the-docs nav ordering - see components/nav/sorted.html. */
export function sortPages(pages: SitePage[]): SitePage[] {
  const navNumber = pages.filter((p) => typeof p.navOrder === "number");
  const navString = pages.filter((p) => typeof p.navOrder === "string");
  const rest = pages.filter((p) => p.navOrder === undefined);
  const titleNumber = rest.filter((p) => typeof p.title === "number");
  const titleString = rest.filter((p) => typeof p.title !== "number");

  navNumber.sort((a, b) => (a.navOrder as number) - (b.navOrder as number));
  // nav_sort: case_sensitive - plain lexicographic, capitals before lowercase.
  navString.sort((a, b) => ((a.navOrder as string) < (b.navOrder as string) ? -1 : 1));
  titleString.sort((a, b) => ((a.title ?? "") < (b.title ?? "") ? -1 : 1));

  return [...navNumber, ...navString, ...titleNumber, ...titleString];
}

/**
 * Pages that appear in the nav: every titled page except 404. Note this
 * includes /cultivation/ - a titled REDIRECT page whose nav entry, exactly as
 * on the Jekyll site, bounces to xianxia.dev (served here by next.config's
 * redirects rather than a rendered page).
 */
function navPages(): SitePage[] {
  return allPages().filter((page) => page.title !== undefined && page.permalink !== "/404.html");
}

export function topLevelNav(): SitePage[] {
  return sortPages(navPages().filter((page) => page.parent === undefined));
}

export function childrenOf(title: string | undefined): SitePage[] {
  if (!title) {
    return [];
  }
  return sortPages(navPages().filter((page) => page.parent === title));
}

/** The breadcrumb trail above a child page: just its ancestors, root-first. */
export function ancestorsOf(page: SitePage): SitePage[] {
  const trail: SitePage[] = [];
  let current = page;
  while (current.parent) {
    const parent = navPages().find((candidate) => candidate.title === current.parent);
    if (!parent) {
      break;
    }
    trail.unshift(parent);
    current = parent;
  }
  return trail;
}

/** Permalink -> catch-all route segments. "/" -> []. */
export function permalinkToSegments(permalink: string): string[] {
  return permalink.split("/").filter(Boolean);
}

export async function renderPage(page: SitePage): Promise<string> {
  return renderMarkdown(page.body);
}
