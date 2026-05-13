import type { Meta, StoryObj } from "@storybook/react";
import type { PillarItem } from "../../homeContentTypes";
import { FeaturedPillarsSection } from "./FeaturedPillarsSection";

/** Neutral three-up data for Storybook (production copy lives in `homePageDefaults.ts`). */
const neutralPillars: PillarItem[] = [
  {
    title: "Pillar one",
    tagline: "Tagline for first card",
    summary: "Short summary for layout preview.",
    actionLabel: "Open",
    href: "/example/one/",
  },
  {
    title: "Pillar two",
    tagline: "Tagline for second card",
    summary: "Second card body copy for rhythm and column balance.",
    actionLabel: "Open",
    href: "/example/two/",
  },
  {
    title: "Pillar three",
    tagline: "Tagline for third card",
    summary: "Third card closes the row for responsive grid checks.",
    actionLabel: "Open",
    href: "/example/three/",
  },
];

const meta: Meta<typeof FeaturedPillarsSection> = {
  component: FeaturedPillarsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Three-up featured cards: shared pillar placeholder art when `imageSrc` is omitted (`placeholders.ts`), titles, and `next/link` actions.",
      },
    },
  },
};
export default meta;

export const ThreePillars: StoryObj<typeof FeaturedPillarsSection> = {
  name: "Three pillars (neutral)",
  render: () => <FeaturedPillarsSection pillars={neutralPillars} />,
};
