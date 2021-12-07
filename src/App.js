import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  const [selected, setSelected] = useState("home");
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected} />

      <div className="left_wrap">
        <Header />
        <About />
        <Career />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
