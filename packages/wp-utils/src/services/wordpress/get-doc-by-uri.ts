import { getWordPressData } from './client';
import { GET_DOC_QUERY } from '../../queries/doc';
import type { DocData } from '../../types';

/**
 * Fetches a documentation page by URI from WordPress.
 * Uses the centralized client (timeout, env, revalidation).
 */
export async function getDocByUri(uri: string): Promise<DocData | null> {
  try {
    const data = (await getWordPressData(GET_DOC_QUERY, { id: uri }, {
      revalidate: 60,
    })) as { doc?: DocData } | undefined;

    return data?.doc ?? null;
  } catch {
    return null;
  }
}
