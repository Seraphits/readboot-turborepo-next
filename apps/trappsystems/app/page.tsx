import type { Metadata } from "next";
import { ThemeToggle } from "@repo/ui/molecules";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main>
      <ThemeToggle />
      <h1>Trapp Systems Homepage</h1>
    </main>
  );
}
