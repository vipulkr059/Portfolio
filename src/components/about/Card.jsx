import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  perspective: 1000px;
`;

const Cards = styled.div`
  width: 100%; /* Adjusted width to fit the container */
  max-width: 600px; /* Added max-width to prevent overflowing on smaller screens */
  height: 280px;
  padding: 10px;
  border: 1px solid black;

  background: linear-gradient(
    135deg,
    rgba(232, 121, 249, 1) 0%,
    rgba(30, 58, 138, 1) 100%
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
  @media (max-width: 600px) {
    max-width: 400px;
  }
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
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
`;

const Card = () => {
  return (
    <CardContainer>
      <Cards>
        <Heading>
          Software <span className="text-[#f76301]">Engineer</span>
        </Heading>
        <SubHeading>Bhavna Corp</SubHeading>
        <SubHeading>Jul 2022-Present</SubHeading>
        <Description>
          <p>
            Collaborated with the client to automate, digitize, and streamline
            supply chain operations, resulting in a notable 15% reduction in
            order processing time. Established a system facilitating smooth data
            exchange among business partners through a web-based platform,
            employing standard formats used by over 100+ partners.
          </p>
        </Description>
      </Cards>
    </CardContainer>
  );
};

export default Card;
