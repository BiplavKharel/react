import React from 'react';
import styles from './EboardSection.module.css';
import EboardMember from './EboardMember';

const eboard = [
  {
    image: '/images/headshots/grace2.jpg',
    name: 'Grace Chen',
    position: 'President',
    major: 'Business Administration',
    interestText: 'Design, leadership, volleyball'
  },
  {
    image: '/images/headshots/olivia2.jpg',
    name: 'Olivia Pinto',
    position: 'Vice President',
    major: 'Political Science',
    interestText: 'Debate, advocacy, dancing'
  },
  {
    image: '/images/headshots/samira.jpg',
    name: 'Samira Shalal',
    position: 'Head of Marketing',
    major: 'Marketing',
    interestText: 'Design, fashion, thrifting'
  },
  {
    image: '/images/headshots/jeff.jpg',
    name: 'Jeff Zheng',
    position: 'Head of Professional Development',
    major: 'Computer Science',
    interestText: 'Startups, puzzles, running'
  },
  {
    image: '/images/headshots/biplav2.jpg',
    name: 'Biplav Kharel',
    position: 'Head of Tech',
    major: 'Data Science',
    interestText: 'Taekwondo, soccer, food'
  },
  {
    image: '/images/headshots/ky.jpg',
    name: 'Ky Park',
    position: 'Head of Fundraising',
    major: 'Finance',
    interestText: 'Investing, basketball, dogs'
  }
];

const rows = [
  eboard.slice(0, 3),
  eboard.slice(3, 6)
];

const EboardSection: React.FC = () => {
  return (
    <div className={styles.gridWrapper}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.gridRow}>
          {row.map((member, idx) => (
            <div key={idx} className={styles.fadeIn}>
              <EboardMember {...member} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EboardSection;

