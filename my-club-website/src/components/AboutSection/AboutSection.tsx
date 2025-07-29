import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <>
      {/* Section 1: Top Container */}
      <div className={styles.topContainer}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Zeta Pi</h1>
          <p>
            We are a Co-Ed Professional Technology Fraternity established in
            2023 at the University of Michigan.
          </p>
          <img
            className={styles.computerImgMobile}
            src="/images/computer.png"
            alt="Computer Mobile"
            loading="lazy"
          />
          <div className={styles.btnContainer}>
            <a href="/rush">
              <button className={styles.heroBtn}>Fall 2025 Rush</button>
            </a>
          </div>
        </div>

        <div className={styles.computerImg}>
          <img
            src="/images/computer.png"
            alt="Computer"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.dialoguebox}>
          <img
            className={styles.diagMobile}
            src="/images/diag-mobile.svg"
            alt="Dialogue Box Mobile"
            loading="lazy"
          />
          <img
            className={styles.diag}
            src="/images/diag.svg"
            alt="Dialogue Box"
            loading="lazy"
          />

          <div className={styles.diagText}>
            At Zeta Pi, our mission is to foster a community of passionate and
            innovative technology enthusiasts who are dedicated to advancing
            their skills, knowledge, and impact in the ever-evolving landscape
            of technology. Through collaboration, mentorship, and a commitment
            to excellence, we strive to create an environment where members can
            thrive both personally and professionally.
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
