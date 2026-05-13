import React from "react";
import Link from "next/link";
import { Typography } from "../../../Atoms/Branding/Typography/Typography";
import type { Project } from "@repo/wp-utils";
import styles from "./ProjectCard.module.scss";
import clsx from "clsx";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { title, excerpt, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
    <article className={clsx(styles["project-card"], className)}>
      {/* <header className={styles["project-card__header"]}> */}
        {/* <Badge variant="primary" className={styles["project-card__status"]}>
          {projectIntelligence.lifecycleStatus}
        </Badge> */}
        <Typography variant="h3" className={styles["project-card__title"]}>
          {title}
        </Typography>
      {/* </header> */}
      <div className={styles["project-card__body"]}>
        <div
          className={styles["project-card__excerpt"]}
          dangerouslySetInnerHTML={{ __html: excerpt ?? "" }}
        />
      </div>
    </article>
    </Link>
  );
};
