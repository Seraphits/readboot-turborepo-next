import type { Metadata } from "next";
import "@repo/ui/styles/globals";

export const metadata: Metadata = {
  title: "ReadBoot Docs",
  description: "ReBooting Education Through Visionary Futures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Header content here</header>
          <main>{children}</main>
        <footer>Footer content here</footer>
      </body>
    </html>
  );
}
