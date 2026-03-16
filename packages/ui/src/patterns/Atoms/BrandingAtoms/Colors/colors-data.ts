export interface ColorData {
  name: string;
  variable: string;
  hex: string;
}

export interface ColorPairing {
  name: string;
  bgVariable: string;
  textVariable: string;
  bgHex: string;
  textHex: string;
}

// Hex values from _colors-variables.scss Tier 1 (Reference Tokens)
const LIGHT = {
  "bg-paper": "#FAF9F6",
  "ink-text": "#36454F",
  "border": "#36454F",
  "action": "#DC143C",
  "success": "#56F000",
  "warning": "#FAD20A",
  "error": "#DC143C",
  "info": "#29ECFF",
  "purple": "#905FEA",
} as const;

// Resolve semantic token names to hex (light theme)
const resolve = (token: string): string => {
  if (token === "$ref-color-charcoal") return "#36454F";
  return LIGHT[token as keyof typeof LIGHT] ?? token;
};

// 2. All allowed background/text combinations (Semantic Pairings)
// These match your Tier 3 map in _colors-variables.scss
// Light theme hex values for Storybook runtime (inline styles)
export const ALLOWED_COMBINATIONS: ColorPairing[] = [
  {
    name: "default",
    bgVariable: "bg-paper",
    textVariable: "ink-text",
    bgHex: LIGHT["bg-paper"],
    textHex: LIGHT["ink-text"],
  },
  {
    name: "inverted",
    bgVariable: "ink-text",
    textVariable: "bg-paper",
    bgHex: LIGHT["ink-text"],
    textHex: LIGHT["bg-paper"],
  },
  {
    name: "action",
    bgVariable: "action",
    textVariable: "bg-paper",
    bgHex: LIGHT["action"],
    textHex: LIGHT["bg-paper"],
  },
  {
    name: "success",
    bgVariable: "success",
    textVariable: "bg-paper",
    bgHex: LIGHT["success"],
    textHex: LIGHT["bg-paper"],
  },
  {
    name: "warning",
    bgVariable: "warning",
    textVariable: "$ref-color-charcoal",
    bgHex: LIGHT["warning"],
    textHex: resolve("$ref-color-charcoal"),
  },
  {
    name: "error",
    bgVariable: "error",
    textVariable: "bg-paper",
    bgHex: LIGHT["error"],
    textHex: LIGHT["bg-paper"],
  },
  {
    name: "info",
    bgVariable: "info",
    textVariable: "$ref-color-charcoal",
    bgHex: LIGHT["info"],
    textHex: resolve("$ref-color-charcoal"),
  },
  {
    name: "tertiary",
    bgVariable: "purple",
    textVariable: "bg-paper",
    bgHex: LIGHT["purple"],
    textHex: LIGHT["bg-paper"],
  },
  {
    name: "text-action",
    bgVariable: "bg-paper",
    textVariable: "action",
    bgHex: LIGHT["bg-paper"],
    textHex: LIGHT["action"],
  },
  {
    name: "text-error",
    bgVariable: "bg-paper",
    textVariable: "error",
    bgHex: LIGHT["bg-paper"],
    textHex: LIGHT["error"],
  },
];
