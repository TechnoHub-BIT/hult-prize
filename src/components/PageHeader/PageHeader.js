import React from "react";
import "./PageHeader.css";
import { Fade } from "react-reveal";

const PageHeader = (props) => {
  return (
    <React.Fragment>
      <div className="pageHeader">
        <Fade up>
          <h1 className="title">{props.title}</h1>
        </Fade>
        <div className="breadcrumbs">
          <div className="breadcrumbItem">
            <Fade up>
              <a href="/">Home</a>
            </Fade>
          </div>
          <Fade up>
            <i className="fas fa-circle"></i>
          </Fade>
          <Fade up>
            <div className="breadcrumbItem active">{props.title}</div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeader;
