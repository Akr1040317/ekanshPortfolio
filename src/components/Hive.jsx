import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import appIcon from '../assets/app-icon-DliWh03c.jpg';
import dashboard from '../assets/dashboard.png';
import uaeSpelling from '../assets/UAESpelling.png';
import appImage from '../assets/app.png';

const Hive = () => {
  const metrics = [
    { number: '500+', label: 'Active Users' },
    { number: '50%', label: 'Conversion Rate' },
    { number: '2,000+', label: 'Annual Participants' },
    { number: '500+', label: 'Educators Reached' }
  ];

  const milestones = [
    { title: '5th Place National Spelling Bee', desc: 'Used pattern-based approach that inspired Hive', year: '2022' },
    { title: 'Research & Curriculum Design', desc: 'Spent year researching and designing curriculum based on pattern-recognition approach', year: '2023' },
    { title: 'iOS Beta Release', desc: 'Launched iOS beta version of the platform', year: '2024' },
    { title: 'UAE Partnership', desc: 'Became official learning platform for UAE National Spelling Bee', year: '2025' }
  ];

  return (
    <section id="hive" className="section hive-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Hive Education LLC</h2>
        </ScrollAnimation>
        
        <div className="hive-hero">
          <ScrollAnimation>
            <div className="hive-photo-grid">
              <div className="hive-photo-item app-icon">
                <img src={appIcon} alt="Hive App Icon" className="hive-grid-image" />
              </div>
              <div className="hive-photo-item desktop-screenshot">
                <img src={dashboard} alt="Hive Dashboard" className="hive-grid-image" />
              </div>
              <div className="hive-photo-item desktop-screenshot">
                <img src={uaeSpelling} alt="UAE Spelling Bee" className="hive-grid-image" />
              </div>
              <div className="hive-photo-item phone-app">
                <img src={appImage} alt="Hive App" className="hive-grid-image" />
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="hive-intro">
              <h3>EdTech Startup Co-Founder</h3>
              <p>Built an online learning platform teaching spelling through pattern-recognition—the same approach that took me to 5th place nationally out of 10 million participants.</p>
              <div className="hive-links">
                <a href="https://www.hivespelling.com/" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                  Visit Hive →
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="hive-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-number">{metric.number}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <div className="hive-content-wrapper">
          <ScrollAnimation>
            <div className="hive-journey-section">
              <h3>The Journey</h3>
              <div className="journey-timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="milestone-card">
                    <div className="milestone-year">{milestone.year}</div>
                    <div className="milestone-content">
                      <h4>{milestone.title}</h4>
                      <p>{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <div className="hive-info-grid">
            <ScrollAnimation>
              <div className="hive-details">
                <div className="detail-card">
                  <h4>Current Status</h4>
                  <ul className="hive-list">
                    <li>500+ active users on platform</li>
                    <li>Official learning partner for UAE Spelling Bee (2,000+ participants)</li>
                    <li>50% free-to-paid conversion rate</li>
                    <li>Launched at Goldsboro Elementary and Sanford Middle</li>
                    <li>Pending evaluation in Seminole County Public Schools (40,000 students)</li>
                  </ul>
                </div>

                <div className="detail-card">
                  <h4>My Role & Impact</h4>
                  <p>Lead marketing, content creation, and customer acquisition. Manage interns and negotiate partnerships with 500+ educators and administrators globally.</p>
                  <p>Featured on cover of Stroll Heathrow and in National Spelling Bee Magazine for combining cricket and spelling passions.</p>
                  <p className="featured-note">Currently writing "Spellbound: A Parent's Guide to Raising Young Spellers"</p>
                </div>

                <div className="detail-card">
                  <h4>The Innovation</h4>
                  <p>While others memorized thousands of words daily, I learned through patterns, rules, and linguistic roots. This unconventional approach became a scalable platform helping students learn spelling more effectively than rote memorization.</p>
                  <p>What started as a different way to study became a proven method now used by thousands.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="hive-image-gallery">
                <div className="hive-gallery-item">
                  <div className="image-placeholder">
                    <span>📷</span>
                    <p>Hive Image 1</p>
                  </div>
                </div>
                <div className="hive-gallery-item">
                  <div className="image-placeholder">
                    <span>📷</span>
                    <p>Hive Image 2</p>
                  </div>
                </div>
                <div className="hive-gallery-item">
                  <div className="image-placeholder">
                    <span>📷</span>
                    <p>Hive Image 3</p>
                  </div>
                </div>
                <div className="hive-gallery-item">
                  <div className="image-placeholder">
                    <span>📷</span>
                    <p>Hive Image 4</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hive;
