import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import resumePdf from '../assets/EkanshRastogi.pdf';
import heroImage from '../assets/ekansh-scripps.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <ScrollAnimation animation="fade-up">
            <h1 className="hero-title">
              <span className="gradient-text">Ekansh Rastogi</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.08}>
            <p className="hero-tagline">
              Scripps National Spelling Bee Finalist · Co-Founder of Hive Education · IB Diploma Student
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.16}>
            <p className="hero-subtitle">Business • Entrepreneurship • EdTech</p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.24}>
            <div className="hive-links">
              <a href={resumePdf} className="cta-button primary" download>
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ekansh-rastogi-378b41315/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button linkedin"
              >
                <span className="cta-icon">in</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animation="fade-left" delay={0.12}>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img src={heroImage} alt="Ekansh Rastogi" className="hero-image" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
