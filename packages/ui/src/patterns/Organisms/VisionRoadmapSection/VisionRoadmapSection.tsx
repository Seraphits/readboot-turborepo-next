import styles from "./VisionRoadmapSection.module.scss";

export type VisionRoadmapSectionProps = {
  title: string;
  body: string;
  generations: readonly string[];
};

export const VisionRoadmapSection = ({
  title,
  body,
  generations,
}: VisionRoadmapSectionProps) => {
  return (
    <section className={styles.root} aria-labelledby="vision-heading">
      <div className={styles.inner}>
        <h2 id="vision-heading" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
        <div
          className={styles.timeline}
          role="list"
          aria-label="Generational roadmap"
        >
          <div className={styles.timelineLine} aria-hidden />
          {generations.map((label, index) => (
            <div
              key={`${label}-${index}`}
              className={styles.node}
              role="listitem"
            >
              <span className={styles.nodeDot} aria-hidden />
              <span className={styles.nodeLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
