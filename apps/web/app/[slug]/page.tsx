import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getPageData(slug);

  return {
    title: pageData?.title || 'Page Not Found',
  };
}
// 1. Define the data fetching function
async function getPageData(slug: string) {
  const uri = `/${slug}/`;
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is missing from.env.local");
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPage($uri: ID!) {
          page(id: $uri, idType: URI) {
            title
            content
          }
        }
      `,
      variables: { uri },
    }),
    next: { revalidate: 60 }
  });

  const { data } = await res.json();
  return data?.page;
}

// 2. Export the Page component updated for Next.js 15
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getPageData(slug);

  if (!pageData) {
    // This triggers the nearest not-found.tsx file
    notFound();
  }

  return (
    <>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
    </>
  );
}
