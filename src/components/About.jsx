import React from 'react';
import portrait from '../assets/ekanshFinal.png';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  const highlights = [
    { icon: '🏆', title: '5th Place', desc: 'Scripps National Spelling Bee (2022)', subtext: 'Out of 10M+ participants' },
    { icon: '🏏', title: 'International Champion', desc: 'Sir Garfield Sobers U19 (2025)', subtext: 'Historic first American victory' },
    { icon: '🎤', title: 'National Qualifier', desc: 'NSDA & NCFL Speech & Debate', subtext: 'Co-Captain, tripled membership' },
    { icon: '💼', title: 'Co-Founder', desc: 'Hive Education LLC', subtext: '500+ users, UAE official platform' }
  ];

  const certifications = [
    { name: 'Entrepreneurship and Small Business' },
    { name: 'Information Technology Specialist - Java' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>
        <div className="about-content">
          <ScrollAnimation animation="fade-right">
            <div className="about-text">
              <div className="about-intro">
                <h3>IB Senior at Seminole High School</h3>
                <p>
                  Words taught me to notice details. Training for the Scripps National Spelling Bee wasn’t just
                  about memorizing roots and rules; it was an early lesson in curiosity, discipline, and pattern
                  recognition. I learned to ask why a word looks the way it does, where it came from, and how
                  meaning evolves. That same instinct drives my work today—whether I’m building a product,
                  refining a process, or collaborating with a team.
                </p>
                <p>
                  As Co‑Founder of Hive Education LLC, I’m channeling that curiosity into entrepreneurship. I love
                  turning ideas into useful tools, listening to learners, and shipping things that make education
                  more accessible. The IB Diploma program sharpened my ability to synthesize across disciplines—
                  engineering mindsets, human stories, and business constraints. I’m excited to keep building at the
                  intersection of learning and technology, where thoughtful design can unlock potential for others.
                </p>
              </div>

              <div className="about-vision">
                <h3>Looking Forward</h3>
                <p>I'm excited about merging engineering with business to build EdTech solutions that make learning more accessible and effective.</p>
                <p>My goal is to create platforms that help others discover their potential, whether through innovative learning methods, leadership opportunities, or community-building initiatives.</p>
              </div>

              <div className="certifications-section">
                <h3>Career/Industry Certifications</h3>
                <ul className="certifications-list">
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <ScrollAnimation animation="fade-up" delay={index * 0.05}>
                        {cert.name}
                      </ScrollAnimation>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left">
            <div className="about-profile">
              <div className="about-image-wrapper">
                <img src={portrait} alt="Ekansh Rastogi professional portrait" />
              </div>
              <div className="about-profile-card">
                <h4>Highlights</h4>
                <div className="highlights-grid profile">
                  {highlights.map((highlight, index) => (
                    <ScrollAnimation key={highlight.title} animation="fade-up" delay={index * 0.08}>
                      <div className="highlight-card compact">
                        <div className="highlight-icon">{highlight.icon}</div>
                        <div className="highlight-content">
                          <h4>{highlight.title}</h4>
                          <p>{highlight.desc}</p>
                          <span className="highlight-subtext">{highlight.subtext}</span>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
