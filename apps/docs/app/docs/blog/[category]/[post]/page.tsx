import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string; post: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { category, post } = await params;
  return (
    <main>
      <article>
        <h1>{decodeURIComponent(post)}</h1>
        <p>Category: {decodeURIComponent(category)}</p>
        <p>Post content coming soon.</p>
      </article>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await params;
  return {
    title: `${decodeURIComponent(post)} — Blog`,
  };
}
