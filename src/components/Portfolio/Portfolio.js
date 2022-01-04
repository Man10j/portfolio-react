import React from "react";
import "./Portfolio.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import PrevworkCard from "../PrevworkCard/PrevworkCard";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import portfolio_pic1 from "../../media/images/portfolio_work1.png";
import portfolio_pic2 from "../../media/images/portfolio_work2.png";

import { Element } from "react-scroll";

const Portfolio = () => {
  const prevwrks = [
    {
      wrkimg_src: portfolio_pic1,
      wrk_title: "Movie Search App",
      wrk_lib: (
        <span>
          React <span className="prev_wrk_divider">|</span> React router{" "}
          <span className="prev_wrk_divider">|</span> React redux{" "}
          <span className="prev_wrk_divider">|</span> Moviedp API
        </span>
      ),
      wrk_desc:
        "By the help of the Movie API, this application can fetch details of the movie you wish to watch and also you can add it into the wishlist.",
      git_link: "https://github.com/Man10j/movie-search-react",
      deployed_link: "https://moviesearchreact.web.app/",
    },
    {
      wrkimg_src: portfolio_pic2,
      wrk_title: "Covid tracker",
      wrk_lib: (
        <span>
          React <span className="prev_wrk_divider">|</span> React Chart{" "}
          <span className="prev_wrk_divider">|</span> Material-UI{" "}
          <span className="prev_wrk_divider">|</span> Covid19 tracker API
        </span>
      ),
      wrk_desc:
        "This application helps to track the covoid cases around the world and show it as a graphical representation.",
      git_link: "https://github.com/Man10j/corona-tracker-react",
      deployed_link: "https://covidtracker-react.netlify.app/",
    },
  ];

  return (
    <Element className="portfolio" id="Portfolio">
      <ComponentTitle comptitle="My Portfolio" />
      <div className="prev_wrk">
        <h2 className="sub_title">Some of my work</h2>
        <div className="prevwrk_cards">
          {prevwrks.map((work, index) => (
            <PortfolioCard
              key={index}
              wrkimg_src={work.wrkimg_src}
              wrk_title={work.wrk_title}
              wrk_lib={work.wrk_lib}
              wrk_desc={work.wrk_desc}
              git_link={work.git_link}
              deployed_link={work.deployed_link}
            />
          ))}
        </div>
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
      </div>
    </Element>
  );
};

export default Portfolio;
