// ActiveMembersSection.tsx
import React from 'react';
import styles from './ActiveMembersSection.module.css';
import { members } from '../../data/members'; // <-- add this import

type ActiveMember = {
  name: string;
  image: string;
  major: string;
  graduation: string;
  linkedin?: string;
};

const chunkArray = (arr: ActiveMember[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const rows = chunkArray(members, 5);

const ActiveMembersSection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/images/zp_logo.png';
  };

  return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Active Members</h2>
        {rows.map((row, rowIndex) => (
            <div className={styles.gridRow} key={rowIndex}>
              {row.map((member, idx) => (
                  <div
                      key={idx}
                      className={styles.card}
                      style={{ animationDelay: `${(rowIndex * 5 + idx) * 0.05}s` }}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                          src={member.image}
                          alt={member.name}
                          className={styles.image}
                          onError={handleImageError}
                          loading="lazy"
                      />
                      <div className={styles.overlay}>
                        <p><strong>Major:</strong> {member.major}</p>
                        <p><strong>Class of:</strong> {member.graduation}</p>
                      </div>
                    </div>
                    {member.linkedin && member.linkedin.trim() ? (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.name}
                        >
                          {member.name}
                        </a>
                    ) : (
                        <span className={styles.name}>{member.name}</span>
                    )}
                  </div>
              ))}
            </div>
        ))}
      </div>
  );
};

export default ActiveMembersSection;