import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = ({ selected, setSelected }) => {
  return (
    <div className="navbar_right">
      <Link to="header" smooth={true} duration={700}>
        <div className="right_icon" onClick={() => setSelected("home")}>
          <i className="fas fa-house-damage"></i>
        </div>
      </Link>
      <Link to="about" smooth={true} duration={700}>
        <div className="right_icon" onClick={() => setSelected("about")}>
          <i className="fas fa-user-tie"></i>
        </div>
      </Link>
      <div className="right_icon">
        <i className="fas fa-university"></i>
      </div>
      <div className="right_icon">
        <i className="fas fa-tasks"></i>
      </div>
      <div className="right_icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <Link to="contact" smooth={true} duration={700}>
        <div className="right_icon">
          <i className="far fa-envelope"></i>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
