import React from "react";
import styled from "styled-components";
import { extras } from "../../data/project";
import ProjectCards from "./ProjectCards";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #111132, #0c0c1d);
  padding: 2rem; /* Added padding for better spacing */
  scroll-snap-align: center;
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
