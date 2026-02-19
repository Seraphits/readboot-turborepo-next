// apps/web/app/layout.tsx
import NavBar from "@repo/ui/patterns/Organisms/NavBar/NavBar";
import { buildMenuTree } from "@repo/wp-utils";

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
        query: `{
          menuItems(where: { location: WEB_TOPNAV }, first: 100) {
            nodes {
              id
              parentId
              label
              url
            }
          }
        }`
      }),
      signal: controller.signal,
      next: { revalidate: 60 }
    });

    clearTimeout(timeoutId);
    const json = await res.json();
    return json.data?.menuItems?.nodes ?? [];
  } catch {
    clearTimeout(timeoutId);
    return [];
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = await getMenuData();

  // Map API url to href, then build hierarchical tree
  const navItems = menuItems.map((item: { id: string; parentId: string | null; label: string; url?: string }) => ({
    id: item.id,
    parentId: item.parentId,
    label: item.label,
    href: item.url ?? '#',
  }));
  const hierarchicalMenu = buildMenuTree(navItems);

  return (
    <html lang="en">
      <body>
        <NavBar links={hierarchicalMenu} />
        <main>{children}</main>
      </body>
    </html>
  );
}
