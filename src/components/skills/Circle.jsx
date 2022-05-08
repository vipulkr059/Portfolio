import React from "react";
import { Cir } from "./circleStyle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import style from "./style.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Circle({ p, skill }) {
  return (
    <Cir>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? p : 0;
          return (
            <div
              className="circleContainer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="heading">{skill}</div>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
          );
        }}
      </VisibilitySensor>
    </Cir>
  );
}
