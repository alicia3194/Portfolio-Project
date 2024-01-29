import React, { useState } from "react";
import "./Portfolio.css"; 
import Badges from "./Badges/Badges"; 
import Projects from './Projects/Projects';

const Portfolio = () => {
  
  const [activeTab, setActiveTab] = useState('badges');

  return (
    <section id="portfolio">
        <h1>Portfolio</h1>
      <div className="portfolio-navigation">
        <button onClick={() => setActiveTab('badges')}>Certificates</button>
        <button onClick={() => setActiveTab('projects')}>Projects</button>
      </div>
      {activeTab === 'badges' && <Badges />}
      {activeTab === 'projects' && <Projects />}
    </section>
  );
};

export default Portfolio;
