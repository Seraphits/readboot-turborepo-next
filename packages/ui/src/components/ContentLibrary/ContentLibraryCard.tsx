import type { LibraryEntry } from "@repo/wp-utils";
import Link from "next/link";
import { ContentFeaturedImage } from "../ContentArticle/ContentFeaturedImage";
import { ContentMetaList } from "./ContentMetaList";
import styles from "./ContentLibrary.module.scss";

export interface ContentLibraryCardProps {
  item: LibraryEntry;
  href: string;
}

export function ContentLibraryCard({
  item,
  href,
}: ContentLibraryCardProps) {
  return (
    <article className={styles.card}>
      {item.image ? (
        <div className={styles.media}>
          <Link href={href}>
            <ContentFeaturedImage image={item.image} />
          </Link>
        </div>
      ) : null}

      <div className={styles.body}>
        <h2 className={styles.title}>
          <Link href={href}>{item.title}</Link>
        </h2>
        {item.excerpt ? (
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: item.excerpt }}
          />
        ) : null}
        <ContentMetaList
          articleType={item.articleType}
          theories={item.theories}
        />
      </div>
    </article>
  );
}
