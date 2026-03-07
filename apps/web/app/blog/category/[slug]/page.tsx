import { getMainBlogContent, Category, Post } from '@repo/wp-utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
    // 2. Explicitly await the params Promise [1, 8, 9]
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const allCategories: Category[] = await getMainBlogContent();

    // Now 'slug' will correctly be "docs" or "boots" instead of undefined
    const category = allCategories.find((c) => c.slug === slug);

    if (!category) {
        return notFound();
    }

  return (
    <main>
      <h1>Category: {category.name}</h1>

      <div>
        {category.posts.nodes.length > 0 ? (
          category.posts.nodes.map((post: Post) => (
            <article key={post.id}>
              <Link href={`/blog/post/${post.slug}`}>
                <h3>{post.title}</h3>
                <time>{new Date(post.date).toLocaleDateString()}</time>
              </Link>
            </article>
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>

      <Link href="/blog">← Back to Blog</Link>
    </main>
  );
}
