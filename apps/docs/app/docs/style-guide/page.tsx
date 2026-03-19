import Link from "next/link";
import { ComponentShowcase } from './ComponentShowcase';
import { SectionIntro } from './components/SectionIntro';

export default function StyleGuideHome() {
  return (
    <section>
      <SectionIntro
        headingLevel={1}
        title="Welcome to the ReadBoot Style Guide"
        description="This system provides a unified design language for the ReadBoot project."
      />

      <SectionIntro
        title="Getting Started"
        description={<>All styles are managed in the <code>@repo/ui</code> package using the SCSS 7-1 pattern.</>}
      />

      <ul>
        <li><strong>Consistency:</strong> Use semantic tokens instead of hardcoded hex values.</li>
        <li><strong>Accessibility:</strong> Always use standard HTML5 tags for primary layout.</li>
      </ul>

      <SectionIntro title="Style Guide Covers" description="Key areas documented in this guide:" />
      <ul>
        <li><Link href="/docs/style-guide/default-styles">Default Styles</Link></li>
        <li><Link href="/docs/style-guide/colors">Colors & Tokens</Link> — primitives, semantic tokens, and <strong>color combinations</strong> (pairings) for surfaces and text.</li>
        <li><Link href="/docs/style-guide/patterns">Component Library</Link> — Storybook-powered previews embedded in docs pages.</li>
        <li><Link href="/docs/style-guide/spacing">Spacing Scale</Link></li>
        <li><Link href="/docs/style-guide/motion">Motion & Animation</Link> — duration scale, easing, and interaction states.</li>
        <li><Link href="/docs/style-guide/iconography">Iconography</Link> — icon sizes, stroke weight, accessibility.</li>
      </ul>

      <ComponentShowcase />
    </section>
  );
}
