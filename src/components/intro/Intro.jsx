import React from "react";
import styled, { css } from "styled-components";
import { IntroContainer, Left, Right } from "./introStyle";
import Profile from "../../assets/hero.png";
import { useEffect, useRef } from "react";
import TypeAnimate from "./TypeAnimate";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../projects/projectStyle";

export default function Intro() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <IntroContainer id="intro" ref={ref}>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <Left>
        <motion.div className="absolute w-3/4 sm:w-4/12 sm:bottom-0">
          <img src={Profile} alt="" />
        </motion.div>
      </Left>
      <Right>
        <motion.div style={{ x: yText }} className="name">
          <div
            className="text"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div>HI,</div>
            <div>
              I'M <span className="high">VIPUL</span>,
            </div>
            <div className="text-5xl sm:text-8xl">
              <TypeAnimate />
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 m-12 sm:left-20 sm:m-16">
          <a href="/VipulResume.pdf" download="Vipul_Resume" target="_blank">
            <Button>Download Resume</Button>
          </a>
        </div>
      </Right>
    </IntroContainer>
  );
}
