import "@repo/ui/patterns/globals.scss";
import { getMenuData } from "@repo/wp-utils";
import { Alert } from "@repo/ui/molecules";
import { NavigationBar } from "@repo/ui/organisms";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({ location: "WEB_TOPNAV" });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavigationBar links={links} />
        <Alert />
        <main>{children}</main>
      </body>
    </html>
  );
}
