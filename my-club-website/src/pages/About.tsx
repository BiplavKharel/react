

// src/pages/HomePage/HomePage.tsx
import React from 'react'
import PillarsSection from '../components/PillarsSection/PillarsSection';
import SystemMessage from '../components/SystemMessage/SystemMessage';
const AboutPage: React.FC = () => {
  return (
    <div>
    <SystemMessage />
    <PillarsSection/>
    </div>

  );
};

export default AboutPage;