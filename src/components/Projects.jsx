import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Markham Mechatronic Madness',
      description: 'Created a fundraising robotics tournament event that brought together students for hands-on robot racing competitions and obstacle courses, addressing low enrollment and funding challenges in the robotics program.',
      icon: '🦾',
      placeholder: 'Robotics Project'
    },
    {
      title: 'Project Title',
      description: 'Project description will go here...',
      icon: '💻',
      placeholder: 'Project Image 2'
    },
    {
      title: 'Project Title',
      description: 'Project description will go here...',
      icon: '💻',
      placeholder: 'Project Image 3'
    },
    {
      title: 'Project Title',
      description: 'Project description will go here...',
      icon: '💻',
      placeholder: 'Project Image 4'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Personal Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder">
                <span>{project.icon}</span>
                <p>{project.placeholder}</p>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

