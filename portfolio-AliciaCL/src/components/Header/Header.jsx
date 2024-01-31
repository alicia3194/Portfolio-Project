import React from "react";
import Nav from "./Nav/Nav";
import Photo from "../../assets/Alicia.png"

const Header = () => {
  return (
    <>
    <Nav /> 
    
    <header className="container">
      <div className="container-header">
        <h1>I'm a</h1>
        <h2>Full Stack Developer</h2> 
      </div>

      <div className="container-photo">
        <img src={Photo} alt="Photo" className="profile-photo"/> 
      </div>
    </header>

    </>
  );
};

export default Header;

