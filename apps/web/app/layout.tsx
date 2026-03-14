import NavBar from "@repo/ui/patterns/Organisms/NavigationBar/navigation-bar";
import "@branding/Foundations/Foundations.scss";
import { getMenuData } from "@repo/wp-utils";
import { Alert } from "@repo/ui";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({ location: "WEB_TOPNAV" });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavBar links={links} />
        <Alert />
        <main>{children}</main>
      </body>
    </html>
  );
}
