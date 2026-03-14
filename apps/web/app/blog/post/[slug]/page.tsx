// apps/web/app/blog/post/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug, Post } from '@repo/wp-utils';

export const dynamic = 'force-dynamic';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    // 1. Await the params for Next.js 15 compatibility [1]
    const { slug } = await params;

    const post: Post | null = await getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <main>
            <article>
                <h1>{post.title}</h1>
                <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                </time>

                {/*
                  Renders the raw HTML for your custom CSS.
                  Using dangerouslySetInnerHTML is standard for WordPress content.
                */}
                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
}
