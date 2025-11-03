import React from 'react';
import resumePdf from '../assets/Ekansh_Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Scripps National Spelling Bee Finalist · Co-Founder, Hive EdTech · IB Diploma Student</h1>
        <p className="hero-subtitle">Engineering • Entrepreneurship • Education Technology</p>
        <div className="hive-links">
          <a href={resumePdf} className="cta-button primary" download>
            Download Resume
          </a>
          <a href="#projects" className="cta-button secondary">
            View Projects
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
