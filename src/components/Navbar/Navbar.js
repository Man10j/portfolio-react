import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_right">
      <div className="right_icon">
        <i className="fas fa-house-damage"></i>
      </div>
      <div className="right_icon">
        <i class="fas fa-university"></i>
      </div>
      <div className="right_icon">
        <i class="fas fa-tasks"></i>
      </div>
      <div className="right_icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <div className="right_icon">
        <i class="far fa-envelope"></i>
      </div>
    </div>
  );
};

export default Navbar;
