import React from "react";
import "./About.css";
import dp from "../../media/images/dp.jpg";
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element className="about" id="about">
      <div className="content_title">
        <h2>About Me</h2>
        <span></span>
      </div>

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
            Hi, The Name's MANOJ PRABHAKAR.C, Working in Hogarth as a Front End
            Devoloper.Born and brought up in Sivakasi,Tamilnadu.
            <span className="about_quote">
              "Logical way of seeing everything is the sane way to see anything"
            </span>
            ,i'm trying to keep see that way.Having wisdom and Ideas to keep
            stay on my path and to reach my destiny as well as meet my all
            desires on the way.
          </p>
        </div>
      </div>
    </Element>
  );
};
export default About;
