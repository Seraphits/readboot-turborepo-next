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
  /**
   * Allow running in the browser. Default: false.
   *
   * WPGraphQL calls should generally be server-only to avoid leaking your API
   * origin and to prevent client-side request storms when the origin degrades.
   */
  allowClient?: boolean;
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

function sanitizeHeaders(headers: Record<string, string | undefined | null>) {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(headers)) {
    if (v === undefined || v === null) continue;
    const key = k.trim();
    if (!key) continue;
    out[key] = String(v);
  }
  return out;
}

/**
 * The base fetcher for the WordPress GraphQL API.
 * Uses AbortSignal.timeout for request cancellation and Next.js Data Cache for revalidation.
 */
export async function getWordPressData(
  query: string | DocumentNode,
  variables: Record<string, unknown> = {},
  options: WordPressFetchOptions = {}
) {
  if (typeof window !== 'undefined' && !options.allowClient) {
    throw new Error(
      'getWordPressData() was called in the browser. This fetcher is intended for Server Components and Route Handlers only. ' +
        'If you truly need a client-side call, pass { allowClient: true } and ensure you have throttling/error handling.'
    );
  }

  const queryString = typeof query === 'string' ? query : print(query);
  const { timeout = DEFAULT_TIMEOUT_MS, revalidate = DEFAULT_REVALIDATE, tags } = options;

  const init: FetchInit = {
    method: 'POST',
    headers: sanitizeHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ query: queryString, variables }),
    signal: AbortSignal.timeout(timeout),
  };

  // `next` is only meaningful on the server, but harmless elsewhere.
  if (revalidate !== undefined) {
    init.next = { revalidate };
    if (tags?.length) {
      init.next.tags = tags;
    }
  }

  const res = await fetch(getEndpoint(), init);

  if (!res.ok) {
    // Avoid trying to parse a non-JSON error response as GraphQL.
    const contentType = res.headers.get('content-type') ?? '';
    const bodyText =
      contentType.includes('application/json') ? await res.text() : (await res.text()).slice(0, 2000);
    throw new Error(
      `WordPress GraphQL HTTP error: ${res.status} ${res.statusText}. Body (truncated): ${bodyText}`
    );
  }

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
