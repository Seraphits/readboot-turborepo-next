import { HomePage, portfolioHeroPortrait } from "@repo/ui/templates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReadBoot | Nicole Trapp",
  description:
    "AI-native product architect and learning engineer — engineering the operating systems of human growth. Portfolio, blog, and design documentation.",
};

export default function Home() {
  return (
    <HomePage
      portraitSrc={portfolioHeroPortrait}
      portraitAlt="Nicole Trapp — retro-futurist illustrated portrait with cityscape; artwork includes name and role."
    />
  );
}
