import type { LibraryEntry } from "@repo/wp-utils";
import type { Meta, StoryObj } from "@storybook/react";
import { ContentLibraryCard } from "./ContentLibraryCard";

const baseItem: LibraryEntry = {
  id: "1",
  slug: "demo-entry",
  title: "Demo library entry title",
  excerpt: "<p>Card excerpt with <em>inline</em> markup.</p>",
  date: "2026-03-01T12:00:00.000Z",
  articleType: { value: "essay", label: "Essay" },
  theories: [
    { value: "a", label: "Theory A" },
    { value: "b", label: "Theory B" },
  ],
};

const meta: Meta<typeof ContentLibraryCard> = {
  component: ContentLibraryCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Single archive card: optional featured image, title link, HTML excerpt, and classification meta.",
      },
    },
  },
};
export default meta;

export const WithImage: StoryObj<typeof ContentLibraryCard> = {
  args: {
    href: "/library/demo-entry/",
    item: {
      ...baseItem,
      image: {
        src: "/assets/storybook/pillar-placeholder.svg",
        alt: "Placeholder",
      },
    },
  },
};

export const WithoutImage: StoryObj<typeof ContentLibraryCard> = {
  args: {
    href: "/library/demo-entry/",
    item: { ...baseItem, image: undefined },
  },
};
