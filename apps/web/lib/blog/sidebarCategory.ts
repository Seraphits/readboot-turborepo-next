import type { Post } from '@repo/wp-utils';

/** WordPress default category slug — excluded from sidebar / `?from=` resolution. */
export const UNCATEGORIZED_SLUG = 'uncategorized';

export interface ResolvedSidebarCategory {
  slug: string | null;
  displayName: string | null;
}

/**
 * Resolves which category drives the sidebar: validated `?from=` → Yoast primary → first non-uncategorized.
 */
export function resolveSidebarCategory(
  fromParam: string | string[] | undefined,
  post: Post,
): ResolvedSidebarCategory {
  const from =
    typeof fromParam === 'string'
      ? fromParam
      : Array.isArray(fromParam)
        ? fromParam[0]
        : undefined;

  const edges = post.categories?.edges ?? [];
  const valid = edges.filter(
    (e) => e.node?.slug && e.node.slug.toLowerCase() !== UNCATEGORIZED_SLUG,
  );

  if (from?.trim()) {
    const normalized = from.trim().toLowerCase();
    const match = valid.find((e) => e.node.slug.toLowerCase() === normalized);
    if (match) {
      return { slug: match.node.slug, displayName: match.node.name };
    }
  }

  const primary = valid.find((e) => e.isPrimary);
  if (primary?.node.slug) {
    return { slug: primary.node.slug, displayName: primary.node.name };
  }

  const first = valid[0];
  if (first?.node.slug) {
    return { slug: first.node.slug, displayName: first.node.name };
  }

  return { slug: null, displayName: null };
}
