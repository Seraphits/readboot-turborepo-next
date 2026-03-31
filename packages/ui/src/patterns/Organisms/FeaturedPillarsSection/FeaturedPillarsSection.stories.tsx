import type { Meta, StoryObj } from "@storybook/react";
import { defaultPillars } from "../../Templates/HomePage/homePageDefaults";
import { FeaturedPillarsSection } from "./FeaturedPillarsSection";

const meta: Meta<typeof FeaturedPillarsSection> = {
  component: FeaturedPillarsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Three-up featured cards: shared pillar placeholder art (`placeholders.ts`), titles, and `next/link` actions.",
      },
    },
  },
};
export default meta;

export const ThreePillars: StoryObj<typeof FeaturedPillarsSection> = {
  name: "Three pillars (home defaults)",
  render: () => <FeaturedPillarsSection pillars={defaultPillars} />,
};
