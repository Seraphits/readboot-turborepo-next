import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../Atoms/Branding/Typography/Typography";
import { DEFAULT_PORTRAIT_PLACEHOLDER } from "../../Templates/HomePage/homePageDefaults";
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
        title="Boxed hero — sample headline"
        subhead="Centered layout: no media column."
        ctaText="Primary action"
        layout="centered"
      />,
    ),
};

const withMedia = (layout: BoxedFeatureHeroLayoutVariant) =>
  shell(
    <ReadBootBand
      surface="boxed"
      title="Split headline for layout preview"
      subhead="Media column beside the headline for split layouts."
      ctaText="Primary action"
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

export const OpenBandNeutral: StoryObj<typeof ReadBootBand> = {
  name: "Open · neutral sample",
  render: () => (
    <ReadBootBand
      surface="open"
      portraitSrc={DEFAULT_PORTRAIT_PLACEHOLDER}
      portraitAlt="Portrait placeholder"
      eyebrow="Eyebrow / kicker"
      headline="Open band headline"
      subheadline="Subheadline line for hierarchy preview."
      intro="Lead paragraph with neutral Storybook copy. Production homepage strings stay in `homePageDefaults.ts` and are passed from apps."
      primaryCta={{ label: "Primary", href: "/example/" }}
      secondaryCta={{ label: "Secondary", href: "/other/" }}
    />
  ),
};
