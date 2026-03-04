import { notFound } from 'next/navigation';

interface PostData {
  title: string;
  content: string;
}

// 1. Fetch individual post data by slug
async function getPostData(slug: string): Promise<PostData | null> {
  const query = `
    query GetPost($id: ID!) {
      docsPost(id: $id, idType: SLUG) {
        title
        content
      }
    }
  `;
  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: slug } }),
  });
  const json = await res.json();
  return json.data?.docsPost |

| null;
}

// 2. Generate static paths for ALL posts in ALL categories
export async function generateStaticParams() {
  const query = `
    query GetAllDocPosts {
      docsPosts(first: 100) {
        nodes {
          slug
          docsCategories {
            nodes { slug }
          }
        }
      }
    }
  `;
  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();

  // Return array of { category: string, post: string }
  return json.data.docsPosts.nodes.flatMap((post: any) =>
    post.docsCategories.nodes.map((cat: any) => ({
      category: cat.slug,
      post: post.slug,
    }))
  );
}

// 3. Page Component (Next.js 15 Async Pattern)
export default async function BlogPostPage({ params }: { params: Promise<{ category: string; post: string }> }) {
  const { post } = await params;
  const data = await getPostData(post);

  if (!data) notFound();

  return (
    <main className="prose mx-auto py-10">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  );
}
