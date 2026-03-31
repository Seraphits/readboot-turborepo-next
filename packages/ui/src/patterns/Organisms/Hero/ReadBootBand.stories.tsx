import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../Atoms/Branding/Typography/Typography";
import {
  DEFAULT_PORTRAIT_PLACEHOLDER,
  defaultHomeHero,
} from "../../Templates/HomePage/homePageDefaults";
import {
  ReadBootBand,
  type BoxedFeatureHeroLayoutVariant,
} from "./ReadBootBand";

const meta: Meta<typeof ReadBootBand> = {
  component: ReadBootBand,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          '**`ReadBootBand`** — single hero primitive: **`surface="boxed"`** (`SectionLayout` + ruled inset) or **`surface="open"`** (portrait + kicker + lead + dual CTAs, no outer band rule). Presets: `BoxedFeatureHero`, `FullBleedHero`.',
      },
    },
  },
};
export default meta;

const shell = (node: ReactNode) => (
  <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem" }}>
    {node}
  </div>
);

const mediaPlaceholder = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      minHeight: "200px",
    }}
  >
    <Typography as="span" variant="caption">
      imageNode placeholder
    </Typography>
  </div>
);

export const BoxedCentered: StoryObj<typeof ReadBootBand> = {
  name: "Boxed · centered",
  render: () =>
    shell(
      <ReadBootBand
        surface="boxed"
        title="Engineering the Operating Systems of Human Growth"
        subhead="Centered layout: no media column."
        ctaText="View portfolio"
        layout="centered"
      />,
    ),
};

const withMedia = (layout: BoxedFeatureHeroLayoutVariant) =>
  shell(
    <ReadBootBand
      surface="boxed"
      title="Split headline for layout preview"
      subhead="Media slot uses the Futurist Carton frame from `BoxedFeatureHero.module.scss`."
      ctaText="Get started"
      layout={layout}
      imageNode={mediaPlaceholder}
    />,
  );

export const BoxedSplit: StoryObj<typeof ReadBootBand> = {
  name: "Boxed · split",
  render: () => withMedia("split"),
};

export const BoxedAsymmetrical: StoryObj<typeof ReadBootBand> = {
  name: "Boxed · asymmetrical",
  render: () => withMedia("asymmetrical"),
};

export const BoxedPreview: StoryObj<typeof ReadBootBand> = {
  name: "Boxed · preview",
  render: () => withMedia("preview"),
};

export const OpenHomeDefaults: StoryObj<typeof ReadBootBand> = {
  name: "Open · home defaults",
  render: () => (
    <ReadBootBand
      surface="open"
      portraitSrc={DEFAULT_PORTRAIT_PLACEHOLDER}
      portraitAlt="Portrait placeholder"
      eyebrow={defaultHomeHero.eyebrow}
      headline={defaultHomeHero.headline}
      subheadline={defaultHomeHero.subheadline}
      intro={defaultHomeHero.intro}
      primaryCta={defaultHomeHero.primaryCta}
      secondaryCta={defaultHomeHero.secondaryCta}
    />
  ),
};
