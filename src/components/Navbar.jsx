import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#hive', text: 'Hive' },
    { href: '#cricket', text: 'Cricket' },
    { href: '#leadership', text: 'Leadership' },
    { href: '#projects', text: 'Projects' },
    { href: '#interests', text: 'Activities' },
    { href: '#honors', text: 'Honors' },
    { href: '#about', text: 'About' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mounted ? 'visible' : ''}`.trim()}>
      <div className="nav-container">
        <div className="nav-logo">EKANSH RASTOGI</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

