import React from "react";

import "./Projects.css"; 


const projectsData = [
    {
      name: "",
      description: "",
      url: "https://github.com/alicia3194/Desafio-Fullstack-g1",
      imageUrl: ""
    },
    {
      name: "",
      description: "",
      url: "https://github.com/alicia3194/fullStack_personalProject",
    },
  
  ];

  const Projects = () => {
    return (
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            {project.imageUrl && <img src={project.imageUrl} alt={project.name} />}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">See Repositories</a>
          </div>
        ))}
      </div>
    );
  };
export default Projects;
