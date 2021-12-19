import React from "react";
import "./Header.css";
import { Element, Link } from "react-scroll";
import cv from "../../media/pdfs/Manoj_Prabhakar_FED_CV.pdf";

const Header = () => {
  return (
    <Element className="header" id="header">
      <div className="home_layout"></div>
      <h1 className="intro">Manoj Prabhakar</h1>
      <h2 className="intro_desc">FED with 2.5 Years Experience</h2>
      <div className="submit_btn row">
        <button type="submit"><a href={cv} download="Manoj_Prabhakar_FED_CV">Download CV</a></button>
        <Link to="Portfolio" smooth={true} duration={700}>
          <button type="submit">My work</button>
        </Link>
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
