import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">What You Should Know About Me</h2>
        </ScrollAnimation>
        <div className="about-content">
          <ScrollAnimation>
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>I'm an IB Senior at Seminole High School in Sanford, FL, passionate about combining entrepreneurship, business, and technology such as AI to build innovative solutions, especially in educational technology. I'm interested in startup creation, social entrepreneurship, EdTech ventures, and leadership.</p>
              
              <h4>Key Achievements</h4>
              <ul className="achievement-list">
                <li><strong>5th Place, Scripps National Spelling Bee (2022)</strong> - Featured in National Spelling Bee coverage</li>
                <li><strong>National Merit Scholar Semifinalist</strong> - PSAT 1520 (2025)</li>
                <li><strong>NHS Inductee</strong></li>
                <li><strong>Sir Garfield Sobers International U19 Cricket Tournament Champion</strong> as Captain (2025) - First victory by an American team</li>
                <li><strong>NSDA National Speech & Debate Tournament Qualifier</strong> (2024 as alternate, 2025) & <strong>NCFL Nationals Qualifier</strong> (2023, 2024 as alternate)</li>
                <li><strong>3-year Varsity Tennis Letterman, 2x All-County Athlete</strong></li>
                <li><strong>Best Bowler</strong> - Series vs. Jamaica u15 National Team (2023) & MLC Jr. Championship Atlantic Conference (2022), All-Conference Dream Team (2022)</li>
              </ul>
              
              <h4>My Approach to Leadership</h4>
              <p>I believe that leadership isn't just about achieving personal success—it's about creating opportunities for others to discover their potential. Whether it's co-founding Hive Education, organizing a robotics tournament, captaining a cricket team, or redesigning speech & debate club formats, I find fulfillment in bringing people together and helping them grow.</p>
              
              <p>I'm a problem-solver who isn't afraid to get creative when resources are limited. Through founding Markham Mechatronic Madness and growing the Florida Panthers Youth Cricket Academy from 5 to 30+ members, I've learned that innovation often comes from working within constraints and thinking creatively.</p>

              <h3>My Aspirations</h3>
              <p>I'm looking to study in the <strong>Jerome Fisher M&T Program</strong> and the <strong>Wharton School</strong>, where I can fuse engineering and business to inspire others. My goal is to combine my passion for technology, entrepreneurship, and education to create solutions that extend beyond myself.</p>
              <p>I'm excited about the possibility of merging technology, business, and human connection to make a meaningful impact in EdTech and social entrepreneurship. Long after the robots power down or the game ends, I want the communities I've helped build and the platforms I've created to continue thriving—creating a lasting legacy of empowerment and growth.</p>
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
