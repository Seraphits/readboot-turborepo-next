import type { StaticImageData } from "next/image";
import blogFeatured from "./blog-featured-placeholder.svg";
import pillar from "./pillar-placeholder.svg";
import portrait from "./portrait-placeholder.svg";

/**
 * Default “fake photos” for development and Storybook when there is no real WordPress/CMS image yet.
 * They keep card/hero layouts from looking empty. One copy of each file lives here; apps import them
 * (no duplicates under each app `public` folder).
 *
 * Next.js usually turns imports into `StaticImageData`; Storybook’s Vite often uses a plain URL string
 * for the same file — use `placeholderSrc()` whenever you need a string (e.g. `sourceUrl` on mocks).
 */
export const portraitPlaceholder: StaticImageData = portrait;
export const pillarPlaceholder: StaticImageData = pillar;
export const blogFeaturedPlaceholder: StaticImageData = blogFeatured;

/**
 * Use when a **string** URL is required (e.g. WordPress `Post.featuredImage.node.sourceUrl`).
 * Next emits `StaticImageData`; Vite often emits a plain URL `string` for the same SVG import, so
 * `asset.src` is wrong in Storybook — use this instead of `placeholder.src` alone.
 */
export function placeholderSrc(asset: unknown): string {
  if (typeof asset === "string") return asset;
  if (asset && typeof asset === "object" && "src" in asset) {
    return String((asset as { src: string }).src);
  }
  return "";
}
