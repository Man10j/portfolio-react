import React from "react";
import "./Skills.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import { Element } from "react-scroll";
import htmlcss from "../../media/images/htmlcss.png";
import jspic from "../../media/images/js.png";
import reactpic from "../../media/images/react.png";
import adobepic from "../../media/images/adobe.jpg";

import Skillcard from "../Skillcard/Skillcard";
const Skills = () => {
  const skillsets = [
    {
      imgsrc: htmlcss,
      title: "HTML and CSS",
      desc: "description here...",
    },
    {
      imgsrc: jspic,
      title: "Javascript",
      desc: "description here...",
    },
    {
      imgsrc: reactpic,
      title: "React",
      desc: "description here...",
    },
    {
      imgsrc: adobepic,
      title: "Adope",
      desc: "description here...",
    },
  ];
  return (
    <Element className="skills" id="skills">
      <ComponentTitle comptitle="Skillset" />
      <div className="skillsetcards">
        {skillsets.map((skillset, index) => (
          <Skillcard
            key={index}
            imgsrc={skillset.imgsrc}
            title={skillset.title}
            desc={skillset.desc}
          />
        ))}
      </div>
    </Element>
  );
};

export default Skills;
