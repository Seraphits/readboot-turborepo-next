import type { Metadata } from 'next';
import { getBlogNavCategories, getPosts } from '@repo/wp-utils';
import { blogPageCopy } from '../../content/blogPage';
import { BlogListingPage } from './BlogListingPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${blogPageCopy.indexTitle} | ReadBoot`,
  description: blogPageCopy.indexDescription,
};

export default async function BlogPage() {
  const [categoryNavItems, posts] = await Promise.all([
    getBlogNavCategories(),
    getPosts({ limit: 24, orderBy: 'DATE', order: 'DESC' }),
  ]);

  return (
    <BlogListingPage
      bandTitle={blogPageCopy.indexTitle}
      categoryNavItems={categoryNavItems}
      posts={posts}
    />
  );
}
