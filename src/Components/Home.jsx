import React from "react";
import "../App.css";
import resume from "./RESUME.pdf";
import "animate.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="animate__animated  animate__backInLeft hiThere">
        Hi There, I'm
      </div>
      <div className="animate__animated animate__jackInTheBox name">
        Ngene Samuel
      </div>
      <div className="animate__animated animate__backInRight occupation">
        Web Developer
      </div>
      <div className="resume">
        <a href={resume} download="download">
          DOWNLOAD MY CV
        </a>
      </div>
    </div>
  );
};

export default Home;
