import "./App.css";
import logoBg from "./LOGO/logo-title.png";
import Footer from "./Components/Footer";
import Lorem from "./Components/lorem";
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { FaMicrophone } from "react-icons/fa";
import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
function App() {
  return (
    <body>
      <div className="App">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navigation">
          <div className="logo">
            <img src={logoBg}></img>
          </div>
          <div className="navigationLinks">
            <ul>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <AiOutlineHome />
                  </span>
                  <span className="text">HOME</span>
                </a>
              </li>
              <li className="list">
                <a href="#skills">
                  <span className="icon">
                    <GiSkills />
                  </span>
                  <span className="text">Skills</span>
                </a>
              </li>
              <li className="list">
                <a href="#projects">
                  <span className="icon">
                    <FaProjectDiagram />
                  </span>
                  <span className="text">Projects</span>
                </a>
              </li>
              <li className="list">
                <a href="#contact">
                  <span className="icon">
                    <FaPaperPlane />
                  </span>
                  <span className="text">Contact</span>
                </a>
              </li>

              <div className="indicator"></div>
            </ul>
          </div>
        </div>
        <div className="section" id="home">
          <Home />
        </div>
        <div className="section" id="skills">
          <Skills />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
        <div className="microphone">
          <FaMicrophone className="icon" />
        </div>
        <div className="footer">
          <div className="footer-links">
            <div className="icon-link">
              <a href="https://twitter.com/cermue1">
                <FiTwitter className="footer-icon" />
              </a>
            </div>
            <div className="icon-link">
              <a href="https://www.instagram.com/cermuel">
                <FiInstagram className="footer-icon" />
              </a>
            </div>
            <div className="icon-link">
              <a href="https://www.linkedin.com/in/ngene-samuel-obasi/">
                <FaLinkedinIn className="footer-icon" />
              </a>
            </div>
            <div className="icon-link">
              <a href="https://github.com/cermuel">
                <FiGithub className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="footer-text">
            {new Date().getFullYear()} &copy; <b>Ngene Samuel</b>. All Rights
            Reserved
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
