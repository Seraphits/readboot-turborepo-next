/** Shared content shapes for homepage-style templates — organisms import this instead of template default modules. */

import type { StaticImageData } from "next/image";

export type PillarItem = {
  title: string;
  tagline: string;
  summary: string;
  actionLabel: string;
  href: string;
  /** Bundled asset or absolute path; omit for shared pillar placeholder art. */
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
};
