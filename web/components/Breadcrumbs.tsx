import { SitePage, ancestorsOf } from "../lib/content";

/**
 * Breadcrumbs above the content, shown exactly when the original showed them:
 * a titled page with a parent, anywhere but the home page - see
 * _includes/components/breadcrumbs.html (whose gnarly string surgery existed
 * only because Liquid cannot walk a tree; the trail itself is just ancestors).
 */
export default function Breadcrumbs({ page }: { page: SitePage }) {
  if (page.permalink === "/" || !page.parent || !page.title) {
    return null;
  }

  const ancestors = ancestorsOf(page);
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-nav-list">
        {ancestors.map((ancestor) => (
          <li key={ancestor.permalink} className="breadcrumb-nav-list-item">
            <a href={ancestor.permalink}>{ancestor.title}</a>
          </li>
        ))}
        <li className="breadcrumb-nav-list-item">
          <span>{page.title}</span>
        </li>
      </ol>
    </nav>
  );
}
