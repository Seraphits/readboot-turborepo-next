/** Default homepage copy & URLs — override via `HomePage` props from the app when ready. */

import type { PillarItem } from "../../homeContentTypes";
import aiPromptingFoundationsFeatured from "../../../assets/home/ai-prompting-foundations-featured.png";
import designEngineeringLabFeatured from "../../../assets/home/design-engineering-lab-featured.png";
import portfolioHeroPortrait from "../../../assets/home/portfolio-hero-portrait.png";
import rbeosFrameworkFeatured from "../../../assets/home/rbeos-framework-featured.png";
import { portraitPlaceholder } from "../../../assets/storybook/placeholders";

export type { PillarItem } from "../../homeContentTypes";

/** Bundled comic-style portrait for the portfolio web homepage hero (pass as `portraitSrc`). */
export { portfolioHeroPortrait };

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
  eyebrow: "Nicole Trapp",
  headline: "AI-Native Product Architect // Learning Engineer",
  subheadline: "Engineering the Operating Systems of Human Growth.",
  intro:
    'I architect high-integrity learning ecosystems where Architecture-Over-Code principles drive performance. By leveraging Agentic Engineering Workflows (Cursor/Gemini), I build scalable Next.js monorepos at 3x traditional velocity—ensuring every "Atom of Knowledge" is production-ready, accessible, and aligned with the learner’s finite resources.',
  primaryCta: { label: "View portfolio", href: "/projects/" },
  secondaryCta: { label: "Documentation", href: "/docs/" },
} as const satisfies HomeHeroCopy;

export const defaultMission = {
  title: "Solving the Alignment Problem",
  /** "Alignment" is styled with brand accent (no glitch effect). */
  accentWord: "Alignment" as const,
  /** Two short paragraphs read better in a multi-column layout. */
  paragraphs: [
    'Traditional systems ask: "What are we required to teach?" This top-down model focuses on institutional compliance, often resulting in fragmented codebases and "educational waste"—content that lacks immediate relevance to the learner’s life.',
    'I ask: "Why does this specific learner need this to improve their life?" My work focuses on building Antifragile Ecosystems. I replace rigid, one-size-fits-all curricula with Atomic Instructional Design—modular systems where AI dynamically assembles personalized "Molecules of Relevance" in real-time.',
  ] as const,
} as const satisfies HomeMissionCopy;

export const defaultPillars: PillarItem[] = [
  {
    title: "The RBEOS Framework",
    tagline: "Strategic Architecture for a Purpose-Driven Marketplace",
    summary:
      'A speculative blueprint for a 22nd-century educational system. Utilizes a strategic terminology refactor from "Pillars" to "Boots" to maximize brand recognition and eliminate conceptual interference, validated through an interactive Articulate Rise prototype.',
    actionLabel: "Explore the framework",
    href: "/projects/",
    imageSrc: rbeosFrameworkFeatured,
    imageAlt:
      "Retro-futurist illustration: six colorful boots on a glowing hex path above a city, with Futura-style cover type for the Six Boots learning path.",
  },
  {
    title: "AI Prompting Foundations",
    tagline: "Scaling AI Literacy for Bisk/USF",
    summary:
      'A Master’s Capstone project engineered to overcome "AI Anxiety." This curriculum implements a Minimal Viable Competency (MVC) model, reducing the threshold for professional AI adoption to 30 minutes through high-integrity instructional scaffolding.',
    actionLabel: "Read on the blog",
    href: "/blog/",
    imageSrc: aiPromptingFoundationsFeatured,
    imageAlt:
      "Retro comic-style magazine cover: human and robot handshake with a glowing logic orb, Astro-Tech Weekly—human and machine logical unification.",
  },
  {
    title: "The Design Engineering Lab",
    tagline: "Agentic Velocity via Next.js 16 & Turborepo",
    summary:
      'A live technical laboratory for Agentic Scaffolding. This project unifies shared UI packages and live documentation into a "Single Source of Truth" monorepo, achieving a 3x velocity metric while maintaining 100% TypeScript safety and WCAG 2.2 AA compliance.',
    actionLabel: "Open design docs",
    href: "/docs/",
    imageSrc: designEngineeringLabFeatured,
    imageAlt:
      "Retro Space-Age comic cover: operator at a console with three glowing velocity tracks labeled Main App, Docs, and UI Package, leading from a reactor core.",
  },
];

export const defaultVision = {
  title: "ReadBoot: Rebooting Education for the 22nd Century",
  body: "Structural change of this scale requires a century-long lens. Drawing from Strauss-Howe Generational Theory, I am mapping a 100-year roadmap to transition from top-down mandates to an individualized learning marketplace. From the initial visions of today's Artists to the systemic implementation by future Heroes, I am building the technical and theoretical infrastructure for what's next, not just what's now.",
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
