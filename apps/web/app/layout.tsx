import "@repo/ui/patterns/globals.scss";
import Script from "next/script";
import { getMenuData } from "@repo/wp-utils";
import { Alert } from "@repo/ui/molecules";
import { NavigationBar } from "@repo/ui/organisms";

const THEME_INIT_SCRIPT = `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({ location: "WEB_TOPNAV" });

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
