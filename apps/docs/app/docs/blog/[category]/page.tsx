import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  return (
    <main>
      <h1>Category: {decodeURIComponent(category)}</h1>
      <p>Posts in this category coming soon.</p>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `Blog — ${decodeURIComponent(category)}`,
  };
}
