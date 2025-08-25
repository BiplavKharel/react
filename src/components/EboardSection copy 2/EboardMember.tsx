import React from 'react';
import styles from './EboardMember.module.css';

type Props = {
  image: string;
  name: string;
  position: string;
  major: string;
  graduation: string;
};

const EboardMember: React.FC<Props> = ({ image, name, position, major, graduation }) => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.overlay}>
          <p><strong>Major:</strong><br />{major}</p>
          <p><strong>Class of:</strong><br />{graduation}</p>
        </div>
      </div>
      <div className={styles.caption}>
        <h3>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
};

export default EboardMember;
