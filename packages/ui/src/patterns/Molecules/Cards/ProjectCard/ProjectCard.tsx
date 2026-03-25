import React from 'react';
import Link from 'next/link';
import { Badge } from '../../../Atoms/DisplayAtoms/Badge/Badge';
import { Button } from '../../../Atoms/Interactive/Button/Button';
import { Typography } from '../../../Atoms/Branding/Typography/Typography';
import type { Project } from '@repo/wp-utils';
import styles from './ProjectCard.module.scss';
import clsx from 'clsx';

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { title, excerpt, slug, projectIntelligence, tags } = project;

  return (
    <article className={clsx(styles['project-card'], className)}>
      <header className={styles['project-card__header']}>
        <Badge variant="primary" className={styles['project-card__status']}>
          {projectIntelligence.lifecycleStatus}
        </Badge>
        <Typography variant="h3" className={styles['project-card__title']}>
          {title}
        </Typography>
      </header>

      <div className={styles['project-card__body']}>
        <div
          className={styles['project-card__excerpt']}
          dangerouslySetInnerHTML={{ __html: excerpt?? '' }}
        />
      </div>

      <footer className={styles['project-card__footer']}>
        <div className={styles['project-card__meta']}>
          <span className={styles['project-card__metric']}>
            {projectIntelligence.impactMetric}
          </span>
          <div className={styles['project-card__tags']}>
            {tags.nodes.map((tag) => (
              <Badge key={tag.name} variant="outline">
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>

        <Button asChild variant="action-on-light" className={styles['project-card__cta']}>
          <Link href={`/projects/${slug}`}>
            View Case Study →
          </Link>
        </Button>
      </footer>
    </article>
  );
};
