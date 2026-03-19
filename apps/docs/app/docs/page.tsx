import { DocsHomePage, defaultDocsHomeHero } from "@repo/ui/organisms";
import type { Metadata } from "next";

const portfolioOrigin =
  process.env.NEXT_PUBLIC_PORTFOLIO_ORIGIN ?? "https://www.readboot.com";

export const metadata: Metadata = {
  title: "ReadBoot Docs | Design system & pattern lab",
  description:
    "Futurist Carton style guide, component patterns, and how the ReadBoot docs site is built — Next.js, Turborepo, @repo/ui, WordPress, Storybook.",
};

export default function DocsHome() {
  return (
    <DocsHomePage
      hero={{
        ...defaultDocsHomeHero,
        primaryCta: {
          label: defaultDocsHomeHero.primaryCta.label,
          href: portfolioOrigin.endsWith("/") ? portfolioOrigin : `${portfolioOrigin}/`,
        },
      }}
    />
  );
}
