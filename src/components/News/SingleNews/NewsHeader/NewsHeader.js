import React from "react";
import Moment from "moment";
import { Fade } from "react-reveal";

const NewsHeader = (props) => {
  return (
    <React.Fragment>
      <div
        className="newsHeader"
        style={{
          backgroundImage:
            "url('https://drive.google.com/uc?export=view&id=" +
            props.imageId +
            "')",
        }}
      >
        <Fade up>
          <h1 className="title">{props.title}</h1>
        </Fade>
        <Fade up>
          <h3 className="date">
            <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
            {Moment(props.date).format("DD MMMM YYYY")}
          </h3>
        </Fade>
        <div className="breadcrumbs">
          <Fade up>
            <div className="breadcrumbItem">
              <a href="/">Home</a>
            </div>
          </Fade>
          <Fade up>
            <i className="fas fa-circle"></i>
          </Fade>
          <Fade up>
            <div className="breadcrumbItem">
              <a href="/news">News</a>
            </div>
          </Fade>
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

export default NewsHeader;
