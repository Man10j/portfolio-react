import React from "react";
import "./Portfolio.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import { Element } from "react-scroll";

const Portfolio = () => {
  return (
    <Element className="portfolio" id="Portfolio">
      <ComponentTitle comptitle="My Portfolio" />
      <div className="prev_wrk">
        <h2 className="sub_title">My previous services</h2>
        <div className="prev_wrk_content">
          <div className="prev_wrk_card">
            <i class="fas fa-laptop-code"></i>
            <h2 className="card_title">
              E-Detailers <code>&</code> E-Mailers
            </h2>
            <p>Desc here</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
