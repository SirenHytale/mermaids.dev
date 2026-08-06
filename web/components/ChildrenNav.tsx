import { SitePage, childrenOf } from "../lib/content";

/**
 * The automatic "Table of contents" listing child pages at the bottom of a
 * parent page - _includes/components/children_nav.html + toc_heading_custom.
 */
export default function ChildrenNav({ page }: { page: SitePage }) {
  const children = page.title ? childrenOf(page.title) : [];
  if (children.length === 0) {
    return null;
  }

  return (
    <>
      <hr />
      <h2 className="text-delta">Table of contents</h2>
      <ul>
        {children.map((child) => (
          <li key={child.permalink}>
            <a href={child.permalink}>{child.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
