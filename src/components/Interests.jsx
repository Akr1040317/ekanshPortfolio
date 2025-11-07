import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Interests = () => {
  const activities = [
    {
      category: 'Activities & Hobbies',
      items: [
        {
          title: 'Varsity Speech & Debate Co-Captain',
          icon: '🎤',
          description: 'Redesigned club meeting formats to provide personalized instruction and mentorship, doubling retention and quadrupling active membership. Advanced to multiple NSDA and NCFL national tournaments with several top-5 finishes.',
          image: 'Speech & Debate'
        },
        {
          title: 'Model United Nations',
          icon: '🌍',
          description: '3-year competitor at Seminole High School. Selected to represent school at PrincetonMUNC (chosen from 128 delegates) and GatorMUN (hosted by UF). I mentor newer members and love the diplomacy, research, and problem-solving that MUN demands.',
          image: 'MUN Image'
        },
        {
          title: 'NorthSouth Foundation Coach & SME',
          icon: '📚',
          description: 'Taught 50+ students in grades K-8 to spell and prepare for spelling bees, designed international organization\'s spelling curriculum, created gamified learning materials, delivered parent info webinars. Administered and judged national qualifiers for spelling/vocabulary/geography bees.',
          image: 'NSF Coaching'
        },
        {
          title: 'Cricket',
          icon: '🏏',
          description: 'I am a dedicated cricketer, playing tournaments throughout the United States and abroad, including the Sir Garfield Sobers International U19 Cricket Tournament in Barbados. I am very active in the Florida cricket scene, supporting grassroots cricket and representing Floridian teams at various tournaments. I have represented the South Zone at the USA Cricket U15 National Championships and the Southeast Zone at USA Cricket U19 Conference Championships.',
          image: 'Cricket Image'
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
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title">Activities & Interests</h2>
        </ScrollAnimation>
        {activities.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="interests-grid">
              {category.items.map((activity, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.08}>
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
