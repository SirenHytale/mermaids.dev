import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

/**
 * The 38 Jekyll `layout: redirect` bounce pages (e.g. /mermaids/curseforge/ ->
 * CurseForge) become real server-side redirects. Read straight from the
 * content front matter so a redirect is added or retired by editing the .md
 * file, exactly as before. Temporary (307), because the targets are external
 * URLs the stores occasionally move.
 *
 * trailingSlash keeps every URL byte-identical to the Jekyll site
 * (permalink: pretty).
 */
function collectRedirects(): Array<{ source: string; destination: string; permanent: boolean }> {
  const contentDir = path.join(__dirname, "content");
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".md")) {
        const text = fs.readFileSync(full, "utf8");
        const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) {
          continue;
        }
        const layout = match[1].match(/^layout:\s*(.+)$/m)?.[1]?.trim();
        const permalink = match[1].match(/^permalink:\s*(.+)$/m)?.[1]?.trim();
        const target = match[1].match(/^redirect_to:\s*(.+)$/m)?.[1]?.trim();
        if (layout === "redirect" && permalink && target) {
          redirects.push({
            source: permalink.replace(/\/$/, ""),
            destination: target,
            permanent: false,
          });
        }
      }
    }
  };
  walk(contentDir);
  return redirects;
}

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return collectRedirects();
  },
};

export default nextConfig;
