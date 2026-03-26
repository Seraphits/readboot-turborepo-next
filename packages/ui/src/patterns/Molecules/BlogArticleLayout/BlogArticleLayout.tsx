import type { ReactNode } from 'react';
import styles from './BlogArticleLayout.module.scss';

export function BlogArticleLayout({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}
