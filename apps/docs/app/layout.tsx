import type { Metadata } from "next";
import "@repo/ui/styles/globals";
import  NavBar  from "@repo/ui/patterns/Organisms/NavBar/NavBar";

const WP_GRAPHQL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://readboot.cloudaccess.host/graphql";

async function getMenuData() {
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
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data?.menuItems?.nodes ?? [];
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = await getMenuData();
  const navLinks = menuItems.map((item: { label: string; url?: string }) => ({
    label: item.label,
    href: (item.url ?? '').replace('https://readboot.cloudaccess.host', '')
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
