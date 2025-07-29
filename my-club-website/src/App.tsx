
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages (will be created in upcoming steps)
 import HomePage from './pages/HomePage';
// import EboardPage from './pages/EboardPage';
 import CommitteesPage from './pages/CommitteesPage';
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
        {/* Uncomment and update the HomePage import at the top */}
        <Route path="/" element={<HomePage />} />
        <Route path="/eboard" element={<div>E-Board Page Content</div>} />
        <Route path="/committees" element={<CommitteesPage/>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/rush" element={<div>Rush Page Content</div>} />
            </Routes>
      {/* <Footer /> */} {/* If you create a Footer component */}
    </Router>
  );
}

export default App;
