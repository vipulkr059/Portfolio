import React from "react";
import { Side } from "./sideBarStyle";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faBriefcase,
  faLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  // const list = document.querySelectorAll(".list");
  // function activeLink() {
  //   list.forEach((item) => item.classList.remove("active"));

  //   this.classList.add("active");
  // }

  // list.forEach((item) => item.addEventListener("click", activeLink));
  return (
    <div>
      <Side class="navigation">
        <ul>
          <li class="list">
            <a href="#intro">
              <span class="icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li class="list">
            <a href="#about">
              <span class="icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span class="title">About</span>
            </a>
          </li>
          <li class="list">
            <a href="#skills">
              <span class="icon">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <span class="title">SKILLS</span>
            </a>
          </li>
          <li class="list">
            <a href="#project">
              <span class="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span class="title">Project</span>
            </a>
          </li>
          <li class="list">
            <a href="#contact">
              <span class="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span class="title">Contact</span>
            </a>
          </li>
        </ul>
      </Side>
    </div>
  );
}
