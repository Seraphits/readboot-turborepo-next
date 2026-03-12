import { Post } from '../../types';
import { getWordPressData } from './client';

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        slug
        date
        content
        excerpt
      }
    }
  `;

  const data = await getWordPressData(query, { id: slug });
  return data?.post || null;
}
