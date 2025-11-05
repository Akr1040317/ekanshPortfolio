import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Interests = () => {
  const activities = [
    {
      category: 'Activities & Hobbies',
      items: [
        {
          title: 'Model United Nations',
          icon: '🌍',
          description: '3-year competitor at Seminole High School. Selected to represent school at the upcoming PrincetonMUNC (chosen from 128 delegates) and GatorMUN (hosted by UF). Achieved Outstanding Delegate at SeminoleMUN. I mentor newer members and love the diplomacy, research, and problem-solving that MUN demands.',
          image: 'MUN Image'
        },
        {
          title: 'Robotics & Engineering',
          icon: '🦾',
          description: 'Founded Markham Mechatronic Madness—an annual event at Markham Woods Middle School where community members interact with student-built robots. The event raises funds to sustain the robotics program and I\'m invited back each year as chief guest of honor. I love seeing students explore robotics beyond metal parts and computer cores.',
          image: 'Robotics Image'
        },
        {
          title: 'Tennis',
          icon: '🎾',
          description: '3-year Varsity Tennis Letterman, playing singles line 5. 2x winner of All-County Athlete Academic Achievement Award. Tennis teaches discipline, persistence, and the value of practice—skills that translate to everything else I do.',
          image: 'Tennis Image'
        }
      ]
    }
  ];

  return (
    <section id="interests" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Activities & Interests</h2>
        </ScrollAnimation>
        {activities.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="interests-grid">
              {category.items.map((activity, index) => (
                <ScrollAnimation key={index}>
                  <div className="interest-card">
                    <div className="interest-image-placeholder">
                      <span>{activity.icon}</span>
                      <p>{activity.image}</p>
                    </div>
                    <div className="interest-content">
                      <h3>{activity.title}</h3>
                      <p>{activity.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
