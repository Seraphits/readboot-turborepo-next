import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCategoryNav } from '@repo/ui/molecules';
import { ReadBootBand, Showcase } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { Button, SectionLayout } from '@repo/ui/atoms';
import { getMainBlogContent, getPosts, type Category } from '@repo/wp-utils';
import { notFound } from 'next/navigation';
import { blogPageCopy } from '../../../../content/blogPage';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allCategories: Category[] = await getMainBlogContent();
  const category = allCategories.find((c) => c.slug === slug);
  if (!category) {
    return { title: 'Category | ReadBoot' };
  }
  return {
    title: `${category.name} | ${blogPageCopy.indexTitle} | ReadBoot`,
    description: blogPageCopy.indexDescription,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const allCategories: Category[] = await getMainBlogContent();
  const category = allCategories.find((c) => c.slug === slug);

  if (!category) {
    return notFound();
  }

  const categoryNavItems = allCategories.map((c) => ({ slug: c.slug, name: c.name }));
  const bandTitle = `${blogPageCopy.categoryBandTitle}: ${category.name}`;
  const posts = await getPosts({
    categorySlug: slug,
    limit: 24,
    orderBy: 'DATE',
    order: 'DESC',
  });

  return (
    <ShowcaseTemplate
      headerSlot={
        <ReadBootBand surface="boxed" title={bandTitle} subhead={blogPageCopy.bandSubhead} layout="centered" />
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
            blogFromCategorySlug={slug}
          />
          <SectionLayout variant="centered">
            <Button variant="outline-on-light" asChild>
              <Link href="/blog/">{blogPageCopy.backToBlogLabel}</Link>
            </Button>
          </SectionLayout>
        </>
      }
    />
  );
}
