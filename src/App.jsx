import React, { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Header from "./components/projects/Header";
import Projects2 from "./components/projects/Projects2";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Quote from "./components/skills/Quote";
import Skills from "./components/skills/Skills";
import data from "./data/project";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <Sidebar className="desktop" />
      <SidebarMobile
        className="mobile"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections h-full">
        <Intro />
        <About />
        <Quote />
        <Skills />
        <Header />
        {data.map((p, idx) => {
          return <Projects2 key={idx} project={p} />;
        })}
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
