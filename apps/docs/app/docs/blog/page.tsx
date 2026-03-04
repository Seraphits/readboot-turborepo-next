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
    next: { revalidate: 3600, tags: ['docs_categories'] },
  });
  const json = await res.json();
  return json.data.docsCategories.nodes;
}

// 2. Implementation for [category]
export default async function BlogPage() {
  // Add this line to fetch the data
  const categories = await getAllCategorySlugs();

  return (
    <main>
      <h1>Blog</h1>
      <p>Browse posts by category.</p>
      <ul>
        {categories.map((cat: { slug: string }) => (
          <li key={cat.slug}>
            <a href={`/docs/blog/${cat.slug}`}>
              {cat.slug.replace(/-/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
