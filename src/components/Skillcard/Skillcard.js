import React from "react";
import "./Skillcard.css";

const Skillcard = ({ key, imgsrc, title, desc }) => {
  return (
    <div className="skillcard" key={key}>
      <img src={imgsrc} alt={imgsrc} className="skill_pic" />
      <h3 className="skill_title">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default Skillcard;
