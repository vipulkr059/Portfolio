import { useEffect } from "react";
import { Container, Container2 } from "./aboutStyle";
import Cards from "./Cards";
import bg from "../../assets/bg.png";
import ait from "../../assets/ait.png";
import ggsipu from "../../assets/ggsipu.jpg";
import Card from "./Card";
import Tiles from "./Tiles";

const About = () => {
  const ed1 = {
    univ: "GGSIPU",
    college: "Maharaja Agrasen Institute Of Technology",
    image: ggsipu,
    time: "2019 - 2022",
    branch: "B.Tech in Computer Science & Engineering",
  };
  const ed2 = {
    univ: "BTE",
    college: "Ambedkar Institute Of Technology",
    image: ait,
    time: "2016 - 2019",
    branch: "Diploma in Information Technology",
  };
  return (
    <div
      id="about"
      className=" h-screen flex flex-col snap-center text-white bg-gradient-to-b from-[#111132] to-[rgb(12,12,29)] "
    >
      <Container>
        <div

        // data-aos="fade-right"
        // data-aos-duration="2000"
        >
          I'm a Full Stack Developer located in Delhi. I have a passion for UI
          effects, animations and creating intuitive, dynamic user experiences
          and use my extensive knowledge of programming languages and frameworks
          to develop efficient web applications.
          <br />
          Well-organised person, problem solver and an Sketch Artist.
          <br />
          Interested in the entire WebDev spectrum and working on ambitious
          projects with positive people.
        </div>
        <span
          className="heading"
          // data-aos="fade-right"
          // data-aos-duration="2000"
          // data-aos-offset="10"
        >
          ABOUT&nbsp;<span className="text-[#f76301]"> ME</span>
        </span>
      </Container>
      <Container2
        style={{
          backgroundColor: "#a276ff",
          borderRadius: "25px 25px 0px 0px",
        }}
      >
        <span className="heading">
          <span className="high">Edu</span>cation
        </span>

        <Cards ed={ed1}></Cards>
        <Cards ed={ed2}></Cards>
      </Container2>
    </div>
  );
};

export default About;
