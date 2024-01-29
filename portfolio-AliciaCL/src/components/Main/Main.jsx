import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio"; 
import Skills from "./Skills/Skills"
import "./Main.css"; 

const Main = () => {
  return (
    <main className="main">
      <AboutMe />
      <Skills />
      <Portfolio />
    </main>
  );
};

export default Main;
