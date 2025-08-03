import React from 'react';
import styles from './ActiveMembersSection.module.css';

type ActiveMember = {
  name: string;
  image: string;
  major: string;
  graduation: string;
  linkedin: string;
};

export const members: ActiveMember[] = [
  {
    name: 'Aarian Dhanani',
    image: '/images/zp_logo.png',
    major: 'Biomedical Engineering',
    graduation: '2027',
    linkedin: 'https://linkedin.com/in/aariandhanani/',
  },
  {
    name: 'Aaron Chen',
    image: '/images/zp_logo.png',
    major: 'Mechanical Engineering',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/aaron-chen-aa836a332/',
  },
  {
    name: 'Aaron Schwarz',
    image: '/images/zp_logo.png',
    major: 'Robotics',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/aaron-schwarz-56506321a/',
  },
  {
    name: 'Aarushi Shah',
    image: '/images/zp_logo.png',
    major: 'Biomedical Engineering',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/aarushishah/',
  },
  {
    name: 'Abby Moomaw',
    image: '/images/zp_logo.png',
    major: 'Computer Science',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/abby-moomaw-261a7b2a2/',
  },
  {
    name: 'Adarsh Pettappa',
    image: '/images/zp_logo.png',
    major: 'Business Administration',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/adarsh-pettappa/',
  },
  {
    name: 'Aidan Chinnukroh',
    image: '/images/zp_logo.png',
    major: 'Computer Science',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/aidanchinnukroh/',
  },
  {
    name: 'Alexandra Enders',
    image: '/images/zp_logo.png',
    major: 'Public Health',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/alexandra-enders/',
  },
  {
    name: 'Alexis Lee',
    image: '/images/zp_logo.png',
    major: 'Data Science',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/alexis-lee-a6586124b/',
  },
  {
    name: 'Alyvia Osborne',
    image: '/images/zp_logo.png',
    major: 'Business Administration',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/alyvia-osborne-20460b23b/',
  },
  {
    name: 'Amey Krishna',
    image: '/images/zp_logo.png',
    major: 'Cognitive Science',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/amey-krishna/',
  },
  {
    name: 'Amogh Madireddi',
    image: '/images/zp_logo.png',
    major: 'Biomedical Engineering',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/amoghmadireddi/',
  },
  {
    name: 'Amy Lee',
    image: '/images/zp_logo.png',
    major: 'Economics',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/amy-lee-umich/',
  },
  {
    name: 'Andi Xi',
    image: '/images/zp_logo.png',
    major: 'Mechanical Engineering',
    graduation: '2025',
    linkedin: '',
  },
  {
    name: 'Andrew Busch',
    image: '/images/zp_logo.png',
    major: 'Electrical Engineering',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/andrewbusch472/',
  },
  {
    name: 'Andrew Hou',
    image: '/images/zp_logo.png',
    major: 'Data Science',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/hou-andrew/',
  },
  {
    name: 'Andrew Zhao',
    image: '/images/zp_logo.png',
    major: 'Business Administration',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/and-zhao/',
  },
  {
    name: 'Anika Hong',
    image: '/images/zp_logo.png',
    major: 'Electrical Engineering',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/anika-hong-350807303/',
  },
  {
    name: 'Ansh Chauhan',
    image: '/images/zp_logo.png',
    major: 'Mechanical Engineering',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/anshc05/',
  },
  {
    name: 'Anthony Nguyen',
    image: '/images/zp_logo.png',
    major: 'Biomedical Engineering',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/anthony-nguyen-0539a4317/',
  },
  {
    name: "Antonio D'Alessandro",
    image: '/images/zp_logo.png',
    major: 'Robotics',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/antonio-d-alessandro-a2b3682a9/',
  },
  {
    name: 'Anurag Krosuru',
    image: '/images/zp_logo.png',
    major: 'Computer Science',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/anuragkro/',
  },
  {
    name: 'Atalay Bartu Geyik',
    image: '/images/zp_logo.png',
    major: 'Data Science',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/bartu-geyik-a45b89220/',
  },
  {
    name: 'Audrey Nguyen',
    image: '/images/zp_logo.png',
    major: 'Mechanical Engineering',
    graduation: '2027',
    linkedin: 'https://www.linkedin.com/in/audreynguyen491/',
  },
  {
    name: 'Austyn Nguyen',
    image: '/images/zp_logo.png',
    major: 'Computer Science',
    graduation: '2025',
    linkedin: 'https://www.linkedin.com/in/austyn-an-nguyen/',
  },
  {
    name: 'Ava Im',
    image: '/images/zp_logo.png',
    major: 'Economics',
    graduation: '2026',
    linkedin: 'https://www.linkedin.com/in/ava-im/',
  },
];


const chunkArray = (arr: ActiveMember[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const rows = chunkArray(members, 5);

const ActiveMembersSection: React.FC = () => {
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
                />
                <div className={styles.overlay}>
                  <p>
                    <strong>Major:</strong> {member.major}
                  </p>
                  <p>
                    <strong>Class of:</strong> {member.graduation}
                  </p>
                </div>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.name}
              >
                {member.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActiveMembersSection;
