import React, { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Flexbox', level: 80 },
      { name: 'SASS', level: 75 },
      { name: 'Bootstrap', level: 70 },
      { name: 'JavaScript', level: 95 },
      { name: 'React', level: 88 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
    ],
    databases: [
      { name: 'SQL Databases', level: 78 },
      { name: 'MongoDB', level: 70 },
      { name: 'Design and MRD', level: 73 },
    ],
    methodologiesAndTools: [
      { name: 'SCRUM', level: 80 },
      { name: 'Microservices with Docker', level: 68 },
      { name: 'Version control with Git', level: 85 },
      { name: 'Visual Studio Code (IDE)', level: 90 },
    ],
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      
      <h2 
        onMouseOver={() => setActiveCategory('frontend')}
        onMouseLeave={() => setActiveCategory(null)}
      >Frontend Development</h2>
      {activeCategory === 'frontend' && skills.frontend.map(skill => (
        <SkillBar key={skill.name} skill={skill} category='frontend' />
      ))}

      <h2 
        onMouseOver={() => setActiveCategory('backend')}
        onMouseLeave={() => setActiveCategory(null)}
      >Backend Development</h2>
      {activeCategory === 'backend' && skills.backend.map(skill => (
        <SkillBar key={skill.name} skill={skill} category='backend' />
      ))}

      <h2 
        onMouseOver={() => setActiveCategory('databases')}
        onMouseLeave={() => setActiveCategory(null)}
      >Databases</h2>
      {activeCategory === 'databases' && skills.databases.map(skill => (
        <SkillBar key={skill.name} skill={skill} category='databases' />
      ))}

      <h2 
        onMouseOver={() => setActiveCategory('methodologiesAndTools')}
        onMouseLeave={() => setActiveCategory(null)}
      >Methodologies and Tools</h2>
      {activeCategory === 'methodologiesAndTools' && skills.methodologiesAndTools.map(skill => (
        <SkillBar key={skill.name} skill={skill} category='methodologiesAndTools' />
      ))}
    </div>
  );
}

const SkillBar = ({ skill, category }) => (
  <div className="skill">
    <span className="skill-name">{skill.name}</span>
    <div className={`skill-bar ${category}`}>
      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
    </div>
  </div>
);

export default Skills;
