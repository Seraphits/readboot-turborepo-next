import type { ReactNode } from 'react';
import styles from './SectionIntro.module.scss';

interface SectionIntroProps {
  title: string;
  description?: ReactNode;
  headingLevel?: 1 | 2 | 3;
}

export function SectionIntro({ title, description, headingLevel = 2 }: SectionIntroProps) {
  const HeadingTag = `h${headingLevel}` as const;

  return (
    <header className={styles.sectionIntro}>
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
