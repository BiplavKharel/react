import React from "react";
import styles from "./HomeSections.module.css";

const HomeSections: React.FC = () => {
  return (
    <>
      {/* Section 1: Top Container */}
      <div className={styles.topContainer}>
        <div className={styles.textBox}>
          <h1>Zeta Pi</h1>
          <p>
            We are a Co-Ed Professional Technology Fraternity established in
            2023 at the University of Michigan.
          </p>
          <img
            className={styles.computerImgMobile}
            src="/images/computer.png"
            alt="Computer Mobile"
            style={{ position: "relative" }}
          />
          <div className={styles.btnContainer}>
            <a href="rush.html" style={{ width: "100%" }}>
              <button className={styles.heroBtn}>Fall 2025 Rush</button>
            </a>
          </div>
        </div>

        <div className={styles.computerImg}>
          <img
            src="/images/computer.png"
            alt="Computer"
            style={{ position: "relative", zIndex: 1 }}
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
          />
          <img
            className={styles.diag}
            src="/images/diag.svg"
            alt="Dialogue Box"
          />

          <div className={styles.diagText}>
            At Zeta Pi, our mission is to foster a community of passionate and
            innovative technology enthusiasts who are dedicated to advancing
            their skills, knowledge, and impact in the ever-evolving landscape
            of technology. Through collaboration, mentorship, and a commitment
            to excellence, we strive to create an environment where members can
            thrive both personally and professionally.
          </div>

          <img
            className={styles.mouse}
            src="/images/mouse.png"
            alt="Mouse Icon"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={styles.heading}>
          Our Pillars
          <br />
        </div>

        <div className={styles.pillarsWrapper}>
          <img
            src="/images/our-pillars-photo.png"
            className={styles.pillars}
            alt="Our Pillars"
          />
        </div>

        <div className={styles.pillarsMobile}>
          <img
            style={{ maxWidth: "20%" }}
            src="/images/pillar.png"
            alt="Pillar"
          />
          <div className={styles.pillarRectangle}>kindness</div>
          <div className={styles.pillarRectangle}>ambition</div>
          <div className={styles.pillarRectangle}>equality</div>
          <div className={styles.pillarRectangle}>balance</div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
