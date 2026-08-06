import { SitePage, childrenOf, topLevelNav } from "../lib/content";

/**
 * The theme's side bar: site title (logo), mobile menu button, and the nav
 * tree. DOM mirrors _includes/components/sidebar.html + nav/links.html so the
 * compiled theme CSS and just-the-docs.js (expander clicks, mobile menu) work
 * unchanged. Active states are rendered on the server - the SCSS styles
 * .nav-list-item.active / .nav-list-link.active directly, which is what lets
 * us drop Jekyll's per-page "activation stylesheet" trick entirely.
 */

function NavList({
  pages,
  currentPermalink,
  activePermalinks,
}: {
  pages: SitePage[];
  currentPermalink: string;
  activePermalinks: Set<string>;
}) {
  return (
    <ul className="nav-list">
      {pages.map((node) => {
        const children = childrenOf(node.title!);
        const isCurrent = node.permalink === currentPermalink;
        const active = activePermalinks.has(node.permalink);
        return (
          <li key={node.permalink} className={active ? "nav-list-item active" : "nav-list-item"}>
            {children.length > 0 && (
              <button
                className="nav-list-expander btn-reset"
                aria-label={`${node.title} submenu`}
                aria-expanded={active}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use xlinkHref="#svg-arrow-right" />
                </svg>
              </button>
            )}
            <a href={node.permalink} className={isCurrent ? "nav-list-link active" : "nav-list-link"}>
              {node.title}
            </a>
            {children.length > 0 && (
              <NavList pages={children} currentPermalink={currentPermalink} activePermalinks={activePermalinks} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({
  currentPermalink,
  activePermalinks,
}: {
  currentPermalink: string;
  activePermalinks: Set<string>;
}) {
  return (
    <header className="side-bar">
      <div className="site-header">
        <a href="/" className="site-title lh-tight">
          <div className="site-logo" role="img" aria-label="Siren's Docs"></div>
        </a>
        <button id="menu-button" className="site-button btn-reset" aria-label="Menu" aria-expanded={false}>
          <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
            <use xlinkHref="#svg-menu" />
          </svg>
        </button>
      </div>

      <nav aria-label="Main" id="site-nav" className="site-nav">
        <NavList pages={topLevelNav()} currentPermalink={currentPermalink} activePermalinks={activePermalinks} />
      </nav>

      <div className="d-md-block d-none site-footer"></div>
    </header>
  );
}
