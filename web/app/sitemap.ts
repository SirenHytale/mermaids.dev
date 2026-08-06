import type { MetadataRoute } from "next";
import { contentPages } from "../lib/content";

/** Replaces jekyll-sitemap: every real document page, none of the redirect bounces. */
export default function sitemap(): MetadataRoute.Sitemap {
  return contentPages().map((page) => ({
    url: `https://www.mermaids.dev${page.permalink}`,
  }));
}
