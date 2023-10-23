import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "./HeaderStyle";
import ellipse1 from "../../assets/Ellipse1.svg";
import ellipse2 from "../../assets/Ellipse2.svg";
import ellipse3 from "../../assets/Ellipse3.svg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NewCon } from "../skills/QuoteStyle";

export default function Header() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    // <Container className="bg-gradient-to-b from-[#111132] to-[#0c0c1d]">
    //   <div className="ellipse1">
    //     <img src={ellipse1} alt="" />
    //   </div>

    //   <div className="ellipse2">
    //     <img src={ellipse2} alt="" />
    //   </div>

    //   <div className="ellipse3">
    //     <img src={ellipse3} alt="" />
    //   </div>
    //   <div data-aos="zoom-in-down" data-aos-duration="2000">
    //     Proj<span>ec</span>ts
    //   </div>
    //   <div data-aos="zoom-in-down" data-aos-duration="2000">
    //     Ahead <span>!!!</span>
    //   </div>
    //   <div className="icon" data-aos="zoom-in-down" data-aos-duration="2000">
    //     <FontAwesomeIcon icon={faAngleDown} />
    //   </div>
    // </Container>
    <Container>
      <div
        className="parallax"
        ref={ref}
        style={{
          background: "linear-gradient(180deg, #111132, #0c0c1d)",
        }}
      >
        <motion.div style={{ y: yText }} className="">
          Pro<span>ec</span>ts
        </motion.div>
        <motion.div style={{ y: yText }} className="">
          Ahead <span>!!!</span>
        </motion.div>
        <motion.div
          className="icon"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </motion.div>

        <motion.div className="astro w-3/5 sm:w-2/5"></motion.div>
        <motion.div style={{ x: yBg }} className="moon"></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </Container>
  );
}
