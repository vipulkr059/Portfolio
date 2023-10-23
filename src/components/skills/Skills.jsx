import React from "react";
import Circle from "./Circle";
import { Main, Left, Right } from "./skillStyle";
import RightSide from "./RightSide";
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
export default function Skills() {
  return (
    /*<Main id="skills">
      <Left
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
            I'm a Full Stack Developer building the Front-end/Back-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
            <br />
            <br />
            I also have full-stack development experience with MongoDb,
            expressJs, ReactJs & NodeJS. <br />
            <br />
            I Also Have Knowledge of Data Structures And Algorithms And Problem
            Solving Skills with Java.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </div>
        </div>
      </Left>
      <Right>
      
        <RightSide />
      </Right>
    </Main>*/

    <div id="skills" className="flex flex-col bg-[#1b1c35] sm:flex-row">
      <div className="flex flex-1 flex-col bg-[#a276ff] rounded-3xl items-center ">
        <div
          className="text-4xl text-white my-6 sm:text-7xl sm:my-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Ski<span className="text-[#f76301]">ll</span>s
        </div>
        <div
          className="text-sm mx-10 text-white sm:text-2xl flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            I'm a Full Stack Developer building the Front-end/Back-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
            <br />
            <br />
            I also have full-stack development experience with MongoDb,
            expressJs, ReactJs & NodeJS. <br />
            <br />
            I Also Have Knowledge of Data Structures And Algorithms And Problem
            Solving Skills with Java.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <RightSide />
      </div>
    </div>
  );
}
