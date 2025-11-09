import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Hive: Pattern-Based Spelling Platform',
      description:
        'Hive is an online learning platform that teaches spelling through pattern recognition instead of rote memorization. Hive bundles lessons, quizzes, and teacher resources built from years of coaching and competition insights.',
      icon: '🛠️',
      placeholder: 'EdTech Platform',
      years: '2021 – Present'
    },
    {
      title: 'HiveBot: AI Spelling Coach',
      description: 'Designing an AI tutor inside Hive Spelling that guides students through etymology, patterns, and pronunciation with adaptive challenges and personalized feedback. HiveBot aims to solve the challenge of hiring expensive tutors and deliver a more hyper-personalized and synchronized learning experience.',
      icon: '🤖',
      placeholder: 'AI Project',
      years: 'In Development'
    },
    {
      title: 'Spellbound: A Parent\'s Guide to Raising Young Spellers',
      description: 'Currently writing a comprehensive guide for parents on raising young spellers, based on years of competition experience and coaching insights.',
      icon: '📖',
      placeholder: 'Writing Project',
      years: 'In Progress'
    },
    {
      title: 'EE: The Norman Conquest & Legal English',
      description:
        'I decided to investigate the origins of English legal vocabulary through the lens of the 1066 Norman invasion of England. Through this extended essay, I studied historical documents, such as the Bayeux Tapestry, the Magna Carta, and Statutes of the Realm; historian testimony, such as Albert Baugh and Thomas Cable’s A History of the English Language; and English dictionaries such as Merriam-Webster’s Unabridged Online Dictionary. I was able to expand on the mindset that I had built throughout my spelling bee career and creating Hive, exploring how English had been shaped by nearly a millennia of complex cultural interactions. I compared the Normans’ French influence on legal vocabulary to the influence of the Romans and the Vikings, and I defined the types of cultural diffusion that had occurred (ex. Hierarchical and stimulus diffusion).',
      icon: '📜',
      placeholder: 'Extended Essay',
      years: 'IB Diploma'
    },
    {
      title: 'Economics Research (Internal Assessments)',
      description: [
        'Microeconomics: Federal tax credits\' effects on addressing positive consumption externalities in the EV market.',
        'Macroeconomics: Impact of dockworker strikes on U.S. economic output.',
        'International Economics: Impact of tariffs and retaliatory action on global trade and interdependence.'
      ],
      icon: '📊',
      placeholder: 'Research Project',
      years: 'IB Diploma'
    }
  ];

  return (
    <section id="projects" className="section">
        <div className="container">
          <ScrollAnimation animation="fade-up">
            <h2 className="section-title">Projects</h2>
          </ScrollAnimation>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 0.08}>
                <div className="project-card">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    {project.years && <p className="project-years">{project.years}</p>}
                    {Array.isArray(project.description) ? (
                      project.description.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))
                    ) : (
                      <p>{project.description}</p>
                    )}
                    {project.title === 'Hive: Pattern-Based Spelling Platform' && (
                      <a href="#hive" className="cta-button hive-link">
                        Learn more about Hive →
                      </a>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;
