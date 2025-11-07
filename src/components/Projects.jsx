import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const leadership = [
    {
      title: 'Varsity Speech & Debate Co-Captain',
      description: 'Redesigned club meeting formats to provide personalized instruction and mentorship based on each member\'s chosen event, doubling club retention rates and quadrupled active member enrollment. Advanced to multiple National tournaments in NSDA and NCFL circuits, Regional tournament champion and runner-up; several top-5 finishes.',
      icon: '🎤',
      placeholder: 'Speech & Debate',
      years: '2022 - Present'
    },
    {
      title: 'Markham Mechatronic Madness',
      description: 'Founded and executed an impact-driven annually recurring event at Markham Woods Middle School allowing community members to interact with student-built robots and learn about Markham\'s Biomechatronics program, while raising important funds to sustain the Robotics program. Invited to host event each year as chief guest of honor.',
      icon: '🦾',
      placeholder: 'Robotics Project',
      years: '2022 - Present'
    }
  ];

  const projects = [
    {
      title: 'Spellbound: A Parent\'s Guide to Raising Young Spellers',
      description: 'Currently writing a comprehensive guide for parents on raising young spellers, based on years of competition experience and coaching insights.',
      icon: '📖',
      placeholder: 'Writing Project',
      years: 'In Progress'
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
    <>
      <section id="leadership" className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Leadership</h2>
          </ScrollAnimation>
          <div className="projects-grid">
            {leadership.map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <span>{item.icon}</span>
                    <p>{item.placeholder}</p>
                  </div>
                  <div className="project-info">
                    <h3>{item.title}</h3>
                    {item.years && <p className="project-years">{item.years}</p>}
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Projects</h2>
          </ScrollAnimation>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollAnimation key={index}>
                <div className="project-card">
                  <div className="project-image-placeholder">
                    <span>{project.icon}</span>
                    <p>{project.placeholder}</p>
                  </div>
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
    </>
  );
};

export default Projects;
