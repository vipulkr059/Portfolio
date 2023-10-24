import React from "react";
import data from "../../data/project";
import { Skill } from "../skills/rightSideStyle";

const Technology = ({ projectId }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex text-5xl text-white justify-center mt-20 sm:text-7xl">
        <p>Tech Stack</p>
      </div>
      <Skill className="flex-1">
        <div className="badgeContainer m-10">
          {data[projectId].tech.map((t, idx) => {
            return <img className="badge" key={idx} src={t} />;
          })}
        </div>
      </Skill>
    </div>
  );
};

export default Technology;
