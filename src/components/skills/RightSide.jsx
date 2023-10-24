import React, { useRef } from "react";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import mongo from "../../assets/mongo-db.png";
import tscript from "../../assets/typescript.png";
import nodeJs from "../../assets/nodejs.png";
import reactJs from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import mySql from "../../assets/mysql.png";
import next from "../../assets/next.png";
import express from "../../assets/express.png";
import { Skill } from "./rightSideStyle";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { id: 1, skill: "Html", image: html },
  { id: 2, skill: "CSS", image: css },
  { id: 3, skill: "Javascript", image: javascript },
  { id: 4, skill: "Java", image: java },
  { id: 5, skill: "ReactJs", image: reactJs },
  { id: 6, skill: "NodeJs", image: nodeJs },
  { id: 7, skill: "TypeScript", image: tscript },
  { id: 8, skill: "MongoDb", image: mongo },
  { id: 9, skill: "MySql", image: mySql },
  { id: 10, skill: "Tailwind", image: tailwind },
  { id: 11, skill: "Next", image: next },
  { id: 12, skill: "Express", image: express },
];

const RightSide = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Skill>
      <div className="badgeContainer">
        {skills.map((skill) => {
          return <img className="badge" key={skill.id} src={skill.image} />;
        })}
      </div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </Skill>
  );
};

export default RightSide;
