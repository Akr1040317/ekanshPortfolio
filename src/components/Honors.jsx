import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Honors = () => {
  const honors = [
    {
      title: 'Scripps National Spelling Bee',
      achievement: '5th Place',
      level: 'National',
      year: '2022',
      details: 'Out of 10M+ participants',
      icon: '🏆'
    },
    {
      title: 'National Merit Scholar',
      achievement: 'Semifinalist',
      level: 'National',
      year: '2025',
      details: 'PSAT 1520, Applying for Finalist',
      icon: '🎓'
    },
    {
      title: 'Sir Garfield Sobers International Cricket',
      achievement: 'Champion as Captain',
      level: 'International',
      year: '2025',
      details: 'First victory by American team',
      icon: '🏏'
    },
    {
      title: 'NSDA National Tournament',
      achievement: 'Qualifier',
      level: 'National',
      year: '2024, 2025',
      details: 'Speech & Debate',
      icon: '🎤'
    },
    {
      title: 'NCFL Nationals',
      achievement: 'Qualifier & Regional Champion',
      level: 'National',
      year: '2023, 2024',
      details: 'Speech & Debate',
      icon: '🎤'
    },
    {
      title: 'PrincetonMUNC',
      achievement: 'Outstanding Delegate',
      level: 'National',
      year: '2025',
      details: 'Selected from 128 delegates to represent school',
      icon: '🌍'
    },
    {
      title: 'SeminoleMUN',
      achievement: 'Outstanding Delegate',
      level: 'School',
      year: '2025',
      details: '',
      icon: '🌍'
    },
    {
      title: 'National Honor Society',
      achievement: 'Inductee',
      level: 'School',
      year: '',
      details: '',
      icon: '📚'
    },
    {
      title: "Principal's Honor Roll",
      achievement: 'Academic Achievement',
      level: 'School',
      year: '',
      details: '',
      icon: '⭐'
    },
    {
      title: 'All-County Athlete',
      achievement: 'Academic Achievement Award',
      level: 'County',
      year: '2024, 2025',
      details: '2x Winner',
      icon: '🎾'
    },
    {
      title: 'USA Cricket U15 South Zone',
      achievement: 'Best Bowler',
      level: 'Regional',
      year: '2022',
      details: 'Vice-Captain Florida U15',
      icon: '🏆'
    },
    {
      title: 'MLC Jr. Championship',
      achievement: 'All-Conference Dream Team',
      level: 'National',
      year: '2022',
      details: 'Best Bowler Atlantic Conference',
      icon: '⭐'
    }
  ];

  return (
    <section id="honors" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Honors & Achievements</h2>
        </ScrollAnimation>
        <div className="honors-grid">
          {honors.map((honor, index) => (
            <ScrollAnimation key={index}>
              <div className="honor-card">
                <div className="honor-icon">{honor.icon}</div>
                <div className="honor-content">
                  <div className="honor-header">
                    <h3>{honor.title}</h3>
                    <span className={`honor-level ${honor.level.toLowerCase()}`}>{honor.level}</span>
                  </div>
                  <div className="honor-achievement">{honor.achievement}</div>
                  {honor.year && <div className="honor-year">{honor.year}</div>}
                  {honor.details && <div className="honor-details">{honor.details}</div>}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;

