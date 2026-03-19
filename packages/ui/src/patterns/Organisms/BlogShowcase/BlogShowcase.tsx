import { getPosts, Post } from '@repo/wp-utils';
import { BlogCard } from '../../Molecules/BlogCard/BlogCard';
import styles from './BlogShowcase.module.scss';

export interface BlogShowcaseProps {
  categorySlug?: string;
  limit?: number;
  orderBy?: 'DATE' | 'TITLE' | 'NAME';
  order?: 'ASC' | 'DESC';
  sectionTitle?: string;
}

export const BlogShowcase = async ({
  categorySlug,
  limit = 3,
  orderBy = 'DATE',
  order = 'DESC',
  sectionTitle,
}: BlogShowcaseProps) => {
  const posts = await getPosts({ categorySlug, limit, orderBy, order });
  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.showcase}>
      {sectionTitle && (
        <h2 className={styles.showcase__header}>{sectionTitle}</h2>
      )}
      <div className={styles.showcase__grid}>
        {posts.map((post: Post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
