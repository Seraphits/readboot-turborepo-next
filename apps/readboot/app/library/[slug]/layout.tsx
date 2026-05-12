import type { ReactNode } from "react";
import { getLibraryPosts } from "@repo/wp-utils";
import { ContentSidebarNav } from "@repo/ui/sites";

interface LibrarySlugLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function LibrarySlugLayout({
  children,
  params,
}: LibrarySlugLayoutProps) {
  const { slug } = await params;
  const entries = await getLibraryPosts();

  const sidebarItems = entries
    .filter((entry) => entry.slug !== slug)
    .map((entry) => ({
      id: entry.id,
      title: entry.title,
      href: `/library/${entry.slug}/`,
    }));

  return (
    <div className="shell">
      <div className="sidebar">
        <ContentSidebarNav
          heading="More from the library"
          ariaLabel="Other library posts"
          items={sidebarItems}
        />
      </div>

      <div className="main">{children}</div>
    </div>
  );
}
