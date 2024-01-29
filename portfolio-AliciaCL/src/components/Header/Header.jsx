import React from "react";
import Nav from "./Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="container">
      <Nav /> 
      
      <h1>I'm a</h1>
      <p>Full Stack Developer</p> 
      <a href="#contact" className="contact-button">Contact Me</a>
      
    </header>
  );
};

export default Header;

