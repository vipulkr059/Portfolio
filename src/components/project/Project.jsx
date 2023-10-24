import React from "react";
import Header from "./Header";
import Features from "./Features";
import Technology from "./Technology";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import BackButton from "./BackButton";
import { Button } from "../projects/projectStyle";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-gradient-to-b from-[#111132] to-[#0c0c1d]">
      <Button className="z-10 fixed m-10">
        <Link to="/">
          <span>
            <FontAwesomeIcon icon={faStepBackward} /> Back
          </span>
        </Link>
      </Button>
      <Header projectId={projectId} />
      <Features projectId={projectId} />
      <Technology projectId={projectId} />
    </div>
  );
};

export default Project;
