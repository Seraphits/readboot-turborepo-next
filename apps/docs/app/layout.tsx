import type { Metadata } from "next";
import "@repo/ui/styles/globals";
import  NavBar  from "@repo/ui/patterns/Organisms/NavigationBar/navigation-bar";

const WP_GRAPHQL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://readboot.cloudaccess.host/graphql";

const FETCH_TIMEOUT_MS = 8000;

async function getMenuData() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(WP_GRAPHQL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPrimaryMenu {
            menuItems(where: { location: DOCS_TOPNAV }) {
              nodes {
                id
                label
                url
                parentId
              }
            }
          }
        `,
      }),
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);
    const json = await res.json();
    return json.data?.menuItems?.nodes ?? [];
  } catch {
    clearTimeout(timeoutId);
    return [];
  }
}

function toDocsHref(url: string): string {
  const path = url.replace('https://readboot.cloudaccess.host', '').replace('http://readboot.cloudaccess.host', '') || '/';
  if (path.startsWith('http') || path.startsWith('/docs')) return path;
  return path.startsWith('/') ? `/docs${path}` : `/docs/${path}`;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = await getMenuData();
  const navLinks = menuItems.map((item: { label: string; url?: string }) => ({
    label: item.label,
    href: toDocsHref(item.url ?? '')
  }));

  return (
    <html lang="en">
      <body>
        <NavBar links={navLinks} />
        <main>{children}</main>
      </body>
    </html>
  );
}
