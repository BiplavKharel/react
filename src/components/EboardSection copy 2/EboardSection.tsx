import React from 'react';
import styles from './EboardSection.module.css';
import EboardMember from './EboardMember';

const eboard = [
  {
    image: '/images/headshots/grace2.jpg',
    name: 'Grace Chen',
    position: 'President',
    major: 'Business Administration',
    graduation: '2026',
  },
  {
    image: '/images/headshots/olivia2.jpg',
    name: 'Olivia Pinto',
    position: 'Vice President',
    major: 'Political Science',
    graduation: '2025',
  },
  {
    image: '/images/headshots/sam.jpg',
    name: 'Sam Marquez',
    position: 'Director of DEI',
    major: 'Sociology',
    graduation: '2026',
  },
  {
    image: '/images/headshots/abby.jpg',
    name: 'Abby Moomaw',
    position: 'Co-Head of Recruitment & Membership',
    major: 'Psychology',
    graduation: '2025',
  },
  {
    image: '/images/headshots/nicky.jpg',
    name: 'Nicky Nguyen',
    position: 'Co-Head of Recruitment & Membership',
    major: 'Communications',
    graduation: '2025',
  },
  {
    image: '/images/headshots/eshaan.jpg',
    name: 'Eshaan Nair',
    position: 'Co-Head of Social',
    major: 'Economics',
    graduation: '2026',
  },
  {
    image: '/images/headshots/harry.jpg',
    name: 'Anthony Nguyen',
    position: 'Co-Head of Social',
    major: 'Environmental Studies',
    graduation: '2026',
  },
  {
    image: '/images/headshots/samira.jpg',
    name: 'Samira Shalal',
    position: 'Head of Marketing',
    major: 'Marketing',
    graduation: '2025',
  },
  {
    image: '/images/headshots/jeff.jpg',
    name: 'Jeff Zheng',
    position: 'Head of Professional Development',
    major: 'Computer Science',
    graduation: '2025',
  },
  {
    image: '/images/headshots/biplav2.jpg',
    name: 'Biplav Kharel',
    position: 'Head of Tech',
    major: 'Data Science',
    graduation: '2026',
  },
  {
    image: '/images/headshots/ky.jpg',
    name: 'Ky Park',
    position: 'Head of Fundraising',
    major: 'Finance',
    graduation: '2026',
  }
];



const rows = [
  eboard.slice(0, 3),  // 3 members
  eboard.slice(3, 7),  // 4 members
  eboard.slice(7, 11), // 4 members
];

const EboardSection: React.FC = () => {
  return (
    <div className={styles.gridWrapper}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.gridRow}>
          {row.map((member, idx) => (
            <div
              key={idx}
              className={styles.fadeIn}
              style={{ animationDelay: `${(rowIndex * 4 + idx) * 0.05}s` }}
            >
              <EboardMember {...member} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EboardSection;