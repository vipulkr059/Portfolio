import React from "react";
import { Main, Left, Right } from "./projectStyle";
import laptop from "../../assets/laptop.png";
import spiffy from "../../assets/spiffy.gif";
import { useState } from "react";

const Projects = ({ project1, project2 }) => {
  const { name, image, desc } = project1;
  const name2 = project2.name;
  const image2 = project2.image;
  const desc2 = project2.desc;
  return (
    <Main id="project">
      <Left>
        <div className="imgContainer">
          <img
            src={laptop}
            alt=""
            className="laptop"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          />
          <img
            src={image}
            alt=""
            className="spiffy"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="text"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <div className="heading">{name}</div>
          <div className="description">
            {desc.map((s) => (
              <ul>
                <li>{s}</li>
              </ul>
            ))}
          </div>
          <div className="buttons">
            <a href="">
              <button>View Live</button>
            </a>
            <a href="">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </Left>
      <Left
        className="lower"
        style={{
          backgroundColor: "#a276ff",
          borderRadius: "25px 25px 0px 0px",
        }}
      >
        <div
          className="text"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <div className="heading">{name2}</div>
          <div className="description">
            {desc2.map((s) => (
              <ul>
                <li>{s}</li>
              </ul>
            ))}
          </div>
          <div className="buttons">
            <a href="">
              <button>View Live</button>
            </a>
            <a href="">
              <button>View Code</button>
            </a>
          </div>
        </div>
        <div className="imgContainer">
          <img
            src={laptop}
            alt=""
            className="laptop"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          />
          <img
            src={image2}
            alt=""
            className="spiffy"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          />
        </div>
      </Left>
    </Main>
  );
};

export default Projects;
