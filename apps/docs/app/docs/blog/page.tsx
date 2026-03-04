// 1. Define the fetching logic (You can put this in a shared lib/api.ts later)
async function getAllCategorySlugs() {
  const query = `
    query GetAllCategorySlugs {
      docsCategories(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { tags: ['docs_categories'] } // Useful for ISR later
  });
  const json = await res.json();
  return json.data.docsCategories.nodes;
}

// 2. Implementation for [category]
export async function generateStaticParams() {
  const categories = await getAllCategorySlugs();

  return categories.map((cat: { slug: string }) => ({
    category: cat.slug, // Must match the folder name [category]
  }));
}

// 3. Blog index page component
export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Browse posts by category.</p>
    </main>
  );
}
