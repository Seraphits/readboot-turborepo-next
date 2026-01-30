import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReadBoot",
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
