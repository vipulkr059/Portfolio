// import React from "react";
// import styled from "styled-components";

// const Content = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   font-family: "Montserrat", sans-serif;
//   font-size: 1rem;
// `;

// export default function AboutContent() {
//   return (
//     <Content>
//       I'm a Full Stack Developer located in Delhi. I have a passion for UI
//       effects, animations and creating intuitive, dynamic user experiences and
//       use my extensive knowledge of programming languages and frameworks to
//       develop efficient web applications.
//       <br />
//       Well-organised person, problem solver and an Sketch Artist.
//       <br />
//       Interested in the entire WebDev spectrum and working on ambitious projects
//       with positive people.
//     </Content>
//   );
// }
import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  perspective: 1000px;
`;

const Cards = styled.div`
  width: 100%; /* Adjusted width to fit the container */
  max-width: 600px; /* Added max-width to prevent overflowing on smaller screens */
  padding: 20px; /* Increased padding for better readability */
  height: 500px;
  border: 1px solid black;
  /* background: linear-gradient(
    320deg,
    hsla(259, 100%, 73%, 1) 29%,
    hsla(240, 56%, 28%, 1) 100%
  ); */
  background: linear-gradient(
    320deg,
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
  font-size: x-large;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 10px 20px rgba(204, 204, 204, 0.3);
  }

  @media (max-width: 768px) {
    height: 300px;
    font-size: large;
  }
  @media (max-width: 600px) {
    max-width: 375px;
    height: 250px;
    font-size: medium;
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

const AboutContent = () => {
  return (
    <CardContainer>
      <Cards>
        <Description>
          <p>
            I'm a Full Stack Developer located in Delhi. I have a passion for UI
            effects, animations and creating intuitive, dynamic user experiences
            and use my extensive knowledge of programming languages and
            frameworks to develop efficient web applications.
            <br />
            Well-organised person, problem solver and an Sketch Artist. <br />
            Interested in the entire WebDev spectrum and working on ambitious
            projects with positive people.
          </p>
        </Description>
      </Cards>
    </CardContainer>
  );
};

export default AboutContent;
