import type { Metadata } from "next";

/** Next.js 15: params is a Promise; await before accessing properties */
type Props = {
  params: Promise<{ category: string }>;
};

/** Strict type for GraphQL docsPosts response */
interface Post {
  slug: string;
  title: string;
  acf?: { summary?: string };
}

const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: [String]) {
    docsPosts(where: { taxQuery: { taxArray: [{ taxonomy: DocsCategory, field: SLUG, terms: $categorySlug }] } }) {
      nodes {
        title
        slug
        acf {
          summary
        }
      }
    }
  }
`;

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  // Fetching posts from WordPress (cached 1h; cleared by on-demand revalidation)
  let posts: Post[] = [];
  try {
    const res = await fetch('https://readboot.cloudaccess.host/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: GET_POSTS_BY_CATEGORY,
        variables: { categorySlug: [decodedCategory] },
      }),
      next: { revalidate: 3600, tags: ['docs_posts'] },
    });
    if (!res.ok) throw new Error(`GraphQL request failed: ${res.status}`);
    const { data } = await res.json();
    posts = (data?.docsPosts?.nodes ?? []) as Post[];
  } catch {
    // Log in dev; production shows "No posts found"
    posts = [];
  }

  return (
    <main>
      <h1>Category: {decodedCategory.replace(/-/g, ' ')}</h1>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: '20px' }}>
              <a href={`/docs/blog/${decodedCategory}/${post.slug}`}>
                <h2 style={{ color: '#DC143C' }}>{post.title}</h2>
              </a>
              <p>{post.acf?.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found. Check if the taxonomy name &apos;DocsCategory&apos; is correct in WordPress.</p>
      )}
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `Blog — ${decodeURIComponent(category)}`,
  };
}
