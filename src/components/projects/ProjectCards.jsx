import React from "react";
import styled from "styled-components";
import { Button } from "./projectStyle";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px; /* Limit the maximum width of the card */
  width: 100%; /* Ensure the card takes up the available width */
  border-radius: 12px;
  /* box-shadow: 0 2px 4px rgba(17, 25, 40, 0.5); */
  /* box-shadow: 0 2px 5px rgb(134 138 146 / 50%); */
  padding: 20px;
  margin: 20px;
  backdrop-filter: blur(16px) saturate(150%);
  /* background-color: rgba(17, 25, 40, 0.25); */
  background: linear-gradient(
    320deg,
    hsla(259, 100%, 73%, 1) 29%,
    hsla(240, 56%, 28%, 1) 100%
  );
  color: white;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 10px 20px rgba(134 138 146 / 50%);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 1rem;
  padding: 1rem;
  background-color: #21215459;
  box-shadow: 0 2px 4px rgb(206 202 202 / 20%);
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  margin-bottom: 6px;
  /* background-color: gainsboro; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default function ProjectCards({ project }) {
  const { name, image, desc, liveUrl: live, codeUrl: code } = project;
  return (
    <CardWrapper>
      <CardImage src={image} alt="the amenity" />
      <CardTitle>{name}</CardTitle>
      <CardContent>{desc}</CardContent>
      <ButtonWrapper>
        <Button>
          <a href={live} target="_blank">
            Demo
          </a>
        </Button>
        <Button>
          <a href={code} target="_blank">
            Git
          </a>
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
}
