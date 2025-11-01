import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Interests = () => {
  const activities = [
    {
      category: 'Activities & Hobbies',
      items: [
        {
          title: 'Cooking',
          icon: '🍛',
          description: 'I love cooking biryani—paneer tikka biryani with ghee, cilantro, mint, extra fried onions, saffron, and biryani masala. There\'s something meditative about following the precise sequence of ingredients. I spend hours hand-picking herbs (seriously, one step takes 2+ hours) and sharing the finished dish with classmates and teachers. Cooking connects me to my heritage—the flavors, the techniques, the stories behind each dish.',
          image: 'Cooking Image'
        },
        {
          title: 'Clash Royale',
          icon: '🎮',
          description: 'Yes, I play Clash Royale. It\'s gloriously useless—and that\'s what I love about it. A three-minute battle that means nothing, yet somehow means everything. I study patterns like a statistician, optimize elixir economies, predict moves, then lose to an ill-timed Fireball and laugh anyway. In a world that demands purpose, Clash Royale asks for none. It\'s a unique kind of freedom—strategy and whimsy, data science and chaos, all at once.',
          image: 'Gaming Image'
        },
        {
          title: 'Model United Nations',
          icon: '🌍',
          description: '3-year competitor at Seminole High School. Selected to represent school at PrincetonMUNC (chosen from 128 delegates) and GatorMUN (hosted by UF). Achieved Outstanding Delegate at PrincetonMUNC and SeminoleMUN. I mentor newer members and love the diplomacy, research, and problem-solving that MUN demands.',
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
        },
        {
          title: 'Book Writing',
          icon: '📖',
          description: 'Currently writing "Spellbound: A Parent\'s Guide to Raising Young Spellers"—a guide helping parents introduce spelling to their kids. Combining my experience as a National Spelling Bee finalist, Hive co-founder, and NorthSouth Foundation coach to create something that helps parents navigate spelling bee preparation.',
          image: 'Writing Image'
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
