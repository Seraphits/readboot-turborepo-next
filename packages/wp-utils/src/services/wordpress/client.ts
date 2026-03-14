import type { DocumentNode } from 'graphql';
import { print } from 'graphql';

const DEFAULT_TIMEOUT_MS = 25000;
const DEFAULT_REVALIDATE = 3600;

export interface WordPressFetchOptions {
  /** Timeout in milliseconds. Default: 8000 */
  timeout?: number;
  /** Next.js ISR revalidation period in seconds. Default: 3600 (1 hour) */
  revalidate?: number | false;
  /** Next.js cache tags for on-demand revalidation */
  tags?: string[];
}

function getEndpoint(): string {
  const url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!url) {
    throw new Error(
      'NEXT_PUBLIC_WORDPRESS_API_URL is required. Set it in .env.local or your deployment environment.'
    );
  }
  return url;
}

type FetchInit = RequestInit & {
  next?: { revalidate?: number | false; tags?: string[] };
};

/**
 * The base fetcher for the WordPress GraphQL API.
 * Uses AbortSignal.timeout for request cancellation and Next.js Data Cache for revalidation.
 */
export async function getWordPressData(
  query: string | DocumentNode,
  variables: Record<string, unknown> = {},
  options: WordPressFetchOptions = {}
) {
  const queryString = typeof query === 'string' ? query : print(query);
  const { timeout = DEFAULT_TIMEOUT_MS, revalidate = DEFAULT_REVALIDATE, tags } = options;

  const init: FetchInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryString, variables }),
    signal: AbortSignal.timeout(timeout),
  };

  if (revalidate !== undefined) {
    init.next = { revalidate };
    if (tags?.length) {
      init.next.tags = tags;
    }
  }

  const res = await fetch(getEndpoint(), init);
  const json = await res.json();

  if (json.errors) {
    const messages = json.errors
      .map((e: { message?: string }) => e?.message ?? JSON.stringify(e))
      .join('; ');
    console.error('GraphQL Errors:', json.errors);
    throw new Error(`WordPress GraphQL error: ${messages}`);
  }

  return json.data;
}
