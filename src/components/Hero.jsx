import React from 'react';
import resumePdf from '../assets/Ekansh_Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Ekansh Rastogi</span>
        </h1>
        <p className="hero-tagline">Scripps National Spelling Bee Finalist · Co-Founder, Hive Education LLC · IB Diploma Student</p>
        <p className="hero-subtitle">Engineering • Entrepreneurship • Education Technology</p>
        <div className="hive-links">
          <a href={resumePdf} className="cta-button primary" download>
            Download Resume
          </a>
          <a href="#projects" className="cta-button secondary">
            View Projects
          </a>
          <a 
            href="https://www.linkedin.com/in/ekansh-rastogi-378b41315/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button secondary"
          >
            LinkedIn
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
