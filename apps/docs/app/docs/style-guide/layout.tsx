import Link from 'next/link';
import styles from './layout.module.scss';

const STYLE_GUIDE_LINKS = [
  { href: '/docs/style-guide', label: 'Introduction' },
  { href: '/docs/style-guide/default-styles', label: 'Default Styles' },
  { href: '/docs/style-guide/colors', label: 'Colors & Tokens' },
  { href: '/docs/style-guide/patterns', label: 'Component Library' },
  { href: '/docs/style-guide/spacing', label: 'Spacing Scale' },
  { href: '/docs/style-guide/motion', label: 'Motion & Animation' },
  { href: '/docs/style-guide/iconography', label: 'Iconography' },
] as const;

export default function StyleGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h3 className={styles.title}>Style Guide</h3>
        <nav className={styles.nav}>
          {STYLE_GUIDE_LINKS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
