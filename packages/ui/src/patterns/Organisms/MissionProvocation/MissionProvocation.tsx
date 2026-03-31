import styles from "./MissionProvocation.module.scss";

export type MissionProvocationProps = {
  title: string;
  /** Word or phrase in `title` to emphasize with brand accent (no glitch). */
  accentWord: string;
  paragraphs: readonly string[];
};

export const MissionProvocation = ({
  title,
  accentWord,
  paragraphs,
}: MissionProvocationProps) => {
  const segments = title.split(accentWord);
  const hasAccent = segments.length > 1;

  return (
    <section className={styles.root} aria-labelledby="mission-heading">
      <div className={styles.inner}>
        <h2 id="mission-heading" className={styles.title}>
          {hasAccent ? (
            <>
              {segments[0]}
              <span className={styles.accent}>{accentWord}</span>
              {segments.slice(1).join(accentWord)}
            </>
          ) : (
            title
          )}
        </h2>
        <div className={styles.columns}>
          {paragraphs.map((text, index) => (
            <p key={index} className={styles.body}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
