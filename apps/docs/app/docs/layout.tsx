import "@repo/ui/patterns/globals.scss";
import Script from "next/script";
import { getMenuData } from "@repo/wp-utils";
import { Alert } from "@repo/ui/molecules";
import { NavigationBar } from "@repo/ui/organisms";

/** Menu location must match WordPress theme's register_nav_menus slug (WPGraphQL uses UPPERCASE_SNAKE_CASE).
 *  e.g. docs_site_navigation → DOCS_SITE_NAVIGATION, docs_topnav → DOCS_TOPNAV */
const DOCS_MENU_LOCATION =
  process.env.NEXT_PUBLIC_DOCS_MENU_LOCATION ?? "DOCS_TOPNAV";

const THEME_INIT_SCRIPT = `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({
    location: DOCS_MENU_LOCATION,

  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <NavigationBar links={links} />
        <Alert />
        <main>{children}</main>
      </body>
    </html>
  );
}
