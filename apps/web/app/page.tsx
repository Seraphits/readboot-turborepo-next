import { Button } from "@repo/ui/atoms";
import { Hero } from "@repo/ui/organisms";
import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <title>ReadBoot</title>
        <meta name="description" content="ReBooting Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="REBOOTING EDUCATION"
        subhead="High-contrast academic tools for the next generation."
        ctaText="Join the Mission"
      />
      <h1>Web Home</h1>
      <Button>Button</Button>
    </div>
  );
}
