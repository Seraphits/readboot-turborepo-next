import { Button, HeroHome } from "@repo/ui";
import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHome
        title="REBOOTING EDUCATION"
        subtitle="High-contrast academic tools for the next generation."
        ctaText="Join the Mission"
      />
      <h1 className="glitch-title" data-text="DISRUPTION">Web Home</h1>
      <Button>Button</Button>
    </div>
  );
}
