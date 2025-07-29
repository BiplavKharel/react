import React from "react";
import styles from "./PillarsSection.module.css";

const pillars = [
  {
    title: "kindness",
    description:
      "The foundation of brotherhood lies in group support and service. This means that the brothers in Zeta Pi should strive to assist each other and be there for one another, providing both emotional and professional support.",
  },
  {
    title: "ambition",
    description:
      "Our brothers are pushed to advance themselves both academically and professionally with the help of the resources provided to them through membership.",
  },
  {
    title: "equality",
    description:
      "In Zeta Pi, we stress the importance of diversity and inclusion, spanning across the fields of ethnicity, gender, sexuality and neurodivergence.",
  },
  {
    title: "balance",
    description:
      "Balance between a student's social, academic and professional lives is crucial for advancing in your field while maintaining a good mental health. We are here to support you in it.",
  },
];

const PillarsSection: React.FC = () => {
  return (
    <section className={styles.pillarsSection}>
      <h2 className={styles.header}>Our Pillars</h2>
      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
            <p className={styles.pillarDescription}>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
