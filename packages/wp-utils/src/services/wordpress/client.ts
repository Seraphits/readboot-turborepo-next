import type { DocumentNode } from 'graphql';
import { print } from 'graphql';

type FetchInit = RequestInit & { next?: { revalidate: number } };

/**
 * The base fetcher for the WordPress GraphQL API.
 * Handles the connection to the URL defined in your .env.local
 */
export async function getWordPressData(query: string | DocumentNode, variables = {}) {
  const queryString = typeof query === 'string' ? query : print(query);

  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: queryString,
      variables
    }),
    next: { revalidate: 3600 } // Cache data for 1 hour
  });

  const json = await res.json();

  if (json.errors) {
    const messages = json.errors.map((e: { message?: string }) => e?.message ?? JSON.stringify(e)).join('; ');
    console.error('GraphQL Errors:', json.errors);
    throw new Error(`WordPress GraphQL error: ${messages}`);
  }

  return json.data;
}
