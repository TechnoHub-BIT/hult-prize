import React from "react";
import "./AboutUs.css";
import PageHeader from "../PageHeader/PageHeader";

const AboutUs = () => {
  return (
    <React.Fragment>
      <PageHeader title="About Us" />
      <div className="aboutUsContainer">
        <div className="section contactUsSection">
          <h3 className="title">
            Still got <span className="textTheme">mixed up</span> thoughts?
            <br />
            We are always here.
          </h3>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
