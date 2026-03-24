declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

/** SVGs used with `next/image` — bundled from `@repo/ui` (no copies under app `public/`). */
declare module "*.svg" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

/** Vite raw import — Storybook docs (`TokensAndTypography.md`). */
declare module "*.md?raw" {
  const content: string;
  export default content;
}
