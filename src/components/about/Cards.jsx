import React from "react";
import { Container } from "./CardStyle";

export default function Cards({ ed }) {
  const { univ, college, image, time, branch } = ed;
  return (
    <Container>
      <div className="edu" data-aos="fade-up" data-aos-duration="1500">
        <div className="card1">
          <div className="cardbody">
            <div className="imgCon">
              <img src={image} alt="" />
            </div>
            <div className="text">
              <p>{univ}</p>
              <p>{college}</p>
              <p>{branch}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
