import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages (will be created in upcoming steps)
// import HomePage from './pages/HomePage';
// import EboardPage from './pages/EboardPage';
// import CommitteesPage from './pages/CommitteesPage';
// import FAQPage from './pages/FAQPage';
// import ContactPage from './pages/ContactPage';
// import RushPage from './pages/RushPage';

import { NavBar } from './components/NavBar/NavBar'; // Always present
// import { Footer } from './components/Footer/Footer'; // If you create a Footer component

function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar can be outside Routes if it's always present */}
      <Routes>
        {/* Placeholder Routes - you'll fill these in with actual page components */}
        <Route path="./HomePage.tsx" element={<div>Welcome to Zeta Pi! (Homepage content will go here)</div>} />
        <Route path="/eboard" element={<div>E-Board Page Content</div>} />
        <Route path="/committees" element={<div>Committees Page Content</div>} />
        <Route path="/faq" element={<div>FAQ Page Content</div>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/rush" element={<div>Rush Page Content</div>} />
      </Routes>
      {/* <Footer /> */} {/* If you create a Footer component */}
    </Router>
  );
}

export default App;
