import { Button, HeroCentered } from "@repo/ui";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroCentered
        title="REBOOTING EDUCATION"
        subtitle="High-contrast academic tools for the next generation."
        ctaText="Join the Mission"
      />
      <h1>Docs Home</h1>
      <Button>Button</Button>
    </div>
  );
}
