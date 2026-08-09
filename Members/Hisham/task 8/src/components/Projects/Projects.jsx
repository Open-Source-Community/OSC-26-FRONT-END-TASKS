import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectList = [
    { id: 1, title: 'E-Commerce Store', description: 'Built with React and Node.js' },
    { id: 2, title: 'Task Manager', description: 'A productivity dashboard using React state' },
    { id: 3, title: 'Weather App', description: 'Real-time weather tracking via REST API' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}