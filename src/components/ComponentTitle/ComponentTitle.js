import React from "react";
import "./ComponentTitle.css";

const ComponentTitle = ({ comptitle }) => {
  return (
    <div className="content_title">
      <h2>{comptitle}</h2>
      <span></span>
    </div>
  );
};

export default ComponentTitle;
