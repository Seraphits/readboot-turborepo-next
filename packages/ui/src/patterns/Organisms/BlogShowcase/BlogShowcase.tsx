import { getPosts, type Post } from '@repo/wp-utils';
import React from 'react';
import { Showcase } from '../Showcase/Showcase';

export interface BlogShowcaseProps {
  categorySlug?: string;
  limit?: number;
  orderBy?: 'DATE' | 'TITLE' | 'NAME';
  order?: 'ASC' | 'DESC';
  sectionTitle?: string;
  className?: string;
}

export const BlogShowcase = async ({
  categorySlug,
  limit,
  orderBy,
  order,
  sectionTitle,
  className,
}: BlogShowcaseProps) => {
  const posts: Post[] = await getPosts({ categorySlug, limit, orderBy, order });

  return (
    <Showcase
      items={posts}
      type="blog"
      title={sectionTitle}
      className={className}
    />
  );
};
