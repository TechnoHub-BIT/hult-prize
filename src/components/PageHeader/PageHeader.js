import React from "react";
import "./PageHeader.css";

const PageHeader = (props) => {
  return (
    <React.Fragment>
      <div className="pageHeader">
        <h1 className="title">{props.title}</h1>
        <div className="breadcrumbs">
          <div className="breadcrumbItem">
            <a href="/">Home</a>
          </div>
          <i className="fas fa-circle"></i>
          <div className="breadcrumbItem active">{props.title}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeader;
