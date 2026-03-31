/** Default homepage copy & URLs — override via `HomePage` props from the app when ready. */

import type { PillarItem } from "../../homeContentTypes";
import { portraitPlaceholder } from "../../../assets/storybook/placeholders";

export type { PillarItem } from "../../homeContentTypes";

export const DEFAULT_PORTRAIT_PLACEHOLDER = portraitPlaceholder;

/** Structural copy for hero / mission / vision — portfolio and docs defaults both satisfy these. */
export type HomeHeroCopy = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type HomeMissionCopy = {
  title: string;
  accentWord: string;
  paragraphs: readonly string[];
};

export type HomeVisionCopy = {
  title: string;
  body: string;
  generations: readonly string[];
};

export const defaultHomeHero = {
  eyebrow: "Design Engineer // Learning Technologist",
  headline: "Nicole Trapp",
  subheadline: "Engineering the Operating Systems of Human Growth.",
  intro:
    'I build systems that respect the learner’s finite resources. From architecting high-performance monorepo design systems to developing theoretical frameworks for personalized education, my work focuses on eliminating systemic waste to empower the "bottom-up" learner.',
  primaryCta: { label: "View portfolio", href: "/projects/" },
  secondaryCta: { label: "Documentation", href: "/docs/" },
} as const satisfies HomeHeroCopy;

export const defaultMission = {
  title: "Solving the Alignment Problem",
  /** "Alignment" is styled with brand accent (no glitch effect). */
  accentWord: "Alignment" as const,
  /** Two short paragraphs read better in a multi-column layout. */
  paragraphs: [
    'Traditional systems ask: "What are we required to teach?"',
    'I ask: "Why does this specific learner need this to improve their life?"',
  ] as const,
} as const satisfies HomeMissionCopy;

export const defaultPillars: PillarItem[] = [
  {
    title: "The RBEOS Framework (Future Studies)",
    tagline: "A Speculative Design for the 22nd Century.",
    summary:
      'A theoretical framework that rejects top-down state requirements in favor of an antifragile, purpose-driven marketplace. It utilizes the "Six Boots" to filter educational waste and protect the learner\'s vision.',
    actionLabel: "Explore the framework",
    href: "/projects/",
  },
  {
    title: "AI Prompting Foundations (LDT Capstone)",
    tagline: "Scaffolding Literacy for the Modern Professional.",
    summary:
      "A Master’s Capstone developed for Bisk. This project uses the principle of Minimal Viable Competency to move professionals past the initial threshold of AI anxiety and into functional mastery—with a heavy focus on the ethics of AI interaction.",
    actionLabel: "Read on the blog",
    href: "/blog/",
  },
  {
    title: "The Design Engineering Lab (Architecture)",
    tagline: "Unifying Design Systems with Next.js Turborepo.",
    summary:
      'An engineering solution to the "Context-Switching Tax." This project showcases a unified monorepo environment that connects a shared UI package, a live documentation portal, and a production portfolio into a single source of truth.',
    actionLabel: "Open design docs",
    href: "/docs/",
  },
];

export const defaultVision = {
  title: "ReadBoot: Rebooting Education for the 22nd Century",
  body: "Change of this scale doesn’t happen in a single generation. Drawing from Strauss-Howe Generational Theory, I am mapping a 100-year roadmap—from the initial visions of today to the implementation of an individualized learning marketplace during the next global crisis.",
  generations: ["Artist", "Philosopher", "Nomad", "Hero"] as const,
} as const satisfies HomeVisionCopy;

export const defaultConnect = {
  title: "Let’s Design for the Learner.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/futuristnicole/" },
    {
      label: "GitHub",
      href: "https://github.com/Seraphits/readboot-turborepo-next",
    },
  ] as const,
  copyright: "© 2026 Nicole Trapp | Built with Next.js & Turborepo",
} as const;
