import React from "react";
import { Container } from "./CardStyle";

export default function Cards({ ed }) {
  const { univ, college, image, time, branch } = ed;
  return (
    <Container>
      <div className="edu" data-aos="flip-left" data-aos-duration="1500">
        <div className="card1">
          <div className="cardbody">
            <div className="imgCon">
              <img src={image} alt="" />
            </div>
            <div className="text">
              <h2>{univ}</h2>
              <h3>{college}</h3>
              <h3>{branch}</h3>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
