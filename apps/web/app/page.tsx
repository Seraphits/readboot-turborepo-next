import { HomePage } from "@repo/ui/organisms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReadBoot | Nicole Trapp",
  description:
    "Design engineer and learning technologist — systems that respect the learner’s finite resources. Portfolio, blog, and design documentation.",
};

export default function Home() {
  return <HomePage />;
}
