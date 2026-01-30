// apps/docs/app/style-guide/page.tsx
import Link from "next/link";

export default function StyleGuideHome() {
  return (
    <section>
      <h1>Welcome to the ReadBoot Style Guide</h1>
      <p>This system provides a unified design language for the ReadBoot project.</p>

      <h2>Getting Started</h2>
      <p>All styles are managed in the <code>@repo/ui</code> package using the SCSS 7-1 pattern.</p>

      <ul>
        <li><strong>Consistency:</strong> Use semantic tokens instead of hardcoded hex values.</li>
        <li><strong>Accessibility:</strong> Always use standard HTML5 tags for primary layout.</li>
      </ul>

      <h2>Style Guide Covers</h2>
      <p>Key areas documented in this guide:</p>
      <ul>
        <li><Link href="/style-guide/default-styles">Default Styles</Link></li>
        <li><Link href="/style-guide/colors">Colors & Tokens</Link> — primitives, semantic tokens, and <strong>color combinations</strong> (pairings) for surfaces and text.</li>
        <li><Link href="/style-guide/components">Component Library</Link> — including <code>ColorScheme</code> for background + text pairings.</li>
        <li><Link href="/style-guide/spacing">Spacing Scale</Link></li>
        <li><Link href="/style-guide/motion">Motion & Animation</Link> — duration scale, easing, interaction states, glitch.</li>
        <li><Link href="/style-guide/iconography">Iconography</Link> — icon sizes, stroke weight, accessibility.</li>
      </ul>
    </section>
  );
}
