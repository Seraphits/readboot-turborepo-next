/* eslint-disable @next/next/no-page-custom-font -- Google Fonts in root layout (matches packages/ui token stacks: Baloo 2 + Inter). */
import type { Metadata } from "next";
import Script from "next/script";
import "@repo/ui/framework";
import { getMenuData, toWebHref, type NavItem } from "@repo/wp-utils";
import { NavigationBar } from "@repo/ui/organisms";

const THEME_INIT_SCRIPT = `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();`;

/** When WP has no items for this location (or fetch fails), keep the bar usable. */
const FALLBACK_TOP_NAV: NavItem[] = [
  { id: "trapp-home", parentId: null, label: "Home", href: "/" },
];

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002",
  ),
  title: {
    default: "Trappsystems",
    template: "%s | Trappsystems",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linksFromWp = await getMenuData({
    location: "WEB_TOPNAV",
    transformHref: (url) => toWebHref(url),
  });

  const links =
    linksFromWp.length > 0 ? linksFromWp : FALLBACK_TOP_NAV;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Baloo+2:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <NavigationBar links={links} />
        <main>{children}</main>
      </body>
    </html>
  );
}
