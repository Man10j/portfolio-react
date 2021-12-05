import React from "react";
import "./Contactcard.css";

const Contactcard = ({ keyval, icon, contactid, title }) => {
  return (
    <div className="Contactcard" key={keyval}>
      <i className={icon}></i>
      <p>{contactid}</p>
      <h4>{title}</h4>
    </div>
  );
};
export default Contactcard;
