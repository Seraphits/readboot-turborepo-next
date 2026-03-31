import type { Metadata } from 'next';
import { BlogArticleLayout } from '@repo/ui/molecules';
import { BlogSidebar, ReadBootBand } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { getPostBySlug, getPosts, type Post, WPContent } from '@repo/wp-utils';
import { notFound } from 'next/navigation';
import { blogPageCopy, blogSidebarTitle } from '../../../../content/blogPage';
import { resolveSidebarCategory } from '../../../../lib/blog/sidebarCategory';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

const SIDEBAR_POST_LIMIT = 8;

interface PostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function formatPostDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await getPostBySlug(slug);
  if (!post) {
    return { title: `${blogPageCopy.indexTitle} | ReadBoot` };
  }
  return {
    title: `${post.title} | ${blogPageCopy.indexTitle} | ReadBoot`,
    description: blogPageCopy.indexDescription,
    alternates: {
      canonical: `/blog/post/${slug}/`,
    },
  };
}

export default async function PostPage({ params, searchParams }: PostPageProps) {
  const { slug } = await params;
  const sp = await searchParams;
  const fromParam = sp.from;

  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const subhead = formatPostDate(post.date);
  const { slug: categorySlug, displayName } = resolveSidebarCategory(fromParam, post);

  let sidebarItems: { href: string; title: string }[] = [];
  let sidebarTitle: string | null = null;

  if (categorySlug && displayName) {
    const related = await getPosts({
      categorySlug,
      limit: SIDEBAR_POST_LIMIT,
      orderBy: 'DATE',
      order: 'DESC',
      excludePostId: post.id,
    });
    if (related.length > 0) {
      sidebarTitle = blogSidebarTitle(displayName);
      sidebarItems = related.map((p) => ({
        href: `/blog/post/${p.slug}/`,
        title: p.title,
      }));
    }
  }

  const showSidebar = Boolean(sidebarItems.length > 0 && sidebarTitle);

  return (
    <ShowcaseTemplate
      headerSlot={
        <ReadBootBand surface="boxed" title={post.title} subhead={subhead} layout="centered" />
      }
      mainSlot={
        showSidebar ? (
          <div className={styles.shell}>
            <BlogSidebar title={sidebarTitle!} items={sidebarItems} />
            <div className={styles.main}>
              <BlogArticleLayout>
                <WPContent data={{ title: post.title, content: post.content }} renderTitle={false} />
              </BlogArticleLayout>
            </div>
          </div>
        ) : (
          <BlogArticleLayout>
            <WPContent data={{ title: post.title, content: post.content }} renderTitle={false} />
          </BlogArticleLayout>
        )
      }
    />
  );
}
