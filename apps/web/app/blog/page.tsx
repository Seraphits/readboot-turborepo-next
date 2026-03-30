import type { Metadata } from 'next';
import { BlogCategoryNav } from '@repo/ui/molecules';
import { ReadBootBand, Showcase } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { getMainBlogContent, getPosts, type Category } from '@repo/wp-utils';
import { blogPageCopy } from '../../content/blogPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${blogPageCopy.indexTitle} | ReadBoot`,
  description: blogPageCopy.indexDescription,
};

export default async function BlogPage() {
  const [categories, posts] = await Promise.all([
    getMainBlogContent(),
    getPosts({ limit: 24, orderBy: 'DATE', order: 'DESC' }),
  ]);
  const categoryNavItems = categories.map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <ShowcaseTemplate
      headerSlot={
        <ReadBootBand
          surface="boxed"
          title={blogPageCopy.indexTitle}
          subhead={blogPageCopy.bandSubhead}
          layout="centered"
        />
      }
      mainSlot={
        <>
          <BlogCategoryNav
            categories={categoryNavItems}
            allLabel={blogPageCopy.allCategoriesLabel}
            ariaLabel={blogPageCopy.categoryNavAriaLabel}
          />
          <Showcase
            type="blog"
            items={posts}
            title={blogPageCopy.latestSectionTitle}
          />
        </>
      }
    />
  );
}
