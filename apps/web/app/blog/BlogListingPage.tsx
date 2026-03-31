import Link from 'next/link';
import { BlogCategoryNav } from '@repo/ui/molecules';
import { ReadBootBand, Showcase } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { Button, SectionLayout } from '@repo/ui/atoms';
import type { Post } from '@repo/wp-utils';
import { blogPageCopy } from '../../content/blogPage';

export type BlogCategoryNavItem = { slug: string; name: string };

export interface BlogListingPageProps {
  bandTitle: string;
  categoryNavItems: BlogCategoryNavItem[];
  posts: Post[];
  /** Passed to Showcase for `?from=` on post links (category archives). */
  blogFromCategorySlug?: string;
  /** Category archive: show “Back to Blog” below the grid. */
  showBackToBlog?: boolean;
}

/** Shared shell for `/blog/` and `/blog/category/[slug]/`. Data fetching stays in each route. */
export function BlogListingPage({
  bandTitle,
  categoryNavItems,
  posts,
  blogFromCategorySlug,
  showBackToBlog = false,
}: BlogListingPageProps) {
  return (
    <ShowcaseTemplate
      headerSlot={
        <ReadBootBand
          surface="boxed"
          title={bandTitle}
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
            blogFromCategorySlug={blogFromCategorySlug}
          />
          {showBackToBlog ? (
            <SectionLayout variant="centered">
              <Button variant="outline-on-light" asChild>
                <Link href="/blog/">{blogPageCopy.backToBlogLabel}</Link>
              </Button>
            </SectionLayout>
          ) : null}
        </>
      }
    />
  );
}
