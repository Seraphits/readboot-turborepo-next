/**
 * Hosts for which we skip the Next.js image optimizer and load the URL in the browser.
 *
 * - **placehold.co**: With Vercel microfrontends, `/docs` may be served by the docs app while
 *   `/_next/image` hits the shell; remotePatterns / optimizer routing can fail for external URLs.
 * - **readboot.cloudaccess.host** (WordPress media): Same class of issue can break the header logo
 *   on `readboot.com/docs` while the main app works; direct fetch avoids the broken optimizer hop.
 */
const HOSTS_SKIP_IMAGE_OPTIMIZATION = new Set([
  "placehold.co",
  "readboot.cloudaccess.host",
]);

export function shouldSkipNextImageOptimization(src: string): boolean {
  if (!src) return false;
  /** Next/Image does not optimize SVG the same way; bundled placeholders are often `.svg`. */
  if (src.includes(".svg")) return true;
  try {
    const { hostname } = new URL(src);
    if (HOSTS_SKIP_IMAGE_OPTIMIZATION.has(hostname)) return true;
    if (hostname.endsWith(".placehold.co")) return true;
    return false;
  } catch {
    return false;
  }
}
