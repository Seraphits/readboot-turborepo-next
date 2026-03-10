import { print } from 'graphql';
import { DocumentNode } from 'graphql';

type FetchInit = RequestInit & { next?: { revalidate: number } };

/**
 * The base fetcher for the WordPress GraphQL API.
 * Handles the connection to the URL defined in your .env.local
 */
export async function getWordPressData(query: string | DocumentNode, variables: any = {}) {
  // If the query is a GQL object from Apollo, convert it to a string for the fetch body
  const queryStr = typeof query === 'string' ? query : print(query);

  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryStr, variables }),
    next: { revalidate: 3600 } // Cache data for 1 hour
  } as FetchInit);

  const json = await res.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
