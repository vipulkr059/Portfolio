import React from "react";
import { Container, NewCon } from "./QuoteStyle";
import ellipse1 from "../../assets/Elipse4.svg";
import ellipse2 from "../../assets/Ellipse5.svg";
import ellipse3 from "../../assets/Ellipse7.svg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Quote() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    // <Container>
    //   <div
    //     data-aos="fade-down"
    //     data-aos-easing="linear"
    //     data-aos-duration="1000"
    //   >
    //     The Future Belongs To Those Who Learn More Skills And Combine Them in
    //     Creative Ways
    //   </div>
    //   <span
    //     data-aos="fade-right"
    //     data-aos-easing="linear"
    //     data-aos-duration="1000"
    //   >
    //     - Robert Greene
    //   </span>
    // </Container>
    <NewCon>
      <div
        className="parallax"
        ref={ref}
        style={{
          background: "linear-gradient(180deg, #111132, #0c0c1d)",
        }}
      >
        <motion.div style={{ y: yText }} className="text-2xl sm:text-4xl w-2/4">
          The Future Belongs To Those Who Learn More Skills And Combine Them in
          Creative Ways
        </motion.div>
        <motion.span style={{ y: yText }}>- Robert Greene</motion.span>
        <motion.div className="astro w-3/5 sm:w-2/5"></motion.div>
        <motion.div style={{ x: yBg }} className="mars"></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </NewCon>
  );
}
