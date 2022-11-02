import React from "react";
import resume from "./RESUME.pdf";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">About Me</div>
      <div className="about">
        I'm a frontend developer from Abuja, NG. Currently schooling in{" "}
        <b>Landmark University</b> in Kwara, I am passionate about coding
        beautiful simple things. <br />
        My preferred tools are Javascript, CSS and React.js, and I am excited to
        work alongside other amazing programmers and learn so much more!
        <br /> In my spare time I enjoy gaming and building my own projects.
      </div>
      <div className="aboutResume">
        <a href={resume} download="download">
          DOWNLOAD MY CV
        </a>
      </div>
    </div>
  );
};

export default About;
