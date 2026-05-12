import type { ArticleTypeOption, TheoryOption } from "@repo/wp-utils";
import { ContentMetaList } from "../ContentLibrary/ContentMetaList";
import styles from "./ContentArticle.module.scss";

export interface ContentArticleHeaderProps {
  title: string;
  excerpt?: string;
  articleType?: ArticleTypeOption | null;
  theories?: TheoryOption[];
  date?: string;
  showDate?: boolean;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ContentArticleHeader({
  title,
  excerpt,
  articleType,
  theories = [],
  date,
  showDate = false,
}: ContentArticleHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{title}</h1>
      {showDate && date ? (
        <p className={styles.date}>
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      ) : null}
      {excerpt ? (
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      ) : null}
      <div className={styles.meta}>
        <ContentMetaList articleType={articleType} theories={theories} />
      </div>
    </header>
  );
}
