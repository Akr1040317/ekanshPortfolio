import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Cricket = () => {
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
            <div className="cricket-story">
              <h3>My Cricket Journey</h3>
              <p>I clasped the bat, adorned with a navy blue grip and shiny "GM" branding stickers, in my right hand. Smothered in padding from head to toe, my 3-and-a-half-feet-tall frame marched into the living room, ready for battle.</p>
              <p>The humble living room hosted competitive intra-family cricket games which became a tradition evidenced by dents in the drywall and shattered furniture. As much as I pretended I loved soccer and tennis more, an unmistakable grin betrayed my true sentiment every time I played cricket.</p>
              
              <h4>Achievements & Recognition</h4>
              <ul className="achievement-list">
                <li><strong>Sir Garfield Sobers International U19 Cricket Tournament Champion</strong> as Captain (2025) - First victory by an American team in the tournament's history</li>
                <li><strong>Semi-Finalist</strong> in the Sir Garfield Sobers International U19 Cricket Tournament (2024)</li>
                <li><strong>National-Level Youth Cricketer</strong> - Selected to represent the NC-FL region at USA Cricket (USAC) U19 Conference Championships (2024, 2025)</li>
                <li><strong>Vice-Captain</strong> of Florida U15 team</li>
                <li><strong>Best Bowler</strong> award at USAC U15 South Zone Regionals</li>
                <li><strong>Selected</strong> to represent South Zone at USAC U15 Nationals (2022)</li>
                <li><strong>Career Stats:</strong> 158 matches, 148 wickets, 938 runs</li>
              </ul>

              <h4>Building the Cricket Community</h4>
              <p>6 years ago, when I moved to Orlando, cricket in the community ran dry. I resorted to backyard games until the local adults' league reluctantly allowed me, ten-years-old, to compete amongst seemingly towering men.</p>
              <p>In the meantime, I spent mornings leading younger teammates through grueling practices, afternoons promoting the academy to crowds at community fairs, and late nights creating flyers. Doubling academy enrollment within the year, my cricket fever had spread.</p>
              
              <h4>Orlando County Cricket Club & Florida Panthers Youth Cricket Academy</h4>
              <ul className="achievement-list">
                <li><strong>6-year founding member</strong> of the academy</li>
                <li><strong>Founding member</strong> of first youth development team in the Florida Cricket Conference (FCC)</li>
                <li><strong>Top 15 bowler</strong> of 200+ players league-wide</li>
                <li><strong>Team MVP</strong> (2025), <strong>Club Emerging Player of the Year</strong> (2024)</li>
                <li><strong>FCC Stats:</strong> 70 career matches, 62 wickets, 498 runs</li>
              </ul>

              <h4>Leadership & Impact</h4>
              <p>Currently serving as <strong>NY Tri-State Development Captain</strong>, I coordinate flight plans, uniform design, lodging, and tournament logistics. During the week I ran at sunrise and practiced until sunset under Sir Colin Croft–one of cricket's greatest–in hopes of realizing my professional cricket dreams.</p>
              <p>On weekends, local club events became collisions of sporting backgrounds. Spirited matches, music, and homemade treats illustrated the cricket-built bridge between Indian, Jamaican, and even Kenyan cultures.</p>
              
              <h4>Volunteer Service</h4>
              <p>As a Club Ambassador and Cricket Volunteer at Florida Panthers Youth Cricket Academy (FPYCA) and American Women Cricket Club (AWCC), I run booths, deliver speeches, and conduct coaching demos. I create marketing flyers, posters, & dynamic QR codes, growing FPYCA from 5 to 30+ members.</p>
              <p>I volunteer at grassroots AWCC women's youth cricket tournaments, provide live commentary, manage live streams, assist with match scoring on digital platforms, tournament venue set up, and tournament organization, resulting in greater awareness for grassroots women's cricket.</p>

              <p className="cricket-closing">That old bat is now held together by electrical tape and wood glue and my junior-sized leg pads barely fit my forearm, but the tradition, commitment, and passion persist. Cricket isn't just a sport for me—it's a way to build community, establish tradition, and exemplify dedication through the game I love.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Cricket;
