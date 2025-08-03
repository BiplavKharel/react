import React from 'react';
import styles from './EboardMember.module.css';

type Props = {
  image: string;
  name: string;
  position: string;
  interestText: string;
  major: string;
};

const EboardMember: React.FC<Props> = ({ image, name, position, interestText, major }) => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.overlay}>
          <div>
            <p><strong>Major:</strong><br />{major}</p>
            <br />
            <p><strong>Interests:</strong><br />{interestText}</p>
          </div>
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
