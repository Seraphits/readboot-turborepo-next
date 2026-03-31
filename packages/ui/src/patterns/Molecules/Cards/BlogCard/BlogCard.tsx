import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@repo/wp-utils';
import { blogCardDefaults } from './blogCardDefaults';
import styles from './BlogCard.module.scss';

export interface BlogCardProps {
  post: Post;
  /** When set (e.g. user arrived from a category archive), append `?from=` for post-page sidebar context. */
  fromCategorySlug?: string;
}

export const BlogCard = ({ post, fromCategorySlug }: BlogCardProps) => {
  const postHref =
    fromCategorySlug != null && fromCategorySlug !== ''
      ? `/blog/post/${post.slug}/?from=${encodeURIComponent(fromCategorySlug)}`
      : `/blog/post/${post.slug}/`;

  return (
    <article className={styles.card}>
      {post.featuredImage?.node?.sourceUrl && (
        <div className={styles.card__imageWrapper}>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={styles.card__content}>
        <h3>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt ?? '' }} />
        <Link href={postHref} className={styles.card__link}>
          {blogCardDefaults.readMoreLabel}
        </Link>
      </div>
    </article>
  );
};
