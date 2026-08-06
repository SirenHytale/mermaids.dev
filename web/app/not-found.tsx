import { notFoundPage, renderPage } from "../lib/content";
import DocShell from "../components/DocShell";

/** The ported 404.md, rendered in the same shell as every other page. */
export default async function NotFound() {
  const page = notFoundPage();
  if (!page) {
    return <p>Page not found.</p>;
  }

  const html = await renderPage(page);
  return <DocShell page={page} html={html} />;
}
