import React from "react";
import "../App.css";
import bootstrap from "../SKILLS LOGO/BOOTSTRAP.png";
import css from "../SKILLS LOGO/CSS.png";
import html from "../SKILLS LOGO/HTML.png";
import javascript from "../SKILLS LOGO/JAVASCRIPT.png";
import next from "../SKILLS LOGO/NEXT.png";
import react from "../SKILLS LOGO/REACT.png";
import vscode from "../SKILLS LOGO/VSCODE.png";
import firebase from "../SKILLS LOGO/firebase.png";
import wordpress from "../SKILLS LOGO/wordpress.png";

const Skills = () => {
  return (
    <>
      <header className="skills-header">SKILLS & TOOLS</header>
      <div className="skillsContainer">
        <div className="skills-item">
          <img src={react} alt="" className="img-normal" />
          <div className="skills-name">React</div>
        </div>
        <div className="skills-item">
          <img src={javascript} alt="" className="img-thin" />
          <div className="skills-name">Javascript</div>
        </div>
        <div className="skills-item">
          <img src={firebase} alt="" className="img-normal" />
          <div className="skills-name">Firebase</div>
        </div>
        <div className="skills-item">
          <img src={next} alt="" className="img-tiny" />
          <div className="skills-name">Next Js</div>
        </div>
        <div className="skills-item">
          <img src={bootstrap} alt="" className="img-normal" />
          <div className="skills-name">Bootstrap</div>
        </div>
        <div className="skills-item">
          <img src={html} alt="" className="img-thin" />
          <div className="skills-name">HTML5</div>
        </div>
        <div className="skills-item">
          <img src={css} alt="" className="img-normal" />
          <div className="skills-name">CSS3</div>
        </div>
        <div className="skills-item">
          <img src={wordpress} alt="" className="img-big" />
          <div className="skills-name">WordPress</div>
        </div>
      </div>
    </>
  );
};

export default Skills;
