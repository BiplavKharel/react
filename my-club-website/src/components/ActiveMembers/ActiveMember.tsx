import React from 'react';
import styles from './ActiveMember.module.css';

type ActiveMemberProps = {
  image: string;
  name: string;
  major: string;
  graduation: string;
  linkedin?: string;
};

const ActiveMember: React.FC<ActiveMemberProps> = ({
  image,
  name,
  major,
  graduation,
  linkedin
}) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.overlay}>
          <p><strong>Major:</strong> {major}</p>
          <p><strong>Class of:</strong> {graduation}</p>
        </div>
      </div>
      <a
        href={linkedin || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.name}
      >
        {name}
      </a>
    </div>
  );
};

export default ActiveMember;
