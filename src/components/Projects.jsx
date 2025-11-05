import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Markham Mechatronic Madness',
      description: 'Founded and executed an impact-driven annually recurring event at Markham Woods Middle School allowing community members to interact with student-built robots and learn about Markham\'s Biomechatronics program, while raising important funds to sustain the Robotics program. Invited to host event each year as chief guest of honor.',
      icon: '🦾',
      placeholder: 'Robotics Project',
      years: '2022 - Present'
    },
    {
      title: 'Varsity Speech & Debate Co-Captain',
      description: 'Redesigned club meeting formats to provide personalized instruction and mentorship based on each member\'s chosen event, doubling club retention rates and quadrupled active member enrollment. Advanced to multiple National tournaments in NSDA and NCFL circuits, Regional tournament champion and runner-up; several top-5 finishes.',
      icon: '🎤',
      placeholder: 'Speech & Debate',
      years: '2022 - Present'
    },
    {
      title: 'NorthSouth Foundation Coach & SME',
      description: 'Taught 50+ students in grades K-8 to spell and prepare for spelling bees, designed international organization\'s spelling curriculum, created gamified learning materials, delivered parent info webinars. Administered and judged national qualifiers for spelling/vocabulary/geography bees.',
      icon: '📚',
      placeholder: 'Teaching Project',
      years: '2022 - 2025'
    },
    {
      title: 'Spellbound: A Parent\'s Guide to Raising Young Spellers',
      description: 'Currently writing a comprehensive guide for parents on raising young spellers, based on years of competition experience and coaching insights.',
      icon: '📖',
      placeholder: 'Writing Project',
      years: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Leadership & Projects</h2>
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
  );
};

export default Projects;
