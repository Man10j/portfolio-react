import React from "react";
import "./Header.css";
import { Element } from "react-scroll";
const Header = () => {
  return (
    <Element className="header" id="header">
      <div className="home_layout"></div>
      <div className="intro">Manoj Prabhakar</div>
      <div className="submit_btn row">
        <button type="submit">Download CV</button>
        <button type="submit">My work</button>
      </div>
      <div className="btm_left_nav">
        <div className="left_nav leftnav_linkedin">
          <a
            href="https://www.linkedin.com/in/manoj-prabhakar-ba6a47121"
            target="blank"
            className="linkedin "
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="left_nav leftnav_github">
          <a
            href="https://github.com/Man10j"
            target="blank"
            className="github "
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </Element>
  );
};
export default Header;
