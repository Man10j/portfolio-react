import React from "react";
import "./PrevworkCard.css";

const PrevworkCard = ({ title, desc }) => {
  return (
    <div className="prev_wrk_card">
      <i className="fas fa-laptop-code"></i>
      <h2 className="card_title">{title}</h2>
      <p className="prev_wrk_desc">{desc}</p>
    </div>
  );
};

export default PrevworkCard;
