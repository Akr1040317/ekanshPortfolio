import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Hive = () => {
  return (
    <section id="hive" className="section hive-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Hive Education LLC</h2>
        </ScrollAnimation>
        <div className="hive-content">
          <ScrollAnimation>
            <div className="hive-image-placeholder">
              <span>🐝</span>
              <p>Hive Image/Video Placeholder</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="hive-description">
              <h3>Co-Founder & Co-Creator</h3>
              <p><strong>Hive Education LLC</strong> (<a href="https://www.hivespelling.com/" target="_blank" rel="noopener noreferrer">hivespelling.com</a>) is an EdTech startup I co-founded in 2023 that teaches K-8 students to spell using a pattern-recognition-based approach instead of traditional memorization.</p>
              
              <h4>Key Achievements</h4>
              <ul className="achievement-list">
                <li><strong>Selected as Official Learning Platform</strong> (<a href="https://learn.spellingbee.ae" target="_blank" rel="noopener noreferrer">learn.spellingbee.ae</a>) of the Spelling Bee Championship UAE (2,000 annual participants)</li>
                <li><strong>Launched in August 2025</strong> with 350+ users and 50% free-to-paid conversion rate</li>
                <li><strong>Hosted webinar</strong> for hundreds of international spellers and parents</li>
                <li><strong>Launched pilots</strong> in Goldsboro Elementary and Sanford Middle School</li>
                <li><strong>Administered and judged</strong> school spelling bees</li>
                <li><strong>Pending evaluation</strong> in Seminole County Public Schools as recommended county-wide spelling bee preparation tool for 40,000 K-8 students in ~50 schools</li>
              </ul>

              <h4>My Role</h4>
              <p>I lead marketing and content creation, manage interns, negotiate agreements, and led cold-outreach to 500+ educators, administrators, and spelling bee directors. I've been featured on the cover of local publication Stroll Heathrow.</p>
              
              <h4>Impact & Learning</h4>
              <p>Through Hive, I've gained essential entrepreneurship and customer acquisition skills, EdTech startup experience, and strengthened my adaptability and persistence. This venture has allowed me to combine my passion for education, technology, and innovation to create meaningful solutions that help students learn more effectively.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hive;
