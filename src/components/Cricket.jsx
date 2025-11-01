import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Cricket = () => {
  const achievements = [
    { title: 'International Champion', desc: 'Sir Garfield Sobers U19 Tournament (2025)', highlight: 'Historic First American Victory', icon: '🏆' },
    { title: 'Best Bowler', desc: 'vs. Jamaica National U15 Team (2023)', highlight: '', icon: '🎯' },
    { title: 'Semi-Finalist', desc: 'Sir Garfield Sobers U19 Tournament (2024)', highlight: '', icon: '🥈' },
    { title: 'National Player', desc: 'USA Cricket U19 Conference (2024, 2025)', highlight: 'NC-FL Region', icon: '⭐' },
    { title: 'Vice-Captain', desc: 'Florida U15 Team', highlight: 'Best Bowler Award', icon: '👔' }
  ];

  const stats = [
    { number: '158', label: 'Career Matches' },
    { number: '148', label: 'Wickets' },
    { number: '938', label: 'Runs' },
    { number: '70', label: 'FCC Matches' }
  ];

  const leadershipMoments = [
    {
      title: 'Leading Strangers to Victory',
      desc: 'Captained a team of players from different cities—Jayden from Guyana, Aarav from Denver, Sachin from New York. Transformed strangers into champions through collaboration and delegation.',
      highlight: '2025 Barbados Tournament'
    },
    {
      title: 'Fostering Team Culture',
      desc: 'After an early loss, organized team dinners that became learning sessions. Created space for each player to share insights—batting tips from the Caribbean, strategies from Texas, observations from all corners.',
      highlight: 'Collaborative Leadership'
    },
    {
      title: 'Strategic Delegation',
      desc: 'Empowered teammates by delegating key responsibilities: Shiloh maintained accountability, Ajay refined batting strategies, Dave led spin bowlers. Each game produced an unlikely hero.',
      highlight: 'Team Empowerment'
    }
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
                      <div className="achievement-icon">{achievement.icon}</div>
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

              <div className="leadership-section">
                <h3>Leadership Moments</h3>
                <div className="leadership-cards">
                  {leadershipMoments.map((moment, index) => (
                    <div key={index} className="leadership-card">
                      <div className="leadership-header">
                        <h4>{moment.title}</h4>
                        <span className="leadership-badge">{moment.highlight}</span>
                      </div>
                      <p>{moment.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cricket-roles">
                <h3>Current Roles</h3>
                <div className="role-cards">
                  <div className="role-card">
                    <h4>NY Tri-State Development Captain</h4>
                    <p>Coordinate tournament logistics, flight plans, uniform design, and team management for international competitions. Training under Colin Croft, all-time great fast bowler.</p>
                  </div>
                  <div className="role-card">
                    <h4>6-Year Founding Member</h4>
                    <p>Florida Panthers Youth Cricket Academy - Grew academy from 5 to 30+ members through community outreach, coaching demos, and innovative marketing.</p>
                  </div>
                  <div className="role-card">
                    <h4>Volunteer & Ambassador</h4>
                    <p>Support grassroots women's cricket through live commentary, streaming, match scoring, and tournament organization at American Women Cricket Club.</p>
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
