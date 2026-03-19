import React from 'react';
import { SectionLayout } from '../../Atoms/LayoutAtoms/SectionLayout/SectionLayout';
import { Typography } from '../../Atoms/BrandingAtoms/Typography/Typography';
import { ProjectCard } from '../../Molecules/Cards/ProjectCard/ProjectCard';
import { BlogCard } from '../../Molecules/Cards/BlogCard/BlogCard';
import type { Project, Post } from '@repo/wp-utils';
import styles from './Showcase.module.scss';
import clsx from 'clsx';

interface ShowcaseProps {
  items: (Project | Post)[]; // Added to fix the.map() error
  type: 'project' | 'blog';
  title?: string;
  className?: string;
}

export const Showcase = ({ items, type, title, className }: ShowcaseProps) => {
  return (
    <SectionLayout
      variant="grid"
      className={clsx(styles.showcase, className)}
    >
      {title && (
        <header className={styles.showcase__header}>
          <Typography variant="h2">{title}</Typography>
        </header>
      )}

      <div className={styles.showcase__items}>
        {items.map((item) =>  (
          type === 'project'
           ? <ProjectCard key={item.id} project={item as Project} />
            : <BlogCard key={item.id} post={item as Post} />
        ))}
      </div>
    </SectionLayout>
  );
};
