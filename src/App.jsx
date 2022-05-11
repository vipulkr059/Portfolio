import styled from "styled-components";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Skills from "./components/skills/Skills";
import Quote from "./components/skills/Quote";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Header from "./components/projects/Header";
import euphony from "./assets/euphony.gif";
import spiffy from "./assets/spiffy.gif";
import voting from "./assets/voting.gif";
import mask from "./assets/mask.gif";
import { useState } from "react";

const Main = styled.div`
  height: 100vh;
  width: 100vw;

  .sections::-webkit-scrollbar {
    display: none;
  }
  .sections {
    width: 100%;
    height: 100%;
    position: relative;
    scroll-snap-type: y mandatory;

    > * {
      height: 100vh;
      scroll-snap-align: start;
    }
  }
`;

function App() {
  const project1 = {
    name: "Spiffy Shirts",
    image: spiffy,
    desc: [
      "E-Commerce Webapp Based on MERN Stack.",
      "Database Manage and Hosted on MongoDB Atlas.",
      " UI Designed with React and Style Components.",
      "used in famous E-Commerce. Served Live on Heroku.",
    ],
    url: "",
  };
  const project2 = {
    name: "Mask On",
    image: mask,
    desc: [
      "A game Based On Covid pandemic.",
      "It was developed on HTML, CSS & JAVAscript.",
      "Soothing Music and GAmeplay Experience.",
      "Addictive For KIds.",
    ],
    url: "",
  };
  const project3 = {
    name: "Euphony",
    image: euphony,
    desc: [
      "Music WebApp Integrated With Spotify Web API",
      "It is Based on Node JS, Express JS, & React JS",
      "It has all functionality like Player, Searching etc.",
      "UI is Designed with Styled Components & React",
    ],
    url: "",
  };
  const project4 = {
    name: "Online Voting System",
    image: voting,
    desc: [
      "An Online Voting System Based on Java, Servlet, JSP.",
      "It allows to automate Voting operations digitally.",
      "UI Designed with HTML ,CSS And JavaScript.",
      "Database Managed and Maintain With SQL",
    ],
    url: "",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Main>
      <Sidebar className="desktop" />
      <SidebarMobile
        className="mobile"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Intro />
        <About />
        <Quote />
        <Skills />
        <Header />
        <Projects project1={project1} project2={project2} />
        <Projects project1={project3} project2={project4} />
        <Contact />
        {/*<Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skill" element={<Skills />} />
          <Route
            exact
            path="/project"
            element={<Projects project1={project1} project2={project2} />}
          />
          <Route exact path="/contact" element={<Contact />} />
</Routes>*/}
      </div>
    </Main>
  );
}

export default App;
