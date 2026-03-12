import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@repo/wp-utils';

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <article className="blog-card">
      {post.featuredImage?.node?.sourceUrl && (
        <div className="blog-card__image">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
          />
        </div>
      )}
      <div className="blog-card__content">
        <h3>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt ?? '' }} />
        <Link href={`/blog/${post.slug}`} className="btn-link">
          Read More →
        </Link>
      </div>
    </article>
  );
};
