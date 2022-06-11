import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const Footer = () => {
  const changeActive = () => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  };

  return (
    <>
      <div className="navigation">
        <ul>
          <li className="list">
            <a href="">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="text">HOME</span>
            </a>
          </li>
          <li className="list">
            <a href="">
              <span className="icon">
                <RiUserSettingsLine />
              </span>
              <span className="text">Skills</span>
            </a>
          </li>
          <li className="list">
            <a href="">
              <span className="icon">
                <MdOutlineTaskAlt />
              </span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li className="list">
            <a href="">
              <span className="icon">
                <MdOutlinePermContactCalendar />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>

          <div className="indicator"></div>
        </ul>
      </div>
      {changeActive}
    </>
  );
};

export default Footer;
