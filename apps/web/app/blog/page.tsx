import type { Metadata } from 'next';
import { BlogCategoryNav } from '@repo/ui/molecules';
import { BlogShowcase, ReadBootBand } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { getMainBlogContent, type Category } from '@repo/wp-utils';
import { blogPageCopy } from '../../content/blogPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${blogPageCopy.indexTitle} | ReadBoot`,
  description: blogPageCopy.indexDescription,
};

export default async function BlogPage() {
  const categories: Category[] = await getMainBlogContent();
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
          <BlogShowcase
            limit={24}
            orderBy="DATE"
            order="DESC"
            sectionTitle={blogPageCopy.latestSectionTitle}
          />
        </>
      }
    />
  );
}
