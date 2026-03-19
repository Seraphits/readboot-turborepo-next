import "@repo/ui/patterns/globals.scss";
import Script from "next/script";
import { getMenuData } from "@repo/wp-utils";
import { Alert } from "@repo/ui/molecules";
import { NavigationBar } from "@repo/ui/organisms";

const THEME_INIT_SCRIPT = `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();`;

/** Unregister ghost service workers and clear caches to avoid proxy/origin mismatch (dev only). */
const SW_FORCE_CLEAR_SCRIPT = `(function(){if(typeof window==='undefined'||!navigator.serviceWorker)return;navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(reg){reg.unregister();});});'caches'in window&&caches.keys().then(function(n){n.forEach(function(name){caches.delete(name);});});})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({ location: "WEB_TOPNAV" });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Baloo+2:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Script id="sw-force-clear" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: SW_FORCE_CLEAR_SCRIPT }} />
        <NavigationBar links={links} />
        <Alert />
        <main>{children}</main>
      </body>
    </html>
  );
}
