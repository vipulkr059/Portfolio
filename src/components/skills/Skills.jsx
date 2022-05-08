import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import { Main, Left, Right } from "./skillStyle";

export default function Skills() {
  const skills = [
    { id: 1, skill: "html", p: 65 },
    { id: 2, skill: "CSS", p: 76 },
    { id: 3, skill: "Javascript", p: 68 },
    { id: 4, skill: "Java", p: 78 },
    { id: 5, skill: "ReactJs", p: 80 },
    { id: 6, skill: "NodeJs", p: 72 },
    { id: 7, skill: "ExpressJs", p: 70 },
    { id: 8, skill: "MongoDb", p: 62 },
  ];
  return (
    <Main id="skills">
      <Left
        className="left"
        style={{
          backgroundColor: "#a276ff",
          borderRadius: "0px 25px 25px 0px",
        }}
      >
        <div className="heading" data-aos="fade-right" data-aos-duration="1000">
          Ski <span className="high">ll</span>s
        </div>
        <div className="para" data-aos="fade-right" data-aos-duration="1500">
          <div>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, features, animations, and coding interactive layouts.
            <br /> <br />
            I also have full-stack development experience with MongoDb,
            expressJs, ReactJs & NodeJS. <br /> <br /> I Also Have Knowledge of
            Data Structures And Algorithms And Problem Solving Skills with Java.
          </div>
        </div>
      </Left>
      <Right>
        {skills.map((s) => (
          <Circle p={s.p} skill={s.skill}></Circle>
        ))}
      </Right>
    </Main>
  );
}
