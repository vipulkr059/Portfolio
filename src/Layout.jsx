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
import { Outlet } from "react-router-dom";

const Main = styled.div`
  .sections::-webkit-scrollbar {
    display: none;
  }
  .sections {
    height: 100vh;
    position: relative;
    scroll-snap-align: center;

    > * {
      height: 100vh;
      scroll-snap-align: start;
    }
  }
`;

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default Layout;
