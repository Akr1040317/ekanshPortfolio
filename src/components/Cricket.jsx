import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Cricket = () => {
  const achievements = [
    { title: 'International Champion', desc: 'Sir Garfield Sobers U19 Tournament (2025)', highlight: 'First American Victory' },
    { title: 'Semi-Finalist', desc: 'Sir Garfield Sobers U19 Tournament (2024)', highlight: '' },
    { title: 'National Player', desc: 'USA Cricket U19 Conference (2024, 2025)', highlight: '' },
    { title: 'Vice-Captain', desc: 'Florida U15 Team', highlight: '' },
    { title: 'Best Bowler', desc: 'USAC U15 South Zone Regionals', highlight: '' }
  ];

  const stats = [
    { number: '158', label: 'Career Matches' },
    { number: '148', label: 'Wickets' },
    { number: '938', label: 'Runs' },
    { number: '70', label: 'FCC Matches' }
  ];

  return (
    <section id="cricket" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Cricket</h2>
        </ScrollAnimation>
        <div className="cricket-content">
          <div className="cricket-image-gallery">
            <ScrollAnimation>
              <div className="gallery-item">
                <div className="image-placeholder portrait">
                  <span>📷</span>
                  <p>Cricket Portrait Image 1</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="gallery-item">
                <div className="image-placeholder portrait">
                  <span>📷</span>
                  <p>Cricket Portrait Image 2</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="gallery-item">
                <div className="image-placeholder landscape">
                  <span>📷</span>
                  <p>Cricket Landscape Image 1</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="gallery-item">
                <div className="image-placeholder landscape">
                  <span>📷</span>
                  <p>Cricket Landscape Image 2</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="gallery-item video-gallery-item">
                <div className="image-placeholder video-placeholder">
                  <span>🎥</span>
                  <p>Cricket Video</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation>
            <div className="cricket-info">
              <div className="cricket-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="achievements-section">
                <h3>Key Achievements</h3>
                <div className="achievement-cards">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                      <div className="achievement-icon">🏆</div>
                      <div className="achievement-content">
                        <h4>{achievement.title}</h4>
                        <p>{achievement.desc}</p>
                        {achievement.highlight && (
                          <span className="highlight-badge">{achievement.highlight}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cricket-roles">
                <h3>Leadership & Community</h3>
                <div className="role-cards">
                  <div className="role-card">
                    <h4>NY Tri-State Development Captain</h4>
                    <p>Coordinate tournament logistics, uniform design, and team management for international competitions.</p>
                  </div>
                  <div className="role-card">
                    <h4>6-Year Founding Member</h4>
                    <p>Florida Panthers Youth Cricket Academy - Grew academy from 5 to 30+ members through community outreach and coaching.</p>
                  </div>
                  <div className="role-card">
                    <h4>Volunteer & Ambassador</h4>
                    <p>Support grassroots women's cricket through commentary, live streaming, and tournament organization at AWCC.</p>
                  </div>
                </div>
              </div>

              <div className="cricket-links">
                <a href="https://bit.ly/CricketStats" target="_blank" rel="noopener noreferrer" className="cta-button">
                  View Cricket Stats →
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Cricket;
