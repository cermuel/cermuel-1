import React from "react";
import "../App.css";
import { FaGithub } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <div className="projects-header">Projects</div>
      <div className="projects-container">
        <div className="project-cards">
          <div className="project-name">CHOFOLIO</div>
          <div className="date">November 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/chofolio">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://chofolio.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="project-cards">
          <div className="project-name">RICKIPEDIA</div>
          <div className="date">September 2021</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/RICKIPEDIA">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://rickipedia-mu.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">ChatBot</div>
          <div className="date">July 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/lonely">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://lonelyy.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">CLONIFY</div>
          <div className="date">May 2021</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/clonify">
                <FaGithub />
              </a>
            </div>
            <div className="live-view" style={{ cursor: "pointer" }}>
              <a href="https://cermuel-clonify.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">MOVIEEMPIRE</div>
          <div className="date">May 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/moviempire">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="http://movieempire.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">CRYPTO INFORMATION</div>
          <div className="date">January 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/crypto-stats">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://mycrypto-i.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">Linktree Clone</div>
          <div className="date">October 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="http://github.com/cermuel/linktree-clone">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://linktree-clone-1.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="project-cards">
          <div className="project-name">Bored App</div>
          <div className="date">October 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/linktree-clone">
                <FaGithub />
              </a>
            </div>
            <div className="live-view">
              <a href="https://bore-d.vercel.app/">
                <FiShare />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/cermuel?tab=repositories"
        className="github-repo-link"
      >
        View All My Codes
      </a>
    </>
  );
};

export default Projects;
