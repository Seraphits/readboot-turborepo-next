import { getPosts } from '@repo/wp-utils';
import { BlogCard } from '../../Molecules/BlogCard/BlogCard';

interface BlogGridProps {
  categorySlug?: string;
  limit?: number;
  orderBy?: 'DATE' | 'TITLE' | 'NAME';
  order?: 'ASC' | 'DESC';
  sectionTitle?: string;
}

export const BlogGrid = async ({
  categorySlug,
  limit = 3,
  orderBy = 'DATE',
  order = 'DESC',
  sectionTitle
}: BlogGridProps) => {
  // Logic: Pulling the data in
  const posts = await getPosts({ categorySlug, limit, orderBy, order });

  if (!posts || posts.length === 0) return null;

  return (
    <section className="blog-grid-organism">
      {sectionTitle && <h2>{sectionTitle}</h2>}
      <div className="blog-grid-organism__wrapper">
        {posts.map((post: any) => (
          // Logic: Putting it in the card
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
