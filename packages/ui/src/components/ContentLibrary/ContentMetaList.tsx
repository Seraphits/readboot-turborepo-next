import type { ArticleTypeOption, TheoryOption } from "@repo/wp-utils";
import styles from "./ContentLibrary.module.scss";

export interface ContentMetaListProps {
  articleType?: ArticleTypeOption | null;
  theories?: TheoryOption[];
  articleTypeLabel?: string;
  theoriesLabel?: string;
}

export function ContentMetaList({
  articleType,
  theories = [],
  articleTypeLabel = "Article type",
  theoriesLabel = "Theories",
}: ContentMetaListProps) {
  const hasArticleType = Boolean(articleType);
  const hasTheories = theories.length > 0;

  if (!hasArticleType && !hasTheories) {
    return null;
  }

  return (
    <dl className={styles.metaList}>
      {articleType ? (
        <div className={styles.metaGroup}>
          <dt className={styles.metaLabel}>{articleTypeLabel}</dt>
          <dd className={styles.metaValues}>{articleType.label}</dd>
        </div>
      ) : null}
      {hasTheories ? (
        <div className={styles.metaGroup}>
          <dt className={styles.metaLabel}>{theoriesLabel}</dt>
          <dd className={styles.metaValues}>
            {theories.map((theory) => theory.label).join(", ")}
          </dd>
        </div>
      ) : null}
    </dl>
  );
}
