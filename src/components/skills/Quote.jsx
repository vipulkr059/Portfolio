import React from "react";
import { Container } from "./QuoteStyle";
import ellipse1 from "../../assets/Elipse4.svg";
import ellipse2 from "../../assets/Ellipse5.svg";
import ellipse3 from "../../assets/Ellipse7.svg";

export default function Quote() {
  return (
    <Container>
      {/*<div className="ellipse1">
        <img src={ellipse1} alt="" />
      </div>

      <div className="ellipse2">
        <img src={ellipse2} alt="" />
      </div>

      <div className="ellipse3">
        <img src={ellipse3} alt="" />
  </div>*/}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        The Future Belongs To Those Who Learn More Skills And Combine Them in
        Creative Ways
      </div>
      <span
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        - Robert Greene
      </span>
    </Container>
  );
}
