

// src/pages/HomePage/HomePage.tsx
import React from 'react'
import AboutSection from '../components/AboutSection/AboutSection';
import PillarsSection from '../components/PillarsSection/PillarsSection';
import SystemMessage from '../components/SystemMessage/SystemMessage';
const HomePage: React.FC = () => {
  return (
    <div>
    <AboutSection />
    <SystemMessage />
    <PillarsSection/>
    </div>

  );
};

export default HomePage;