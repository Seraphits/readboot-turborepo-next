import "@repo/ui/patterns/globals.scss";
import NavBar from "@repo/ui/patterns/Organisms/NavigationBar/navigation-bar";
import { getMenuData, } from "@repo/wp-utils";
import { Alert } from "@repo/ui";

/** Menu location must match WordPress theme's register_nav_menus slug (WPGraphQL uses UPPERCASE_SNAKE_CASE).
 *  e.g. docs_site_navigation → DOCS_SITE_NAVIGATION, docs_topnav → DOCS_TOPNAV */
const DOCS_MENU_LOCATION =
  process.env.NEXT_PUBLIC_DOCS_MENU_LOCATION ?? "DOCS_TOPNAV";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({
    location: DOCS_MENU_LOCATION,

  });

  return (
    <html lang="en">
      <body>
        <NavBar links={links} />
        <Alert />
        <main>{children}</main>
      </body>
    </html>
  );
}
