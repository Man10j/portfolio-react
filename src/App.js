import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const [selected, setSelected] = useState("home");
  return (
    <div className="App">
      <div className="right_wrap">
        <Navbar selected={selected} setSelected={setSelected} />
      </div>
      <div className="left_wrap">
        <Header />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
