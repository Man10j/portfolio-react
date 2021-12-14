import React from "react";
import "./About.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import Hobbycard from "../Hobbycard/Hobbycard";
import dp from "../../media/images/dp.jpg";
import { Element } from "react-scroll";
const About = () => {
  const hobbylist = [
    {
      icon: "fas fa-film",
      title: "Movies",
    },
    {
      icon: "fas fa-music",
      title: "Music",
    },
    {
      icon: "fas fa-gamepad",
      title: "Video Games",
    },
    {
      icon: "fas fa-code",
      title: "Coding",
    },
  ];
  return (
    <Element className="about" id="about">
      <ComponentTitle comptitle="About Me" />
      <div className="about_contents">
        <div className="about_content1">
          <img src={dp} alt="" className="dp" />
        </div>
        <div className="about_content2">
          <h4>Manoj Prabhakar</h4>
          <div className="location">
            <span>
              <i className="fas fa-map-marked-alt"></i>
            </span>
            &nbsp;Chennai, India
          </div>
          <p>
            Hi, I'm a Front End Developer in Hogarth WorldWide, with 2.5 years
            of skill as a professional FED, i have acuquired the knowledge and
            skills necessary to develop a successful project and aspired to
            learn new things.
          </p>
        </div>
      </div>
      <div className="hobby_container">
        <h3 className="sub_title">My Hobbbies</h3>
        <div className="hobby_content">
          {hobbylist.map((hobby, index) => (
            <Hobbycard key={index} icon={hobby.icon} title={hobby.title} />
          ))}
        </div>
      </div>
      <div className="quote_container">
        <div className="layout">
          <p>"Be a Beacon of Hope"</p>
        </div>
      </div>
    </Element>
  );
};
export default About;
