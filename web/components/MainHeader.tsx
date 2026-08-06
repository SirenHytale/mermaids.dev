/**
 * The top strip: search box + aux links, mirroring
 * _includes/components/{header,search_header,aux_nav}.html.
 * Aux links come from _config.yml's aux_links, all opening in a new tab.
 */
const AUX_LINKS: Array<[string, string]> = [
  ["Curseforge", "/curseforge/"],
  ["Mermaids and Mythical Creatures Download", "/mermaids/curseforge/"],
  ["Cultivation Download", "/cultivation/curseforge/"],
  ["Discord", "/discord/"],
];

const SEARCH_PLACEHOLDER = "Search Siren's Docs";

export default function MainHeader() {
  return (
    <div id="main-header" className="main-header">
      <div className="search" role="search">
        <div className="search-input-wrap">
          <input
            type="text"
            id="search-input"
            className="search-input"
            tabIndex={0}
            placeholder={SEARCH_PLACEHOLDER}
            autoComplete="off"
          />
          <label htmlFor="search-input" className="search-label">
            <span className="sr-only">{SEARCH_PLACEHOLDER}</span>
            <svg viewBox="0 0 24 24" className="search-icon" aria-hidden="true">
              <use xlinkHref="#svg-search" />
            </svg>
          </label>
        </div>
        <div id="search-results" className="search-results"></div>
      </div>
      <nav aria-label="Auxiliary" className="aux-nav">
        <ul className="aux-nav-list">
          {AUX_LINKS.map(([label, href]) => (
            <li key={href} className="aux-nav-list-item">
              <a href={href} className="site-button" target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
