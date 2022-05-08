import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "./HeaderStyle";
import ellipse1 from "../../assets/Ellipse1.svg";
import ellipse2 from "../../assets/Ellipse2.svg";
import ellipse3 from "../../assets/Ellipse3.svg";

export default function Header() {
  return (
    <Container>
      <div className="ellipse1">
        <img src={ellipse1} alt="" />
      </div>

      <div className="ellipse2">
        <img src={ellipse2} alt="" />
      </div>

      <div className="ellipse3">
        <img src={ellipse3} alt="" />
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="2000">
        Proj<span>ec</span>ts
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="2000">
        Ahead <span>!!!</span>
      </div>
      <div className="icon" data-aos="zoom-in-down" data-aos-duration="2000">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </Container>
  );
}
