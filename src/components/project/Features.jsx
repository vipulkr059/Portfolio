import React from "react";
import data from "../../data/project";
import iphone from "../../assets/iPhone 12 Pro.png";

const Features = ({ projectId }) => {
  return (
    <div className="flex flex-col-reverse  sm:flex-row">
      <div
        className="flex flex-1 flex-col items-center
      "
      >
        <div className="heading">
          <p className="text-4xl text-white my-6 sm:text-7xl sm:my-8">
            Fe<span className="text-[#f76301]">at</span>ures
          </p>
        </div>
        <div className="text-base mx-10 text-white sm:text-2xl ">
          <ul className=" list-disc">
            {data[projectId].feature.map((p, idx) => {
              return <li key={idx}>{p}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src={data[projectId].featImage} />
      </div>
    </div>
  );
};

export default Features;
