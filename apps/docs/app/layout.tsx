import type { Metadata } from "next";
import "@repo/ui/styles/globals";
import NavBar from "@repo/ui/components/Organisms/NavBar/NavBar";


export const metadata: Metadata = {
  title: "ReadBoot Docs",
  description: "ReBooting Education Through Visionary Futures",
};

// async function getHeaderData() {
//   const response = await fetch('https://readboot.cloudaccess.host/graphql', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ query: LOGO_QUERY }),
//     // Revalidate ensures your logo updates shortly after you change it in WordPress
//     next: { revalidate: 60 },
//   });

//   const { data } = await response.json();
//   return data.siteSettings.siteSettings.headerLogo;
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar  />
          <main>{children}</main>
        <footer>Footer content here</footer>
      </body>
    </html>
  );
}
