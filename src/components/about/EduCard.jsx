import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  perspective: 1000px;
  display: flex;
  gap: 1rem;
`;

const Cards = styled.div`
  width: 290px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;

  background: linear-gradient(
    135deg,
    hsla(259, 100%, 73%, 1) 29%,
    hsla(240, 56%, 28%, 1) 100%
  );

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 10px 20px rgba(204, 204, 204, 0.3);
  }
  /* @media (max-width: 768px) {
    width: calc(
      50% - 0.5rem
    ); Display cards in two columns on smaller screens */
`;

const Heading = styled.div`
  font-size: x-large;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  letter-spacing: 1px;
`;
const SubHeading = styled.div`
  font-size: larger;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  margin-bottom: 2px;
`;
const Description = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const EduCard = () => {
  return (
    <CardContainer>
      <Cards>
        <Heading>
          Bachelor Of <span className="text-[#f76301]">Technology</span>
        </Heading>
        <SubHeading>Computer Science & Engineering</SubHeading>
        <SubHeading>GGSIPU</SubHeading>
        <SubHeading>2019-2022</SubHeading>
      </Cards>
      <Cards>
        <Heading>
          Dip<span className="text-[#f76301]">lom</span>a
        </Heading>
        <SubHeading>Information And Technolgy</SubHeading>
        <SubHeading>BTE</SubHeading>
        <SubHeading>2016-2019</SubHeading>
      </Cards>
    </CardContainer>
  );
};

export default EduCard;
