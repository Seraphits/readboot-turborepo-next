import React from "react";
import styles from "./ShowcaseTemplate.module.scss";

export interface ShowcaseTemplateProps {
  headerSlot: React.ReactNode;
  mainSlot: React.ReactNode;
}

export const ShowcaseTemplate = ({
  headerSlot,
  mainSlot,
}: ShowcaseTemplateProps) => {
  return (
    <div className={styles["showcase-template"]}>
      <header className={styles["showcase-template__header"]}>
        {headerSlot}
      </header>
      <main className={styles["showcase-template__main"]}>{mainSlot}</main>
    </div>
  );
};
