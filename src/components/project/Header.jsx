import React from "react";
import data from "../../data/project";
import { Button } from "../projects/projectStyle";

const Header = ({ projectId }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="flex flex-1 flex-col text-5xl text-white justify-center items-center sm:text-7xl">
        <div className="">
          <p>{data[projectId].name}</p>
        </div>
        <div className="flex gap-5 m-10">
          <Button>
            <a href={data[projectId].liveUrl} target="_blank">
              View Live
            </a>
          </Button>
          <Button>
            <a href={data[projectId].codeUrl} target="_blank">
              View Code
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="m-10">
          <img src={data[projectId].headerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
