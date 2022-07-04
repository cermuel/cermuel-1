import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <>
      <div className="projects-header">Projects</div>
      <div className="projects-container">
        <div className="project-cards">
          <div className="project-name">RICKIPEDIA</div>
          <div className="date">September 2021</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/RICKIPEDIA">REPO</a>
            </div>
            <div className="live-view">
              <a href="https://rickipedia-mu.vercel.app/">LIVE</a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">CERMUEL || CHAT-APP</div>
          <div className="date">July 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/cermuel-chat">REPO</a>
            </div>
            <div className="live-view">
              <a href="https://cermuel-chat.vercel.app/">LIVE</a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">MOVIE INFO</div>
          <div className="date">April 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/myMovie-i">REPO</a>
            </div>
            <div className="live-view">
              <a href="https://movie-info-watch.vercel.app/">LIVE</a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">MOVIE INFO 2.0</div>
          <div className="date">May 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/myMovie2-i">REPO</a>
            </div>
            <div className="live-view">
              <a href="https://movie-info-updated.vercel.app/">LIVE</a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">GOOGLE-AUTH</div>
          <div className="date">May 2021</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/google-auth">REPO</a>
            </div>
            <div className="live-view" style={{ cursor: "pointer" }}>
              <a href="https://google-auth-cermuel.vercel.app/">LIVE</a>
            </div>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-name">CRYPTO INFORMATION</div>
          <div className="date">January 2022</div>
          <div className="project-links">
            <div className="repo">
              <a href="https://github.com/cermuel/crypto-stats">REPO</a>
            </div>
            <div className="live-view">
              <a href="https://mycrypto-i.vercel.app/">LIVE</a>
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
