import React from "react";
import { Menu } from "./sidebarMobStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faBriefcase,
  faLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function sidebarMobStyle({ menuOpen, setMenuOpen }) {
  return (
    <Menu className="menu" id="menu">
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left"></div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
      <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li className="list" onClick={() => setMenuOpen(false)}>
            <a href="#intro">
              <span className="icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list" onClick={() => setMenuOpen(false)}>
            <a href="#about">
              <span className="icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span className="title">About</span>
            </a>
          </li>
          <li className="list" onClick={() => setMenuOpen(false)}>
            <a href="#skills">
              <span className="icon">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <span className="title">SKILLS</span>
            </a>
          </li>
          <li className="list" onClick={() => setMenuOpen(false)}>
            <a href="#project">
              <span className="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span className="title">Project</span>
            </a>
          </li>
          <li className="list" onClick={() => setMenuOpen(false)}>
            <a href="#contact">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="title">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  );
}
