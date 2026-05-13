import type { LibraryEntry } from "@repo/wp-utils";
import type { Meta, StoryObj } from "@storybook/react";
import { ContentLibrary } from "./ContentLibrary";
import { ContentLibraryFilters } from "./ContentLibraryFilters";

const sampleItems: LibraryEntry[] = [
  {
    id: "1",
    slug: "first-entry",
    title: "First library entry",
    excerpt: "<p>Short <strong>excerpt</strong> for card layout.</p>",
    date: "2026-01-10T12:00:00.000Z",
    image: {
      src: "/assets/storybook/pillar-placeholder.svg",
      alt: "Placeholder illustration",
    },
    articleType: { value: "essay", label: "Essay" },
    theories: [
      { value: "rbeos", label: "RBEOS" },
      { value: "lab", label: "Lab note" },
    ],
  },
  {
    id: "2",
    slug: "second-entry",
    title: "Second entry without featured image",
    excerpt: "<p>Excerpt only.</p>",
    date: "2026-02-01T12:00:00.000Z",
    articleType: { value: "brief", label: "Brief" },
    theories: [{ value: "rbeos", label: "RBEOS" }],
  },
];

const meta: Meta<typeof ContentLibrary> = {
  component: ContentLibrary,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Archive shell: heading, optional intro and filter slot, count, and a list of `ContentLibraryCard` rows.",
      },
    },
  },
};
export default meta;

export const WithEntries: StoryObj<typeof ContentLibrary> = {
  args: {
    heading: "Library",
    intro: <p>Intro slot — neutral placeholder copy.</p>,
    items: sampleItems,
    itemHref: (item) => `/library/${item.slug}/`,
  },
};

export const EmptyState: StoryObj<typeof ContentLibrary> = {
  args: {
    heading: "Library",
    items: [],
    itemHref: (item) => `/library/${item.slug}/`,
    emptyMessage: "No entries matched these filters (demo).",
  },
};

export const WithFiltersSlot: StoryObj<typeof ContentLibrary> = {
  args: {
    heading: "Library with filters",
    items: sampleItems,
    itemHref: (item) => `/library/${item.slug}/`,
    filters: (
      <ContentLibraryFilters
        action="/library/"
        activeFilters={{ types: ["essay"], theories: [] }}
        articleTypes={[
          { value: "essay", label: "Essay", count: 2 },
          { value: "brief", label: "Brief", count: 1 },
        ]}
        theories={[{ value: "rbeos", label: "RBEOS", count: 2 }]}
        resetHref="/library/"
      />
    ),
  },
};
