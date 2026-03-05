// Add this at the top of the file if not already there
import { Category } from '../types';

async function getWordPressData(query: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    // @ts-ignore - next is a Next.js specific extension to fetch
    next: { revalidate: 3600 }
  });
  const json = await res.json();
  return json.data;
}

export async function getMainBlogContent(): Promise<Category[]> {
  const query = `
    query GetMainBlog {
      categories(where: { hideEmpty: true, exclude: [] }) {
        nodes {
          name
          slug
          posts(first: 20) {
            nodes { id title slug date }
          }
        }
      }
    }
  `;
  const data = await getWordPressData(query);
  return data?.categories?.nodes || [];
}
