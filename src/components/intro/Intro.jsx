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

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1000,
  //     backSpeed: 80,
  //     strings: ["hello", "hi"],
  //   });
  // }, []);

  return (
    <IntroContainer id="intro">
      <Left>
        <div
          className="imgcon"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
        >
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
            <div>WEB DEVELOPER</div>
            <div className="small">
              <span className="sma">FrontEnd / Full Stack Developer</span>
            </div>
          </div>
        </div>
      </Right>

      {/*<div className="name">
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
          <div>WEB DEVELOPER</div>
          <div className="small">
            <span className="sma">FrontEnd / Full Stack Developer</span>
          </div>
        </div>
      </div>
      <div
        className="imgcon"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
      >
        <img src={Pr} alt="" />
      </div>
      {/*<div className="left">
        <div className="text">
          <div>HI,</div>
          <div>
            I'M <span className="high">VIPUL</span>,
          </div>
          <div>WEB DEVELOPER</div>
          <div className="small">
            <span className="sma">FrontEnd / Full Stack Developer</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgcon">
          <img src={Pr} alt="" />
        </div>
  </div>*/}

      {/*<div className="elipses">
        <img className="e1" src={Elipse1} alt="" />
        <img className="e2" src={Elipse2} alt="" />
        <img className="e3" src={Elipse3} alt="" />
        <img className="e4" src={Elipse4} alt="" />
  </div>*/}
    </IntroContainer>
  );
}
