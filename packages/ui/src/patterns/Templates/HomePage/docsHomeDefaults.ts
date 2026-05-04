/**
 * Default copy for the **docs app** landing page (`/docs/`).
 * Same visual language as the portfolio homepage; content highlights the design-system docs,
 * pattern lab / style guide, and how the site is engineered.
 *
 * Override at the consuming route when you add env-based portfolio URLs.
 */

import type { PillarItem } from "../../homeContentTypes";
import type {
  HomeHeroCopy,
  HomeMissionCopy,
  HomeVisionCopy,
} from "./homePageDefaults";
import { portraitPlaceholder } from "../../../assets/storybook/placeholders";

/** Reuse shared portrait placeholder until you add a docs-specific asset. */
export const DOCS_PORTRAIT_PLACEHOLDER = portraitPlaceholder;

/** @deprecated Use `HomeHeroCopy` from the same template — kept for existing imports. */
export type DocsHomeHeroCopy = HomeHeroCopy;
/** @deprecated Use `HomeMissionCopy` */
export type DocsMissionCopy = HomeMissionCopy;
/** @deprecated Use `HomeVisionCopy` */
export type DocsVisionCopy = HomeVisionCopy;

/**
 * Portfolio primary link: production domain works for standalone docs deploys.
 * Override in the app with `NEXT_PUBLIC_PORTFOLIO_ORIGIN` + trailing slash if needed.
 */
export const defaultDocsPortfolioOrigin = "https://www.readboot.com/";

export const defaultDocsHomeHero: HomeHeroCopy = {
  eyebrow: "Design Engineer // Documentation",
  headline: "Nicole Trapp",
  subheadline: "Design system, style guide, and pattern lab — in public.",
  intro:
    "This documentation portal is part of the same ReadBoot portfolio you see on the main site. Here I ship the Futurist Carton token set, component patterns, and the engineering story behind a Next.js Turborepo that pairs shared UI, WordPress content, and Storybook-ready workflows.",
  primaryCta: { label: "Portfolio site", href: defaultDocsPortfolioOrigin },
  secondaryCta: { label: "Jump to style guide", href: "/docs/style-guide/" },
};

export const defaultDocsMission: HomeMissionCopy = {
  title: "Documentation as Part of the Product",
  accentWord: "Documentation",
  paragraphs: [
    "A design system is only as honest as the surface where teams can see it.",
    "I treat this site as a living artifact: tokens and SCSS modules in `@repo/ui`, narrative copy migrating toward WordPress, and interactive examples moving toward Storybook portable stories — so neither marketing nor engineering can drift from the same source of truth.",
  ],
};

export const defaultDocsPillars: PillarItem[] = [
  {
    title: "Style Guide",
    tagline: "Futurist Carton tokens, type, color, and layout.",
    summary:
      "The practical face of the brand: how paper, ink, charcoal borders, radial corners, and bouncy interaction behave across light and dark modes. Start here before you touch layout or ship a new molecule.",
    actionLabel: "Open the style guide",
    href: "/docs/style-guide/",
  },
  {
    title: "Pattern lab (components)",
    tagline: "Atoms → organisms, composition, and usage notes.",
    summary:
      "Patterns and component documentation — evolving into Storybook portable stories wired from WordPress so examples stay executable, not screenshots. Today’s hub: patterns, accessibility callouts, and compositional guidance.",
    actionLabel: "Browse patterns",
    href: "/docs/style-guide/patterns/",
  },
  {
    title: "How this site is coded",
    tagline: "Monorepo, SCSS modules, and shared packages.",
    summary:
      "Next.js App Router apps (`web`, `docs`) share `@repo/ui` and `@repo/wp-utils`: SCSS modules that `@use` Atoms tokens only, no inline styles in app routes, and guardrails that keep imports shallow. Default styles and spacing pages document the mechanics.",
    actionLabel: "Default styles & spacing",
    href: "/docs/style-guide/default-styles/",
  },
];

export const defaultDocsVision: HomeVisionCopy = {
  title: "Roadmap for this documentation site",
  body: "The rebuild pairs WordPress for long-form guidance, Storybook for live component truth, and `@repo/ui/patterns/globals.scss` so web and docs never fork the cascade. Sections below label where we are now versus what ships next — you’ll flesh out each chapter after the main portfolio pass.",
  generations: [
    "Style guide live",
    "Pattern lab depth",
    "Portable stories",
    "WP-driven copy",
  ],
};
