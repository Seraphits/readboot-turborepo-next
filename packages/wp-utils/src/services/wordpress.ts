// packages/wp-utils/src/services/wordpress.ts
import { Category, Post } from '../types';

async function getWordPressData(query: string, variables: any = {}) {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 3600 }
    });
    const json = await res.json();
    return json.data;
}

// RESTORE THIS: Needed for your Blog Index and Category Pages
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

// ADD THIS: Needed for your Individual Post Page
export async function getPostBySlug(slug: string): Promise<Post | null> {
    const query = `
      query GetPostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          id
          title
          slug
          date
          content
        }
      }
    `;
    const data = await getWordPressData(query, { id: slug });
    return data?.post || null;
}
