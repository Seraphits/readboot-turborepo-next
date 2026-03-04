import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: [String]) {
    docsPosts(where: { taxQuery: { taxArray: { taxonomy: DocsCategory, field: SLUG, terms: $categorySlug } } }) {
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

  // Fetching posts from WordPress
  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_POSTS_BY_CATEGORY,
      variables: { categorySlug: [decodedCategory] },
    }),
  });

  const { data } = await res.json();
  const posts = data?.docsPosts?.nodes || [];

  return (
    <main>
      <h1>Category: {decodedCategory.replace(/-/g, ' ')}</h1>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post: any) => (
            <li key={post.slug} style={{ marginBottom: '20px' }}>
              <a href={`/docs/blog/${decodedCategory}/${post.slug}`}>
                <h2 style={{ color: '#DC143C' }}>{post.title}</h2>
              </a>
              <p>{post.acf?.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found in this category.</p>
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
