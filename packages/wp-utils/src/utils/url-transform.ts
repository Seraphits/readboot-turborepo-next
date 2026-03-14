/**
 * Transforms WordPress permalinks to application-specific paths.
 * Acts as an Adapter Pattern, decoupling internal link structure from WordPress URL format.
 */

function getWpBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ?? process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!url) {
    throw new Error(
      'NEXT_PUBLIC_WORDPRESS_SITE_URL or NEXT_PUBLIC_WORDPRESS_API_URL is required for toDocsHref.'
    );
  }
  return url.replace(/\/graphql\/?$/, '');
}

/**
 * Strips the WordPress base URL and prefixes the path with /docs.
 * Use for documentation sites where content lives under /docs.
 *
 * @param url - Raw URL from WordPress (e.g. https://readboot.cloudaccess.host/about)
 * @param wpBaseUrl - Optional override. Otherwise derived from env vars.
 */
export function toDocsHref(url: string, wpBaseUrl?: string): string {
  const base = wpBaseUrl ?? getWpBaseUrl();
  const httpBase = base.replace('https://', 'http://');

  const path = url.replace(base, '').replace(httpBase, '').trim() || '/';

  if (path.startsWith('http') || path.startsWith('/docs')) return path;
  return path.startsWith('/') ? `/docs${path}` : `/docs/${path}`;
}
