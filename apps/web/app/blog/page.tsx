import Link from 'next/link';
import { getMainBlogContent, Category, Post } from '@repo/wp-utils';
export default async function BlogPage() {
  // Categories is explicitly typed to resolve the 'any' errors
  const categories: Category[] = await getMainBlogContent();

  return (
    <main>
      <h1>Blog</h1>
      <nav>
        <Link href="/blog">All</Link>
        {categories.map((cat: Category) => (
          <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      </nav>
      <div>
        {categories.length > 0 ? (
          categories.map((category: Category) => (
            <section key={category.slug}>
              <h2>{category.name}</h2>
              <div>
                {category.posts.nodes.map((post: Post) => (
                  <article key={post.id}>
                    <Link href={`/blog/post/${post.slug}`}>
                      <h3>{post.title}</h3>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </main>
  );
}
