import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // Using CSS Modules

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    const logo = document.getElementById('keycap-logo');
    if (logo) {
      logo.classList.add(styles.clicked);
      setTimeout(() => {
        logo.classList.remove(styles.clicked);
      }, 200);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.navBar}>
      <nav className={styles.menuRight} role="navigation">
        <Link to="/" id="logo-link" onClick={handleLogoClick}>
          <img src="/images/zp_logo.png" id="keycap-logo" alt="Zeta Pi Logo" className={styles.keycapLogo} />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <ul className={styles.centerAlignC}>
            <li><Link to="/" className="hvr-sweep-to-right">home</Link></li>
            <li><Link to="/eboard" className="hvr-sweep-to-right">e-board</Link></li>
            <li><Link to="/committees" className="hvr-sweep-to-right">committees</Link></li>
            <li><Link to="/faq" className="hvr-sweep-to-right">FAQ</Link></li>
            <li><Link to="/contact" className="hvr-sweep-to-right">contact</Link></li>
            <li><Link to="/rush" className="hvr-sweep-to-right">rush</Link></li>
          </ul>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className={styles.icons} id="socialMedia">
          <a href="https://www.linkedin.com/company/91309323/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
            <i className="Li fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/zetapi.umich/" target="_blank" rel="noopener noreferrer">
            <i className="Li fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@zetapiumich" target="_blank" rel="noopener noreferrer">
            <i className="Li fab fa-tiktok"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={styles.menuToggle}>
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.menuItem} style={{ transform: isMenuOpen ? 'none' : 'translate(100%, 0)' }}>
            <li><Link to="/" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>home</Link></li>
            <li><Link to="/eboard" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>e-board</Link></li>
            <li><Link to="/committees" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>committees</Link></li>
            <li><Link to="/faq" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contact" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>contact</Link></li>
            <li><Link to="/rush" className="hvr-sweep-to-right" onClick={() => setIsMenuOpen(false)}>rush</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export { NavBar };
