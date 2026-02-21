import Link from 'next/link';

export default function StyleGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc', minHeight: '100vh', padding: '1rem' }}>
        <h3>Style Guide</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/docs/style-guide">Introduction</Link>
          <Link href="/docs/style-guide/default-styles">Default Styles</Link>
          <Link href="/docs/style-guide/colors">Colors & Tokens</Link>
          <Link href="/docs/style-guide/patterns">Component Library</Link>
          <Link href="/docs/style-guide/spacing">Spacing Scale</Link>
          <Link href="/docs/style-guide/motion">Motion & Animation</Link>
          <Link href="/docs/style-guide/iconography">Iconography</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}
