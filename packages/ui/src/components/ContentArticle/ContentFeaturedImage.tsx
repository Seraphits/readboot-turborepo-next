import type { LibraryImage } from "@repo/wp-utils";
import type { ReactNode } from "react";
import styles from "./ContentArticle.module.scss";

export interface ContentFeaturedImageProps {
  image: LibraryImage;
  priority?: boolean;
  caption?: ReactNode;
}

export function ContentFeaturedImage({
  image,
  priority = false,
  caption,
}: ContentFeaturedImageProps) {
  return (
    <figure className={styles.figure}>
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
      />
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
