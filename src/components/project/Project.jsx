import React from "react";
import Header from "./Header";
import Features from "./Features";
import Technology from "./Technology";

const Project = () => {
  return (
    <div className="main h-screen w-screen">
      <div className="h-full w-full">
        <Header />
        <Features />
        <Technology />
      </div>
    </div>
  );
};

export default Project;
