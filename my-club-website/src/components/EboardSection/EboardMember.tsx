import React from 'react';
import styles from './EboardMember.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  position: string;
  major?: string;
  graduation?: string;
  linkedin?: string;
  email?: string;
};

const EboardMember: React.FC<Props> = ({
  image,
  name,
  position,
  major,
  graduation,
  linkedin,
  email,
}) => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.overlay}>
          {major && (
            <p>
              <strong>Major:</strong><br />{major}
            </p>
          )}
          {graduation && (
            <p>
              <strong>Class of:</strong><br />{graduation}
            </p>
          )}
        </div>
      </div>
      <div className={styles.caption}>
        <h3>{name}</h3>
        <p className={styles.position}>{position}</p>
        {(linkedin || email) && (
          <div className={styles.links}>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`}>
                <FaEnvelope className={styles.icon} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EboardMember;
