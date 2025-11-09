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
                <h3>Competitor. Creator. Innovator.</h3>
                <p>
                  I am a senior studying in the IB Program, a 5th-place Finalist at the Scripps National Spelling Bee, the co-founder of Hive Education, and a national-level youth cricketer.
                </p>
                <p>
                  Competing in spelling bees throughout the country, I learned not to memorize words but to understand them and explore the why and how behind their spelling. From my research into the impact of the 1066 invasion on English legal vocabulary to running my EdTech startup Hive, I strive to embody that mindset of questioning and optimizing everything. As Co-Founder of Hive Education LLC., I’m working to change the way students approach learning to spell and develop critical grammar and vocabulary skills, while channeling my passion and curiosity into entrepreneurship. Through playing cricket, I’ve developed the discipline, determination, and critical thinking needed to excel in any endeavor. The IB program has strengthened my ability to combine disciplines to reach creative solutions and focus on listening and learning from others to lead effective and accessible educational technology ventures.
                </p>
              </div>

              <div className="about-vision">
                <h3>Looking Forward</h3>
                <p>
                  I’m excited to continue building new startups at the intersection of education and technology, where thoughtful design can unlock potential for students and educators everywhere.
                </p>
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
                <img src={portrait} alt="Ekansh Rastogi revisiting the Scripps National Spelling Bee stage in 2025" />
              </div>
              <p className="about-image-caption">
                Revisiting the Scripps National Spelling Bee stage in 2025 and creating promotional content for Hive.
              </p>
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
