import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import appIcon from '../assets/app-icon-DliWh03c.jpg';

const Hive = () => {
  const metrics = [
    { number: '500+', label: 'Active Users' },
    { number: '50%', label: 'Conversion Rate' },
    { number: '2,000+', label: 'Annual Participants' },
    { number: '750+', label: 'Educators Reached' }
  ];

  const milestones = [
    { title: '5th Place National Spelling Bee', desc: 'Pattern-based approach that inspired Hive', year: '2022' },
    { title: 'Research & Curriculum Design', desc: 'Year researching and designing curriculum based on pattern-recognition approach', year: '2023' },
    { title: 'iOS Beta Release', desc: 'Launched iOS beta version of the platform', year: '2024' },
    { title: 'UAE Partnership', desc: 'Became official learning platform for UAE National Spelling Bee', year: '2025' }
  ];

  const statusItems = [
    '500+ active users on platform',
    (
      <>
        Launched platform for The Spelling Bee Championship UAE (
        <a href="https://learn.spellingbee.ae" target="_blank" rel="noopener noreferrer">
          Hive PrepCenter
        </a>
        ); negotiated agreements; hosted webinar with hundreds of parents/students (
        <a
          href="https://www.youtube.com/live/GnXv8j7eoQI?si=z06pB_ltEXLPDkuI&amp;t=230"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
        ). 200 users in week one; 1,800+ projected by early 2026; 50% free-to-paid conversion.
      </>
    ),
    'Inspired by UAE success, launching similar product for US classrooms (district recommendation pending).',
    'Piloted at Goldsboro Elementary and Sanford Middle.',
    'Under evaluation in Seminole County Public Schools (40,000 students across 50+ schools).'
  ];

  const roleItems = [
    'Lead marketing, content creation, and customer acquisition strategy.',
    'Manage interns and coordinate with educators and administrators globally.',
    'Featured on cover of Stroll Heathrow for bridging cricket and spelling passions.',
    (
      <>
        <strong>In the media:</strong>
        <ul className="hive-list media-list">
          <li>
            <a href="https://www.youtube.com/watch?v=4hxN1-z-aco" target="_blank" rel="noopener noreferrer">
              Hive PrepCenter Promo
            </a>
          </li>
          <li>
            <a href="https://issuu.com/cincinnatimagazine/docs/scripps_national_spelling_bee_2022/96" target="_blank" rel="noopener noreferrer">
              Scripps National Spelling Bee Magazine Feature
            </a>
          </li>
          <li>
            <a href="https://spellingbee.com/blog/2022-finalist-speller-65-ekansh-rastogi" target="_blank" rel="noopener noreferrer">
              Spelling Bee Blog Profile
            </a>
          </li>
          <li>
            <a href="https://www.fox35orlando.com/video/1079586" target="_blank" rel="noopener noreferrer">
              Fox 35 Orlando Interview
            </a>
          </li>
        </ul>
      </>
    )
  ];

  const innovationParagraphs = [
    'Hive shifts spelling instruction away from brute memorization toward pattern recognition, linguistic roots, and rule discovery.',
    'The curriculum distills insights from 7+ years of coaching and competition into adaptive lessons, quizzes, and teacher-ready resources.'
  ];

  const overviewCards = [
    { title: 'Current Status', type: 'list', items: statusItems },
    { title: 'Role & Impact', type: 'list', items: roleItems },
    { title: 'The Innovation', type: 'text', paragraphs: innovationParagraphs }
  ];

  const mediaTiles = [
    { icon: '🌍', title: 'UAE PrepCenter Rollout' },
    { icon: '🏫', title: 'U.S. Classroom Pilot' }
  ];

  return (
    <section id="hive" className="section hive-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Hive Education LLC</h2>
        </ScrollAnimation>
        
        <div className="hive-hero-simple">
          <ScrollAnimation>
            <div className="hive-hero-copy">
              <h3>EdTech Startup Co-Founder</h3>
              <p>
                Founded Hive to teach spelling through pattern recognition instead of rote memorization.
                The platform bundles lessons, quizzes, and teacher resources built from years of coaching and
                competition insights.
              </p>
              <div className="hive-links">
                <a href="https://www.hivespelling.com/" target="_blank" rel="noopener noreferrer" className="cta-button primary prepcenter">
                  <span className="prepcenter-title">Visit Hive →</span>
                  <span className="prepcenter-subtitle">hivespelling.com</span>
                </a>
                <a href="https://learn.spellingbee.ae" target="_blank" rel="noopener noreferrer" className="cta-button prepcenter">
                  <span className="prepcenter-title">Visit Hive PrepCenter →</span>
                  <span className="prepcenter-subtitle">built for UAE Spelling Bee Championship</span>
                </a>
                <a
                  href="https://apps.apple.com/us/app/hive-spelling-bee-prep-app/id6479415050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                >
                  Download Hive App
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="hive-hero-visual">
              <div className="hive-hero-card app-card">
                <img src={appIcon} alt="Hive app icon" />
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

        <div className="hive-overview">
          <div className="hive-overview-grid">
            {overviewCards.map((card, index) => (
              <ScrollAnimation key={card.title}>
                <div className="hive-overview-card">
                  <h4>{card.title}</h4>
                  {card.type === 'list' && (
                    <ul>
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {card.type === 'text' && (
                    card.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="hive-media-row">
              {mediaTiles.map((tile) => (
                <div key={tile.title} className="hive-media-tile">
                  <span role="img" aria-hidden="true">{tile.icon}</span>
                  <p>{tile.title}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <div className="hive-journey-section">
            <h3>Milestones</h3>
            <div className="journey-timeline">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className="milestone-card">
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
      </div>
    </section>
  );
};

export default Hive;
