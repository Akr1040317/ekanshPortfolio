import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  const highlights = [
    { icon: '🏆', title: '5th Place', desc: 'Scripps National Spelling Bee (2022)' },
    { icon: '🎓', title: 'National Merit Scholar', desc: 'Semifinalist - PSAT 1520' },
    { icon: '🏏', title: 'International Champion', desc: 'Sir Garfield Sobers U19 (2025)' },
    { icon: '🎤', title: 'National Qualifier', desc: 'NSDA & NCFL Speech & Debate' },
    { icon: '🎾', title: 'Varsity Tennis', desc: '3-year Letterman, 2x All-County' },
    { icon: '💼', title: 'Co-Founder', desc: 'Hive Education LLC' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>
        <div className="about-content">
          <ScrollAnimation>
            <div className="about-text">
              <div className="about-intro">
                <h3>IB Senior at Seminole High School</h3>
                <p>Passionate about combining entrepreneurship, business, and technology (especially AI) to build innovative solutions in educational technology.</p>
              </div>

              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-icon">{highlight.icon}</div>
                    <div className="highlight-content">
                      <h4>{highlight.title}</h4>
                      <p>{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-approach">
                <h3>My Approach</h3>
                <p>I believe in creating opportunities for others to discover their potential. Whether it's co-founding Hive Education, organizing robotics tournaments, or captaining cricket teams, I focus on bringing people together and helping them grow.</p>
                <p>I'm a problem-solver who thrives on creative solutions when resources are limited. Innovation comes from working within constraints and thinking differently.</p>
              </div>

              <div className="about-aspirations">
                <h3>Aspirations</h3>
                <p>Looking to study in the <strong>Jerome Fisher M&T Program</strong> and the <strong>Wharton School</strong>, combining engineering and business to create meaningful impact in EdTech and social entrepreneurship.</p>
              </div>

              <div className="about-contact">
                <a href="mailto:ekanshrastogi08@outlook.com" className="cta-button">
                  Get in Touch →
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="about-image-placeholder">
              <span>👤</span>
              <p>About Me Image</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
