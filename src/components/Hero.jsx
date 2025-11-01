import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Ekansh Rastogi</span>
        </h1>
        <p className="hero-subtitle">IB Senior at Seminole High School • Co-Founder of Hive Education • National Spelling Bee Finalist • Cricket Champion</p>
        <div className="hero-image-placeholder">
          <div className="placeholder-content">
            <span>📷</span>
            <p>Image Placeholder</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
