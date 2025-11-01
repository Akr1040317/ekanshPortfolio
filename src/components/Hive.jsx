import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Hive = () => {
  const metrics = [
    { number: '350+', label: 'Active Users' },
    { number: '50%', label: 'Conversion Rate' },
    { number: '2,000', label: 'Annual Participants' },
    { number: '500+', label: 'Educators Reached' }
  ];

  const achievements = [
    'Official Learning Platform of Spelling Bee Championship UAE',
    'Launched in August 2025',
    '50% free-to-paid conversion rate',
    'Pilots in multiple schools',
    'Pending county-wide evaluation (40,000 students)'
  ];

  return (
    <section id="hive" className="section hive-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Hive Education LLC</h2>
        </ScrollAnimation>
        
        <div className="hive-hero">
          <ScrollAnimation>
            <div className="hive-main-image">
              <span>🐝</span>
              <p>Hive Main Image</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="hive-intro">
              <h3>EdTech Startup Co-Founder</h3>
              <p>Teaching K-8 students to spell using pattern-recognition instead of memorization.</p>
              <div className="hive-links">
                <a href="https://www.hivespelling.com/" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                  Visit Hive →
                </a>
                <a href="https://learn.spellingbee.ae" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                  Official Platform →
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

        <div className="hive-content-grid">
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

          <ScrollAnimation>
            <div className="hive-details">
              <div className="detail-card">
                <h4>Key Achievements</h4>
                <ul className="hive-list">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-card">
                <h4>My Role</h4>
                <p>Lead marketing, content creation, and customer acquisition. Manage interns and negotiate partnerships with 500+ educators and administrators.</p>
                <p className="featured-note">Featured on cover of Stroll Heathrow</p>
              </div>

              <div className="detail-card">
                <h4>Impact</h4>
                <p>Gained essential entrepreneurship and EdTech startup experience. Created a platform that helps thousands of students learn spelling through innovative pattern-recognition methods.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hive;
