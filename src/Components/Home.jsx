import React from "react";
import "../App.css";
import resume from "./RESUME.pdf";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="hiThere">Hi There, I'm</div>
      <div className="name">Ngene Samuel</div>
      <div className="occupation">Web Developer</div>
      <div className="resume">
        <a href={resume} download="download">
          DOWNLOAD MY CV
        </a>
      </div>
    </div>
  );
};

export default Home;
