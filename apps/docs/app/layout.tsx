import type { Metadata } from "next";
import "@repo/ui/styles/globals";
import  NavBar  from "@repo/ui/patterns/Organisms/NavBar/NavBar";

async function getMenuData() {
  const res = await fetch('https://readboot.cloudaccess.host/graphql', {
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
    next: { revalidate: 60 }, // Cache for 60 seconds [4, 5]
  });

  const json = await res.json();
  return json.data.menuItems.nodes;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = await getMenuData();
  // Transform the flat list into a hierarchy if you have sub-menus
const navLinks = menuItems.map((item: { label: string; url: string }) => ({
  label: item.label,
  href: item.url.replace('https://readboot.cloudaccess.host', '')
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
