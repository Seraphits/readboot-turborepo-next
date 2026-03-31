import type { Meta, StoryObj } from "@storybook/react";
import { BRAND_COLORS, SYSTEM_COLORS } from "./colors-data";
import { ColorSwatch } from "./ColorSwatch";

const meta: Meta = {
  parameters: {
    docs: {
      description: {
        component: [
          "**Tier 1 — reference (`$ref-*`)** — brand primitives (fixed “stars”).",
          "**Tier 2 — system (`$sys-*`)** — role tokens used in components and SCSS modules.",
          "**Rule:** ship UI against **system** tokens; reference tokens exist to define system tokens, not for ad-hoc use in feature code.",
          "Source of truth: `_colors-variables.scss`.",
        ].join(" "),
      },
    },
  },
};
export default meta;

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1.5rem",
} as const;

export const ReferenceTokens: StoryObj = {
  name: "Reference tokens (Tier 1)",
  render: () => (
    <div style={grid}>
      {BRAND_COLORS.map((color) => (
        <ColorSwatch
          key={color.variable}
          name={color.name}
          variable={color.variable}
          hex={color.hex}
        />
      ))}
    </div>
  ),
};

export const SystemTokens: StoryObj = {
  name: "System tokens (Tier 2)",
  render: () => (
    <div style={grid}>
      {SYSTEM_COLORS.map((color) => (
        <ColorSwatch
          key={color.variable}
          name={color.name}
          variable={color.variable}
          hex={color.hex}
        />
      ))}
    </div>
  ),
};
