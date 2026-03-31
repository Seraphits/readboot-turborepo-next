import { cache } from 'react';
import { getWordPressData } from './client';

/**
 * WordPress category whose **direct children** appear in `/blog/` category chips.
 * Override with `WORDPRESS_BLOG_CATEGORY_PARENT_SLUG` (e.g. staging taxonomy).
 */
const DEFAULT_BLOG_CATEGORY_PARENT_SLUG = 'nicole-trapps-portfolio';

function getBlogCategoryParentSlug(): string {
  return process.env.WORDPRESS_BLOG_CATEGORY_PARENT_SLUG ?? DEFAULT_BLOG_CATEGORY_PARENT_SLUG;
}

export type BlogNavCategory = { slug: string; name: string };

async function fetchBlogNavCategories(): Promise<BlogNavCategory[]> {
  const parentSlug = getBlogCategoryParentSlug();
  const query = `
    query GetBlogNavCategories($parentSlug: ID!) {
      category(id: $parentSlug, idType: SLUG) {
        children(first: 100) {
          nodes {
            name
            slug
            count
          }
        }
      }
    }
  `;

  const data = await getWordPressData(query, { parentSlug });
  const nodes = data?.category?.children?.nodes ?? [];
  const items: BlogNavCategory[] = nodes
    .filter((n: { count?: number | null }) => n.count == null || n.count > 0)
    .map((n: { name: string; slug: string }) => ({ name: n.name, slug: n.slug }));
  items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  return items;
}

/**
 * Categories for **`BlogCategoryNav`**: direct children of the configured parent, non-empty, sorted by name.
 * Deduplicated per request (same list for index + category pages).
 */
export const getBlogNavCategories = cache(fetchBlogNavCategories);

async function fetchBlogCategoryForArchive(slug: string): Promise<BlogNavCategory | null> {
  const parentSlug = getBlogCategoryParentSlug();
  const query = `
    query GetBlogCategoryForArchive($slug: ID!) {
      category(id: $slug, idType: SLUG) {
        name
        slug
        parent {
          node {
            slug
          }
        }
      }
    }
  `;

  const data = await getWordPressData(query, { slug });
  const cat = data?.category;
  if (!cat?.slug) {
    return null;
  }
  const parentNodeSlug = cat.parent?.node?.slug;
  if (parentNodeSlug !== parentSlug) {
    return null;
  }
  return { name: cat.name, slug: cat.slug };
}

/**
 * Resolves a category for **`/blog/category/[slug]/`** when it is a **direct child** of the blog parent.
 * Returns `null` if the slug is missing or not under that parent (404).
 * Deduplicated per request (same slug as `generateMetadata` + page).
 */
export const getBlogCategoryForArchive = cache(fetchBlogCategoryForArchive);
