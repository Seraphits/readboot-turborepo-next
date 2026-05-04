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
  border: "#36454F",
  action: "#DC143C",
  success: "#56F000",
  warning: "#FAD20A",
  error: "#DC143C",
  info: "#29ECFF",
  purple: "#905FEA",
} as const;

// Resolve semantic token names to hex (light theme)
const resolve = (token: string): string => {
  if (token === "$ref-color-charcoal") return "#36454F";
  return LIGHT[token as keyof typeof LIGHT] ?? token;
};

// 1. Raw Brand Tokens (Tier 1 Primitives) for ColorSwatch grid
export const BRAND_COLORS: ColorData[] = [
  { name: "Charcoal", variable: "$ref-color-charcoal", hex: "#36454F" },
  { name: "Off-white", variable: "$ref-color-offwhite", hex: "#FAF9F6" },
  { name: "Crimson", variable: "$ref-color-crimson", hex: "#DC143C" },
  { name: "Yellow", variable: "$ref-color-yellow", hex: "#FAD20A" },
  { name: "Green", variable: "$ref-color-green", hex: "#56F000" },
  { name: "Teal", variable: "$ref-color-teal", hex: "#29ECFF" },
  { name: "Purple", variable: "$ref-color-purple", hex: "#905FEA" },
];

/** Tier 2 system role tokens — hex values mirror `_colors-variables.scss` (Dart Sass `color.adjust` for action-on-dark). */
export const SYSTEM_COLORS: ColorData[] = [
  {
    name: "Paper light bg",
    variable: "$sys-color-paper-light-bg",
    hex: "#FAF9F6",
  },
  {
    name: "Ink light text",
    variable: "$sys-color-ink-light-text",
    hex: "#FAF9F6",
  },
  {
    name: "Paper dark bg",
    variable: "$sys-color-paper-dark-bg",
    hex: "#36454F",
  },
  {
    name: "Ink dark text",
    variable: "$sys-color-ink-dark-text",
    hex: "#36454F",
  },
  { name: "Light border", variable: "$sys-color-light-border", hex: "#FAF9F6" },
  { name: "Dark border", variable: "$sys-color-dark-border", hex: "#36454F" },
  {
    name: "Action primary",
    variable: "$sys-color-action-primary",
    hex: "#DC143C",
  },
  {
    name: "Status warning",
    variable: "$sys-color-status-warning",
    hex: "#FAD20A",
  },
  {
    name: "Status success",
    variable: "$sys-color-status-success",
    hex: "#56F000",
  },
  { name: "Status error", variable: "$sys-color-status-error", hex: "#DC143C" },
  { name: "Status info", variable: "$sys-color-status-info", hex: "#29ECFF" },
  {
    name: "Action border",
    variable: "$sys-color-action-border",
    hex: "#DC143C",
  },
  { name: "Error border", variable: "$sys-color-error-border", hex: "#DC143C" },
  {
    name: "Warning border",
    variable: "$sys-color-warning-border",
    hex: "#FAD20A",
  },
  {
    name: "Success border",
    variable: "$sys-color-success-border",
    hex: "#56F000",
  },
  { name: "Info border", variable: "$sys-color-info-border", hex: "#29ECFF" },
  /** `color.adjust($ref-color-crimson, $lightness: 15%)` → `rgb(238.875, 77.625, 109.875)`. */
  {
    name: "Action on dark",
    variable: "$sys-color-action-on-dark",
    hex: "#EF4E6E",
  },
];

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
