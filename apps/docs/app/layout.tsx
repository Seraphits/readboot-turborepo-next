import "@branding/Foundations/Foundations.scss";
import NavBar from "@repo/ui/patterns/Organisms/NavigationBar/navigation-bar";
import { getMenuData, toDocsHref } from "@repo/wp-utils";
import { Alert } from "@repo/ui";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = await getMenuData({
    location: "DOCS_TOPNAV",
    transformHref: toDocsHref,
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
