import React from "react";
import "../App.css";
import firebase from "../Images/firebase.svg";
import api from "../Images/api.svg";
import html from "../Images/html.svg";
import react from "../Images/react.svg";
import git from "../Images/git.svg";
import css from "../Images/css.svg";
import vscode from "../Images/vscode.svg";
import javascript from "../Images/javascript.svg";
import bootstrap from "../Images/bootstrap.svg";
import tailwind from "../Images/tailwind.svg";
import nextjs from "../Images/nextjs.svg";

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
          <img src={javascript} alt="" className="img-normal" />
          <div className="skills-name">Javascript</div>
        </div>
        <div className="skills-item">
          <img src={firebase} alt="" className="img-normal" />
          <div className="skills-name">Firebase</div>
        </div>

        <div className="skills-item">
          <img src={bootstrap} alt="" className="img-normal" />
          <div className="skills-name">Bootstrap</div>
        </div>
        <div className="skills-item">
          <img src={html} alt="" className="img-normal" />
          <div className="skills-name">HTML5</div>
        </div>
        <div className="skills-item">
          <img src={css} alt="" className="img-normal" />
          <div className="skills-name">CSS3</div>
        </div>
        <div className="skills-item">
          <img src={nextjs} alt="" className="img-normal" />
          <div className="skills-name">Next Js</div>
        </div>
        <div className="skills-item">
          <img src={api} alt="" className="img-normal" />
          <div className="skills-name">Rest API</div>
        </div>
        <div className="skills-item">
          <img src={git} alt="" className="img-normal" />
          <div className="skills-name">GIT</div>
        </div>
        <div className="skills-item">
          <img src={vscode} alt="" className="img-normal" />
          <div className="skills-name">Visual Studio</div>
        </div>
        <div className="skills-item">
          <img src={tailwind} alt="" className="img-normal" />
          <div className="skills-name">Tailwind CSS</div>
        </div>
      </div>
    </>
  );
};

export default Skills;
