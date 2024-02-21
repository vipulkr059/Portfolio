import React from "react";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import Experience from "./Experience";
import Education from "./Education";

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainContent({ item }) {
  return (
    <Content>
      {item === "About" && <AboutContent />}{" "}
      {item === "Experience" && <Experience />}{" "}
      {item === "Education" && <Education />}
    </Content>
  );
}
