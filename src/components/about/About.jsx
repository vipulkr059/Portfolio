import React, { useState, useRef } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import Experience from "./Experience";
import Education from "./Education";
import AboutContent from "./AboutContent";
import { motion, useScroll, useTransform } from "framer-motion";

const Main = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #111132, #0c0c1d);
  color: white;

  .parallax {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
    flex-direction: column;

    .stars {
      background-image: url("/stars.png");
      background-size: cover;
      background-position: bottom;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
    }
  }
`;

const Header = styled.div`
  font-size: 3.75rem;
  padding-left: 13rem;
  margin: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-left: 2rem; /* Adjusted padding for smaller screens */
    text-align: center; /* Center-align the text on smaller screens */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 10px;
`;

export default function About() {
  // const [item, setitem] = useState("About");
  // const handleItemClick = (item) => {
  //   setitem(item);
  // };
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Main ref={ref}>
      <Header>
        <span className="heading">
          ABOUT&nbsp;<span className="text-[#f76301]"> ME</span>
        </span>
      </Header>
      <div className="parallax">
        <motion.div style={{ x: yBg }} className="stars"></motion.div>

        <Container>
          <AboutContent />
          <Container2>
            <Experience />
            <Education />
          </Container2>
        </Container>
      </div>
    </Main>
  );
}
