import React from "react";
import "../Nav/Nav.css"

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#home">Tu Logo</a> {/* Reemplaza #home con tu logo o nombre */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
