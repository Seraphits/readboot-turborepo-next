import type { Metadata } from 'next';
import { BlogArticleLayout } from '@repo/ui/molecules';
import { ReadBootBand } from '@repo/ui/organisms';
import { ShowcaseTemplate } from '@repo/ui/templates';
import { getPostBySlug, type Post, WPContent } from '@repo/wp-utils';
import { notFound } from 'next/navigation';
import { blogPageCopy } from '../../../../content/blogPage';

export const dynamic = 'force-dynamic';

interface PostPageProps {
  params: Promise<{ slug: string }>;
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
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const subhead = formatPostDate(post.date);

  return (
    <ShowcaseTemplate
      headerSlot={
        <ReadBootBand surface="boxed" title={post.title} subhead={subhead} layout="centered" />
      }
      mainSlot={
        <BlogArticleLayout>
          <WPContent data={{ title: post.title, content: post.content }} renderTitle={false} />
        </BlogArticleLayout>
      }
    />
  );
}
