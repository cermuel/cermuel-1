import React from "react";
import "../App.css";
import bootstrap from "../SKILLS LOGO/BOOTSTRAP.png";
import css from "../SKILLS LOGO/CSS.png";
import html from "../SKILLS LOGO/HTML.png";
import javascript from "../SKILLS LOGO/JAVASCRIPT.png";
import next from "../SKILLS LOGO/NEXT.png";
import react from "../SKILLS LOGO/REACT.png";
import vscode from "../SKILLS LOGO/VSCODE.png";

const Skills = () => {
  const firebaseLogo =
    "data:image/png;base64,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";
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
          <img src={firebaseLogo} alt="" className="img-thin" />
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
          <img src={vscode} alt="" className="img-big" />
          <div className="skills-name">Visual Studio Code</div>
        </div>
      </div>
    </>
  );
};

export default Skills;
