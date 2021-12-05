import React from "react";
import "./Hobbycard.css";

const Hobbycard = ({ index, icon, title }) => {
  return (
    <div className="hobby" key={index}>
      <div className="hobby_innercontainer">
        <i className={icon}></i>
        <h6>{title}</h6>
      </div>
    </div>
  );
};
export default Hobbycard;
