import React from "react";
import "./PortfolioCard.css";

const PorfolioCard = ({
  wrkimg_src,
  wrk_title,
  wrk_lib,
  wrk_desc,
  git_link,
  deployed_link,
}) => {
  return (
    <div className="portfoliocard">
      <div className="workcard_portfolio">
        <a href={deployed_link} target="_blank" rel="noreferrer">
          <div className="portfoliocard_main">
            <img className="wrkimg_portfolio" src={wrkimg_src} alt="NFT" />
            <h2 className="portfoliocard_head">{wrk_title}</h2>
            <p className="portfolio_lib">{wrk_lib}</p>
            <p className="portfolio_desc">{wrk_desc}</p>
          </div>
        </a>
        <div className="portfolio_link_icons">
          <div className="portfolio_icon">
            <a href={git_link} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
              <span className="porfolio_linktext">Git</span>
            </a>
          </div>
          <div className="portfolio_icon">
            <a href={deployed_link} target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-square-alt"></i>
              <span className="porfolio_linktext">View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PorfolioCard;
