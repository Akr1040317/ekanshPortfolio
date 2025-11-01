import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Hive = () => {
  return (
    <section id="hive" className="section hive-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Hive</h2>
        </ScrollAnimation>
        <div className="hive-content">
          <ScrollAnimation>
            <div className="hive-image-placeholder">
              <span>🐝</span>
              <p>Hive Image/Video Placeholder</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="hive-description">
              <h3>Work at Hive</h3>
              <p>Details about work and experiences at Hive will be added here...</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hive;

