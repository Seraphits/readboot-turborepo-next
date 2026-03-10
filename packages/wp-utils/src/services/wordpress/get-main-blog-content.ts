import { Category } from '../../types';
import { getWordPressData } from './client';

export async function getMainBlogContent(): Promise<Category[]> {
  const query = `
    query GetMainBlog {
      categories(where: { hideEmpty: true, exclude: [] }) {
        nodes {
          name
          slug
          posts(first: 20) {
            nodes {
              id
              title
              slug
              date
            }
          }
        }
      }
    }
  `;

  const data = await getWordPressData(query);
  return data?.categories?.nodes || [];
}
