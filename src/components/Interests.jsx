import React from 'react';

const Interests = () => {
  const interests = [
    {
      title: 'Cooking',
      icon: '🍛',
      description: [
        "I find joy in transforming simple ingredients into something special. Cooking is my way of blessing the mundane and turning what sustains us into what nourishes us. I especially love preparing dishes like paneer tikka biryani, following precise sequences of ingredients—each step matters, from the first paneer tikka to the final saffron and biryani masala.",
        "My passion for cooking connects me to my heritage, bringing together flavors from different cultures. I've spent hours hand-picking herbs and preparing dishes to share with classmates and teachers, turning meals into expressions of love, luxury, and cultural heritage."
      ]
    },
    {
      title: 'Robotics & Engineering',
      icon: '🦾',
      description: [
        "I'm passionate about robotics and engineering, particularly when I can inspire others through hands-on experiences. I love the creative problem-solving that comes with building robots and organizing events that bring people together around technology.",
        "There's something magical about seeing students explore robotics for the first time—watching their eyes light up as they discover that engineering goes beyond metal parts and computer cores. It's about providing a platform for others to find their potential."
      ]
    }
  ];

  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">Things I Like To Do</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-image-placeholder">
                <span>{interest.icon}</span>
                <p>{interest.title} Image</p>
              </div>
              <div className="interest-content">
                <h3>{interest.title}</h3>
                {interest.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

