import React from "react";
import styled, { css } from "styled-components";
import { IntroContainer, Left, Right } from "./introStyle";
import Pr from "../../assets/profile.svg";
import Elipse1 from "../../assets/Ellipse1.svg";
import Elipse2 from "../../assets/Ellipse2.svg";
import Elipse3 from "../../assets/Ellipse3.svg";
import Elipse4 from "../../assets/Elipse4.svg";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import TypeAnimate from "./TypeAnimate";

export default function Intro() {
  return (
    <IntroContainer id="intro">
      <Left>
        <div className="imgcon" data-aos="fade-down" data-aos-duration="1000">
          <img src={Pr} alt="" />
        </div>
      </Left>
      <Right>
        <div className="name">
          <div
            className="text"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div>HI,</div>
            <div>
              I'M <span className="high">VIPUL</span>,
            </div>
            <div className="text-5xl sm:text-8xl">
              <TypeAnimate />
            </div>
          </div>
        </div>
      </Right>
    </IntroContainer>
  );
}
