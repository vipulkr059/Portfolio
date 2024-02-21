import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Profile from "../../assets/hero.png";
import { Button } from "../projects/projectStyle";
import TypeAnimate from "./TypeAnimate";
import { IntroContainer, Left, Right } from "./introStyle";

export default function Intro() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <IntroContainer id="intro" ref={ref}>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <Left>
        <div className="flex items-center justify-center absolute w-full lg:w-1/2 bottom-1/2  lg:bottom-0">
          <img src={Profile} alt="" className=" w-1/2  " />
        </div>
      </Left>
      <Right className="bg-gradient-to-tl from-fuchsia-400 to-blue-900">
        <div className="name">
          <div
            className="text text-4xl md:text-6xl"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div>HI,</div>
            <div>
              I'M <span className="high">VIPUL</span>,
            </div>
          </div>
          <div className="text text-4xl md:text-6xl">
            <TypeAnimate />
          </div>
        </div>
        <div className="absolute bottom-0 m-12 sm:left-20 sm:m-16">
          <a href="/VipulResume.pdf" download="Vipul_Resume" target="_blank">
            <Button>Download Resume</Button>
          </a>
        </div>
      </Right>
    </IntroContainer>
  );
}
