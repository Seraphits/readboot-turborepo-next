import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@repo/wp-utils';
import styles from './BlogCard.module.scss';

export const BlogCard = ({ post }: { post: Post }) => {
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
        <Link href={`/blog/post/${post.slug}`} className={styles.card__link}>
          Read More →
        </Link>
      </div>
    </article>
  );
};
