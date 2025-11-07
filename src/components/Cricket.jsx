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
    { number: '159', label: 'Career Matches' },
    { number: '150', label: 'Wickets' },
    { number: '947', label: 'Runs' },
    { number: '71', label: 'FCC Matches' }
  ];

  const leadershipMoments = [
    {
      title: 'Historic Victory as Captain',
      desc: 'Led US-based team as captain to first-ever American victory at the 2025 Sir Garfield Sobers International Under-19 Cricket Tournament. Effectively led a team of strangers through team-building exercises and collaborative strategy.',
      highlight: '2025 Sir Garfield Sobers Tournament'
    },
    {
      title: 'Fostering Team Culture',
      desc: 'After an early loss, rebuilt culture by organizing team dinners and creating spaces for each player to share insights from personal experience, voice concerns over game strategy, and provide suggestions from their perspective.',
      highlight: 'Collaborative Leadership'
    },
    {
      title: 'Strategic Delegation',
      desc: 'Emphasized collaboration over control in leadership style by delegating key responsibilities to certain players. Empowered teammates to employ their area-specific expertise and make decisions.',
      highlight: 'Team Empowerment'
    }
  ];

  const roles = [
    {
      title: 'NY Tri-State Development Captain',
      desc: 'Coordinate tournament logistics, flight plans, uniform design, and team management for international tournaments. Handle on- and off-field matters, resolve conflicts, make crucial strategic decisions, and coordinate between players, coaching staff, and management group.'
    },
    {
      title: '6-Year Founding Member, Florida Panthers Youth Cricket Academy (FPYCA)',
      desc: 'Grew academy to 30+ members through community outreach, coaching clinics, and grassroots campaigns at community events. Designed marketing materials such as flyers, pamphlets, and posters and placed them at community hotspots to drive academy enrollment.'
    },
    {
      title: 'FPYCA, American Women Cricket Club (AWCC)',
      desc: 'Support grassroots women\'s cricket through tournament organization, live commentary, streaming, match scoring at AWCC-affiliated tournaments.'
    }
  ];

  return (
    <section id="cricket" className="section">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title">Cricket</h2>
        </ScrollAnimation>
        
        <div className="cricket-stats-section-with-image">
          <ScrollAnimation animation="fade-right">
            <div className="cricket-image-single">
              <div className="image-placeholder portrait">
                <span>📷</span>
                <p>Cricket Portrait Image 1</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left">
            <div className="cricket-stats-section">
              <h3 className="subsection-title">Statistics</h3>
              <div className="cricket-stats-grid">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 0.08}>
                    <div className="stat-card">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="cricket-links">
                <a href="https://cricclubs.com/FloridaCricketConference/viewPlayer.do?playerId=4376944&clubId=5413" target="_blank" rel="noopener noreferrer" className="cta-button">
                  View Cricket Stats →
                </a>
              </div>
              <div className="cricket-media-section">
                <h4>In the Media</h4>
                <ul className="hive-list">
                  <li>In Prost International article, called "star of that day and every other victory" (<a href="https://prostinternational.com/2025/07/28/tri-state-cricketers-on-winning-barbados-tour" target="_blank" rel="noopener noreferrer">Link</a>)</li>
                  <li><a href="https://www.youtube.com/live/yEs7_6pQ2V0?t=750s" target="_blank" rel="noopener noreferrer">Sir Garfield Sobers Tournament Finals broadcast</a></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="cricket-achievements-section-with-image">
          <ScrollAnimation animation="fade-up">
            <div className="container">
              <h3 className="subsection-title">Key Achievements</h3>
              <div className="achievement-cards-grid">
                {achievements.map((achievement, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 0.08}>
                    <div className="achievement-card-compact">
                      <div className="achievement-icon-compact">{achievement.icon}</div>
                      <div className="achievement-content-compact">
                        <h4>{achievement.title}</h4>
                        <p>{achievement.desc}</p>
                        {achievement.highlight && (
                          <span className="highlight-badge">{achievement.highlight}</span>
                        )}
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left">
            <div className="cricket-image-single">
              <div className="image-placeholder landscape">
                <span>📷</span>
                <p>Cricket Landscape Image 1</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="cricket-leadership-section-with-image">
          <ScrollAnimation animation="fade-right">
            <div className="cricket-image-single">
              <div className="image-placeholder portrait">
                <span>📷</span>
                <p>Cricket Portrait Image 2</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left">
            <div className="container">
              <h3 className="subsection-title">Leadership Moments</h3>
              <div className="leadership-cards-grid">
                {leadershipMoments.map((moment, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 0.08}>
                    <div className="leadership-card-compact">
                      <div className="leadership-header-compact">
                        <h4>{moment.title}</h4>
                        <span className="leadership-badge">{moment.highlight}</span>
                      </div>
                      <p>{moment.desc}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="cricket-roles-section-with-image">
          <ScrollAnimation animation="fade-up">
            <div className="container">
              <h3 className="subsection-title">Current Roles</h3>
              <div className="role-cards-grid">
                {roles.map((role, index) => (
                  <ScrollAnimation key={role.title} animation="fade-up" delay={index * 0.08}>
                    <div className="role-card-compact">
                      <h4>{role.title}</h4>
                      <p>{role.desc}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left">
            <div className="cricket-image-single">
              <div className="image-placeholder landscape">
                <span>📷</span>
                <p>Cricket Landscape Image 2</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default Cricket;
