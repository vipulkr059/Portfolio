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
import "./index.css";
import Projects2 from "./components/projects/Projects2";
import data from "./data/project";
import Project from "./components/project/Project";

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
        {data.map((p) => {
          return <Projects2 project={p} />;
        })}
        <Project />
        <Contact />
      </div>
    </Main>
  );
}

export default App;
