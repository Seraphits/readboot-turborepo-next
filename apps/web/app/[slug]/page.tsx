import { notFound } from 'next/navigation';
// 1. Define the data fetching function
async function getPageData(slug: string) {
  // Use leading/trailing slashes to match standard WordPress URIs
  const uri = `/${slug}/`;

  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
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
    next: { revalidate: 60 } // Optional: caches the result for 60 seconds
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
