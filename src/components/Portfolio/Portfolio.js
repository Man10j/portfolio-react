import React from "react";
import "./Portfolio.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import PrevworkCard from "../PrevworkCard/PrevworkCard";
import PortfolioCard from "../PortfolioCard/PortfolioCard";


import { Element } from "react-scroll";

const Portfolio = () => {
  return (
    <Element className="portfolio" id="Portfolio">
      <ComponentTitle comptitle="My Portfolio" />
      <div className="prev_wrk">
        <h2 className="sub_title">My previous services</h2>
        <div className="prev_wrk_content">
          <PrevworkCard
            title="E-Detailers & E-Mailers"
            desc="E-Detailing process for pharmaceutical involving module based
        development and mailers are based on Classic HTML"
          />
          <PrevworkCard
            title="Web development"
            desc="Responsive website with dynamic data management and user interactive functionalities"
          />
        </div>
        <h2 className="sub_title">Some of my work</h2>
        <div className="prevwrk_cards">
          <PortfolioCard/>
          <PortfolioCard/>
          <PortfolioCard/>
        </div>
      
      </div>
    </Element>
  );
};

export default Portfolio;
