import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  const highlights = [
    { icon: '🏆', title: '5th Place', desc: 'Scripps National Spelling Bee (2022)', subtext: 'Out of 10M+ participants' },
    { icon: '🎓', title: 'Perfect ACT', desc: '36 Composite Score', subtext: 'All sections: 36' },
    { icon: '🏏', title: 'International Champion', desc: 'Sir Garfield Sobers U19 (2025)', subtext: 'Historic first American victory' },
    { icon: '📊', title: 'Academic Excellence', desc: 'Rank 13/888, GPA 4.735', subtext: 'Weighted GPA' },
    { icon: '🎤', title: 'National Qualifier', desc: 'NSDA & NCFL Speech & Debate', subtext: 'Co-Captain, tripled membership' },
    { icon: '💼', title: 'Co-Founder', desc: 'Hive Education LLC', subtext: '500+ users, UAE official platform' }
  ];

  const apScores = [
    { subject: 'Computer Science A', score: '5' },
    { subject: 'English Language', score: '5' },
    { subject: 'Physics 1', score: '5' },
    { subject: 'World History', score: '5' },
    { subject: 'Calculus BC', score: '5' },
    { subject: 'Statistics', score: '5' },
    { subject: 'Physics 2', score: '5' },
    { subject: 'English Literature', score: '5' }
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
                <p>Passionate about combining entrepreneurship, technology, and innovation to create solutions in educational technology. Currently ranked 13th out of 888 students with a 4.735 weighted GPA.</p>
              </div>

              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-icon">{highlight.icon}</div>
                    <div className="highlight-content">
                      <h4>{highlight.title}</h4>
                      <p>{highlight.desc}</p>
                      <span className="highlight-subtext">{highlight.subtext}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="testing-section">
                <h3>Testing & Academics</h3>
                <div className="testing-grid">
                  <div className="test-card major">
                    <div className="test-score">36</div>
                    <div className="test-label">ACT Composite</div>
                    <div className="test-breakdown">Math 36 • Science 36 • English 36 • Reading 36</div>
                  </div>
                  <div className="test-card">
                    <div className="test-score">1520</div>
                    <div className="test-label">PSAT</div>
                    <div className="test-breakdown">National Merit Semifinalist</div>
                  </div>
                  <div className="test-card">
                    <div className="test-score">8</div>
                    <div className="test-label">AP Exams</div>
                    <div className="test-breakdown">All scores: 5</div>
                  </div>
                </div>
                <div className="ap-scores">
                  <h4>AP Scores (All 5s)</h4>
                  <div className="ap-grid">
                    {apScores.map((ap, index) => (
                      <div key={index} className="ap-item">
                        <span className="ap-subject">{ap.subject}</span>
                        <span className="ap-score">{ap.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-leadership">
                <h3>Leadership Philosophy</h3>
                <p>I believe leadership isn't about control—it's about collaboration and empowering others. When I captained the US team at the Sir Garfield Sobers International Tournament, I faced my biggest challenge: leading a group of strangers to victory.</p>
                <p>After an early loss, I organized team dinners and created space for each player to share insights. I delegated responsibilities—Shiloh kept players accountable, Ajay refined batting strategies, Dave led spin bowlers. Each game produced an unlikely hero because I focused on lifting everyone up, not carrying the burden alone.</p>
                <p>This same approach helped me redesign Speech & Debate club meetings, tripling active membership. As co-captain, I provided personalized mentorship that doubled retention rates. Leadership, to me, means creating platforms where others can excel.</p>
              </div>

              <div className="about-approach">
                <h3>Innovation Through Unconventional Paths</h3>
                <p>I started studying for the Spelling Bee in 5th grade, learning through patterns and roots while others memorized thousands of words. This unconventional approach took me to 5th place nationally—out of 10 million participants.</p>
                <p>I realized my pattern-based method had value beyond my own success. So I built Hive, an EdTech platform that teaches spelling through pattern-recognition instead of rote memorization. What began as a different approach to spelling became a platform serving 500+ users and the official learning partner for the UAE's national spelling bee.</p>
                <p>Unconventional paths aren't misguided—they guide us in new directions.</p>
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
