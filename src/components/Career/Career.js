import React from "react";
import "./Career.css";
import { Element } from "react-scroll";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
const Career = () => {
  return (
    <Element className="career" id="career">
      <ComponentTitle comptitle="Career Timeline" />
      <div className="timeline">
        <div className="timeline_container">
          <div className="timeline_content">
            <h2 className="timeline_header">2014</h2>
            <p className="timeline_desc">
              In 2014 i have completed my Higher secondary.
            </p>
            <h2 className="timeline_perc">79%</h2>
          </div>
        </div>

        <div className="timeline_container">
          <div className="timeline_content">
            <h2 className="timeline_header">2018</h2>
            <p className="timeline_desc">
              Completed My Under Graduation with firstclass.
            </p>
            <h2 className="timeline_perc">6.9 CGPA</h2>
          </div>
        </div>

        <div className="timeline_container">
          <div className="timeline_content">
            <h2 className=" timeline_header">2019</h2>
            <p className="timeline_desc">
              I'Ve started my career in Hogarth World Wide in chennai as a Front
              End Developer and have{" "}
              <span className="highlight">2.5 years</span> of experience as of
              now
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Career;
