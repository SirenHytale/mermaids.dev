import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  contentPages,
  pageByPermalink,
  permalinkToSegments,
  renderPage,
} from "../../lib/content";
import DocShell from "../../components/DocShell";

/**
 * The one route for every document page - the catch-all maps each Jekyll
 * permalink (the only URL truth) to a statically generated page.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return contentPages().map((page) => ({ slug: permalinkToSegments(page.permalink) }));
}

function resolve(slug: string[] | undefined) {
  const permalink = slug && slug.length > 0 ? `/${slug.join("/")}/` : "/";
  return pageByPermalink(permalink);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) {
    return {};
  }
  return {
    title: page.permalink === "/" ? "Siren's Docs" : `${page.title} | Siren's Docs`,
    description: page.description,
    alternates: { canonical: page.permalink },
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) {
    notFound();
  }

  const html = await renderPage(page);
  return <DocShell page={page} html={html} />;
}
