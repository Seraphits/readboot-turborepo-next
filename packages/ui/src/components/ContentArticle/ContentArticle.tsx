import type { ReactNode } from "react";
import styles from "./ContentArticle.module.scss";

export interface ContentArticleProps {
  header: ReactNode;
  featuredImage?: ReactNode;
  children: ReactNode;
}

export function ContentArticle({
  header,
  featuredImage,
  children,
}: ContentArticleProps) {
  return (
    <article className={styles.root}>
      {header}
      {featuredImage ? (
        <div className={styles.featuredImage}>{featuredImage}</div>
      ) : null}
      <div className={styles.body}>{children}</div>
    </article>
  );
}
