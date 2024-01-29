import React from "react";
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <h2>My name is Alicia Cortínez López</h2>
        <p>
            I develop in server environments with Node.js and Express, implementing authentication systems and cloud storage with Firebase. I'm constantly learning and exploring new technologies to stay up-to-date and provide innovative solutions. I approach new situations with flexibility and have the ability to devise innovative and attractive design solutions. I possess the capacity to analyze problems critically and the skill to clearly express ideas and concepts.
        </p>

        <p>Contact</p>
        <p>Phone: 615 647 684</p>
        <p>Email: aliciacortinez@gmail.com</p>
        <p>Portfolio GitHub: <a href="https://github.com/alicia3194" target="_blank">alicia3194</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alicia-cortínez-lópez-746b9a181" target="_blank">alicia-cortínez-lópez</a></p>
      </div>
    </section>
  );
};

export default AboutMe;
