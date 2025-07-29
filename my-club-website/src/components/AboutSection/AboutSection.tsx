import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <div className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Z</span>
            <span>e</span>
            <span>t</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>P</span>
            <span>i</span>
          </h1>

          <p className={styles.subtitle}>
            A Co-Ed Professional Technology Fraternity founded in 2023 at the
            University of Michigan.
          </p>

          <a href="/rush" className={styles.heroBtn}>
            Fall 2025 Rush
          </a>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/images/computer.png"
            alt="Computer"
            className={styles.heroImage}
            loading="lazy"
          />
        </div>
      </div>

    
    </>
  );
};

export default AboutSection;
