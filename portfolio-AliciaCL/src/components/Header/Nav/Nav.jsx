import React from "react";
// import "../Nav/Nav.css"
import logo from "../../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Logo"   style={{ 
        height: '80px', 
        margin: '10px'
    }}  /> 
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
