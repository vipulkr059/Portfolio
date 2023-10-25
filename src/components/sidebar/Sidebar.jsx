import {
  faAddressCard,
  faBriefcase,
  faHouse,
  faLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Side } from "./sideBarStyle";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  // const list = document.querySelectorAll(".list");
  // function activeLink() {
  //   list.forEach((item) => item.classNameList.remove("active"));

  //   this.classNameList.add("active");
  // }

  // list.forEach((item) => item.addEventListener("click", activeLink));
  return (
    <div>
      <Side className="navigation">
        <ul>
          <li className="list">
            <a href="#intro">
              <span className="icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#about">
              <span className="icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span className="title">About</span>
            </a>
          </li>
          <li className="list">
            <a href="#skills">
              <span className="icon">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <span className="title">SKILLS</span>
            </a>
          </li>
          <li className="list">
            <a href="#project">
              <span className="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span className="title">Project</span>
            </a>
          </li>
          <li className="list">
            <a href="#contact">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="title">Contact</span>
            </a>
          </li>
        </ul>
      </Side>
    </div>
  );
}
