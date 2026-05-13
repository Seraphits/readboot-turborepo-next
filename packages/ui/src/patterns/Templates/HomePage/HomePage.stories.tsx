import type { Meta, StoryObj } from "@storybook/react";
import type { PillarItem } from "../../homeContentTypes";
import {
  DEFAULT_PORTRAIT_PLACEHOLDER,
  type HomeHeroCopy,
  type HomeMissionCopy,
  type HomeVisionCopy,
} from "./homePageDefaults";
import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "**`PortfolioPreview`** uses `homePageDefaults.ts` (real site copy) to verify wiring end-to-end. Prefer neutral fixtures on individual organisms when you only need layout.",
      },
    },
  },
};
export default meta;

/** Full template with defaults from `homePageDefaults.ts` (production-style copy). */
export const PortfolioPreview: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
};

const neutralHero = {
  eyebrow: "Eyebrow / kicker",
  headline: "Alternate homepage headline",
  subheadline: "Subheadline for two-line stack preview.",
  intro:
    "Neutral lead paragraph for Storybook. Override these props from apps for real marketing copy.",
  primaryCta: { label: "Primary", href: "/example/" },
  secondaryCta: { label: "Secondary", href: "/other/" },
} satisfies HomeHeroCopy;

const neutralMission = {
  title: "Mission block sample title",
  accentWord: "sample",
  paragraphs: [
    "First column: neutral copy for multi-column mission layout.",
    "Second column: additional paragraph for rhythm checks.",
  ],
} satisfies HomeMissionCopy;

const neutralPillars: PillarItem[] = [
  {
    title: "Pillar A",
    tagline: "Tagline A",
    summary: "Summary for first featured card.",
    actionLabel: "Open",
    href: "/example/a/",
  },
  {
    title: "Pillar B",
    tagline: "Tagline B",
    summary: "Summary for second featured card.",
    actionLabel: "Open",
    href: "/example/b/",
  },
  {
    title: "Pillar C",
    tagline: "Tagline C",
    summary: "Summary for third featured card.",
    actionLabel: "Open",
    href: "/example/c/",
  },
];

const neutralVision = {
  title: "Vision roadmap title",
  body: "Neutral body copy for the roadmap strip.",
  generations: ["Phase one", "Phase two", "Phase three", "Phase four"],
} satisfies HomeVisionCopy;

/** Same template with neutral props (no dependency on portfolio defaults). */
export const NeutralOverrides: StoryObj<typeof HomePage> = {
  render: () => (
    <HomePage
      portraitSrc={DEFAULT_PORTRAIT_PLACEHOLDER}
      portraitAlt="Portrait placeholder"
      hero={neutralHero}
      mission={neutralMission}
      pillars={neutralPillars}
      vision={neutralVision}
    />
  ),
};
