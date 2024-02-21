import { useRef } from "react";
import styled from "styled-components";
import { extras } from "../../data/project";
import ProjectCards from "./ProjectCards";
import { motion, useScroll, useTransform } from "framer-motion";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #111132, #0c0c1d);
  padding: 2rem; /* Added padding for better spacing */
  scroll-snap-align: center;
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
  color: white;
  font-size: 3rem; /* Adjusted font size */
  text-align: center; /* Center-align the text */
  span {
    color: #f76301;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Display cards in a row on larger screens */
    flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
    justify-content: center; /* Center-align the cards horizontally */
  }
`;

export default function Works() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Main>
      <Header>
        <h1>
          M<span>o</span>re Wo<span>r</span>k
        </h1>
      </Header>
      <CardContainer>
        {extras &&
          extras.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
      </CardContainer>
    </Main>
  );
}
