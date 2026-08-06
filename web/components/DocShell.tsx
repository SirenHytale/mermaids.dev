import { SitePage, ancestorsOf } from "../lib/content";
import Icons from "./Icons";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
import Breadcrumbs from "./Breadcrumbs";
import ChildrenNav from "./ChildrenNav";
import PageFooter from "./PageFooter";

/**
 * The whole just-the-docs page body (_layouts/default.html), shared by every
 * route and the 404 page. The rendered markdown arrives as an HTML string -
 * the pipeline in lib/markdown.mjs has already shaped it the way the theme's
 * CSS and JS expect.
 *
 * The trailing module script is the theme's mermaid activation
 * (_includes/components/mermaid.html for v10+). The CDN import is what the
 * live site actually does - _config.yml pins mermaid 11.16.0 and leaves the
 * local `path:` commented out (the mermaid.esm.min.mjs vendored in assets/ is
 * a stale non-self-contained copy that was never being loaded). Module
 * scripts are deferred, so this runs after the DOM exists, like the original.
 */
const MERMAID_SCRIPT = `
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.16.0/dist/mermaid.esm.min.mjs';
mermaid.initialize({ theme: "dark" });
mermaid.run({ querySelector: '.language-mermaid' });
`;

export default function DocShell({ page, html }: { page: SitePage; html: string }) {
  const activePermalinks = new Set<string>([page.permalink, ...ancestorsOf(page).map((a) => a.permalink)]);

  return (
    <>
      <a className="skip-to-main" href="#main-content">
        Skip to main content
      </a>
      <Icons />
      <Sidebar currentPermalink={page.permalink} activePermalinks={activePermalinks} />
      <div className="main" id="top">
        <MainHeader />
        <div className="main-content-wrap">
          <Breadcrumbs page={page} />
          <div id="main-content" className="main-content">
            <main>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <ChildrenNav page={page} />
            </main>
            <PageFooter />
          </div>
        </div>
        <div className="search-overlay"></div>
      </div>

      <script type="module" dangerouslySetInnerHTML={{ __html: MERMAID_SCRIPT }} />
    </>
  );
}
