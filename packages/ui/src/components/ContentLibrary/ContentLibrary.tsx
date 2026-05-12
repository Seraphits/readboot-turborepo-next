import type { LibraryEntry } from "@repo/wp-utils";
import type { ReactNode } from "react";
import { ContentLibraryCard } from "./ContentLibraryCard";
import styles from "./ContentLibrary.module.scss";

export interface ContentLibraryProps {
  heading: string;
  intro?: ReactNode;
  items: LibraryEntry[];
  itemHref: (item: LibraryEntry) => string;
  filters?: ReactNode;
  emptyMessage?: string;
}

export function ContentLibrary({
  heading,
  intro,
  items,
  itemHref,
  filters,
  emptyMessage = "No library entries matched the current filters.",
}: ContentLibraryProps) {
  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{heading}</h1>
        {intro ? <div className={styles.intro}>{intro}</div> : null}
        {filters ? <div className={styles.filters}>{filters}</div> : null}
        <p className={styles.count}>
          {items.length} {items.length === 1 ? "entry" : "entries"}
        </p>
      </header>

      {items.length === 0 ? (
        <p className={styles.empty}>{emptyMessage}</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <ContentLibraryCard item={item} href={itemHref(item)} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
