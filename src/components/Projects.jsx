import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Spellbound: A Parent\'s Guide to Raising Young Spellers',
      description: 'Currently writing a comprehensive guide for parents on raising young spellers, based on years of competition experience and coaching insights.',
      icon: '📖',
      placeholder: 'Writing Project',
      years: 'In Progress'
    },
    {
      title: 'HiveBot: AI Spelling Coach',
      description: 'Designing an AI tutor inside Hive Spelling that guides students through etymology, patterns, and pronunciation with adaptive challenges and personalized feedback. Currently building conversational flows, challenge modes, and analytics for launch.',
      icon: '🤖',
      placeholder: 'AI Project',
      years: 'In Development'
    },
    {
      title: 'Economics Research (Internal Assessments)',
      description: '1. Microeconomics: Federal tax credits\' effects on addressing positive consumption externalities in EV market. 2. Macroeconomics: Impact of dockworker strikes on U.S. economic output. 3. International Economics: Impact of tariffs and retaliatory action on global trade/interdependence.',
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
                    <p>{project.description}</p>
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
