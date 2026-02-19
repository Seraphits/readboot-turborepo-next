// apps/web/app/layout.tsx
import NavBar from "@repo/ui/patterns/Organisms/NavBar/NavBar";

const WP_GRAPHQL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://readboot.cloudaccess.host/graphql";

async function getMenuData() {
  const res = await fetch(WP_GRAPHQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        menuItems(where: { location: WEB_TOPNAV }) {
          nodes {
            id
            label
            url
          }
        }
      }`
    }),
    next: { revalidate: 60 }
  });

  const json = await res.json();
  return json.data?.menuItems?.nodes ?? [];
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = (await getMenuData()) ?? [];

  // Type 'item' to avoid the TypeScript 'any' error seen in previous turns [5]
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
