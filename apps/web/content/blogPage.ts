/**
 * Web app copy for blog routes — keep UI strings out of JSX literals.
 * Post titles and excerpts come from WordPress; this file is labels and meta only.
 */
export const blogPageCopy = {
  indexTitle: 'Blog',
  indexDescription:
    'Articles on design systems, learning technology, and building ReadBoot in public.',
  bandSubhead: 'Essays and build notes — shipped from WordPress, styled in Futurist Carton.',
  categoryNavAriaLabel: 'Filter posts by category',
  allCategoriesLabel: 'All',
  latestSectionTitle: 'Latest posts',
  categoryBandTitle: 'Category',
  emptyCategory: 'No posts found in this category.',
  backToBlogLabel: 'Back to Blog',
  emptyBlog: 'No blog posts found.',
} as const;
