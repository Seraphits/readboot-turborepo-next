import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../Branding/Typography/Typography";
import layoutDebug from "../layout-debug.module.scss";
import { SectionLayout, type SectionLayoutVariant } from "./SectionLayout";

/** CSS module keys are `string | undefined` in TS; these classes are always defined in `layout-debug.module.scss`. */
const slotClass = (key: keyof typeof layoutDebug) => layoutDebug[key] as string;

const meta: Meta<typeof SectionLayout> = {
  component: SectionLayout,
  parameters: {
    docs: {
      description: {
        component:
          "Grid-based section presets (`centered`, `grid`, `split`, `newspaper`, …) with optional `bordered` (Futurist Carton frame). **Storybook:** colored slots come from `layout-debug.module.scss` (Storybook-only) so empty regions are visible.",
      },
    },
  },
};
export default meta;

const filler = (label: string) => (
  <Typography as="p" variant="body">
    {label}
  </Typography>
);

/** Visible slot for layout stories — uses `layout-debug.module.scss` (not for production). */
const DebugSlot = ({
  slotClass,
  label,
}: {
  slotClass: string;
  label: string;
}) => (
  <div className={slotClass} aria-label={label}>
    <Typography as="p" variant="caption">
      {label}
    </Typography>
  </div>
);

function variantChildren(variant: SectionLayoutVariant): ReactNode {
  switch (variant) {
    case "centered":
      return <DebugSlot slotClass={slotClass("slot1")} label="centered" />;
    case "split":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot1Tall")} label="content" />
          <DebugSlot slotClass={slotClass("slot2Tall")} label="media" />
        </>
      );
    case "grid":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot1")} label="cell 1" />
          <DebugSlot slotClass={slotClass("slot2")} label="cell 2" />
          <DebugSlot slotClass={slotClass("slot3")} label="cell 3" />
        </>
      );
    case "newspaper":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot4")} label="column A" />
          <DebugSlot slotClass={slotClass("slot5")} label="column B" />
        </>
      );
    case "stack":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot1")} label="stack 1" />
          <DebugSlot slotClass={slotClass("slot2")} label="stack 2" />
        </>
      );
    case "preview":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot3")} label="preview A" />
          <DebugSlot slotClass={slotClass("slot6")} label="preview B" />
        </>
      );
    case "asymmetrical":
      return (
        <>
          <DebugSlot slotClass={slotClass("slot1Tall")} label="primary" />
          <DebugSlot slotClass={slotClass("slot2Tall")} label="secondary" />
        </>
      );
  }
}

const VARIANTS: SectionLayoutVariant[] = [
  "centered",
  "split",
  "grid",
  "newspaper",
  "stack",
  "preview",
  "asymmetrical",
];

export const VariantShowcase: StoryObj<typeof SectionLayout> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {VARIANTS.map((variant) => (
        <SectionLayout key={variant} variant={variant} bordered>
          {variantChildren(variant)}
        </SectionLayout>
      ))}
    </div>
  ),
};

export const CenteredBordered: StoryObj<typeof SectionLayout> = {
  render: () => (
    <SectionLayout variant="centered" bordered>
      <Typography as="h2" variant="h2">
        Centered + bordered
      </Typography>
      {filler("Typical hero or intro block.")}
    </SectionLayout>
  ),
};
