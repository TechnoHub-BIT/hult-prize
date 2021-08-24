import React from "react";
import "./PageHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PageHeader = (props) => {
  AOS.init({
    duration: 1000,
  });

  return (
    <React.Fragment>
      <div className="pageHeader">
        <h1 className="title" data-aos="fade-up">
          {props.title}
        </h1>
        <div className="breadcrumbs">
          <div className="breadcrumbItem" data-aos="fade-up">
            <a href="/">Home</a>
          </div>
          <i className="fas fa-circle" data-aos="fade-up"></i>
          <div className="breadcrumbItem active" data-aos="fade-up">
            {props.title}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeader;
