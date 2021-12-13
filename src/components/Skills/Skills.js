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
      desc: "With 2 years of work experience as a FED, I have the ability to develop a pixel perfect html, with user interactive functionalities and attractive transitions and animations.",
    },
    {
      imgsrc: jspic,
      title: "Javascript",
      desc: "Developing an indepth knowledge in Javascript. Learning reactJs. I have updated some of my projects in portfolio.",
    },
    {
      imgsrc: reactpic,
      title: "React",
      desc: "description here...",
    },
    {
      imgsrc: adobepic,
      title: "Adope",
      desc: "Sufficient knowledge in converting design files of Photoshop/Indesign/Illustrator to develop them into html file. Learning to use their tools more effectively for producing pixel perfect and quality output.",
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
