import type { Metadata } from "next";
import {
  buildLibraryFilterOptions,
  filterLibraryEntries,
  getLibraryPosts,
  type LibraryEntry,
  parseLibraryFilters,
} from "@repo/wp-utils";
import { ContentLibrary, ContentLibraryFilters } from "@repo/ui/sites";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Library",
  description: "Browse ReadBoot posts by article type and theory.",
};

interface LibraryPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function LibraryPage({
  searchParams,
}: LibraryPageProps) {
  const params = await searchParams;
  const filters = parseLibraryFilters({
    type: params.type,
    theory: params.theory,
  });

  const entries = await getLibraryPosts();
  const filterOptions = buildLibraryFilterOptions(entries);
  const filteredEntries = filterLibraryEntries(entries, filters);

  return (
    <ContentLibrary
      heading="Library"
      intro={
        <p>
          Browse ReadBoot posts by article type and theory. Each entry comes
          directly from WordPress content in the <code>readboot</code> category.
        </p>
      }
      items={filteredEntries}
      itemHref={(item: LibraryEntry) => `/library/${item.slug}/`}
      filters={
        <ContentLibraryFilters
          action="/library/"
          activeFilters={filters}
          articleTypes={filterOptions.articleTypes}
          theories={filterOptions.theories}
          resetHref="/library/"
        />
      }
      emptyMessage="No ReadBoot library entries matched the current filters."
    />
  );
}
