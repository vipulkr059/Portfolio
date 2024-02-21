import React from "react";
import laptop from "../../assets/laptop.png";
import { Button, Eclips } from "./projectStyle";
import data from "../../data/project";
import { Link } from "react-router-dom";

const Projects2 = ({ project }) => {
  return (
    <div
      id="project"
      className="flex flex-col h-screen snap-center lg:flex-row bg-gradient-to-b from-[#111132] to-[rgb(12,12,29)]"
    >
      <div
        className="flex flex-1 items-center justify-center "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <img src={project.image} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-10 items-center justify-center bg-gradient-to-tr from-fuchsia-400 to-blue-900 text-white rounded-3xl text-sm m-0 sm:text-2xl sm:m-3">
        <div className="p-4">
          <p className=" text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f76c01] space-x-7">
            {project.name}
          </p>
        </div>
        <div className="p-10">
          <p className="">{project.desc}</p>
        </div>
        <div className="flex  gap-10">
          <Button>
            <a href={project.liveUrl} target="_blank">
              View Live
            </a>
          </Button>
          <Button>
            <Link to={`/projects/${project.id}`}>Case Study</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
