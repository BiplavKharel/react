import React from 'react';
import styles from './SystemMessage.module.css';

const SystemMessage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>System Message</span>
          <button className={styles.close}>✕</button>
        </div>
        <div className={styles.body}>
          <p>
            At Zeta Pi, our mission is to foster a community of passionate and innovative technology enthusiasts who are dedicated to advancing their skills, knowledge, and impact in the ever-evolving landscape of technology.
            <br /><br />
            Through collaboration, mentorship, and a commitment to excellence, we strive to create an environment where members can thrive both personally and professionally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemMessage;
