import React from "react";
import "./Skillcard.css";

const Skillcard = ({ imgsrc, title, desc }) => {
  return (
    <div className="skillcard">
      <img src={imgsrc} alt={imgsrc} className="skill_pic" />
      <div className="skill_desc">
        <h3 className="skill_title">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Skillcard;
