import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsHeader = (props) => {
  AOS.init({
    duration: 1000,
  });

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
        <h1 className="title" data-aos="fade-up">
          {props.title}
        </h1>
        <h3 className="date" data-aos="fade-up">
          <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
          {Moment(props.date).format("DD MMMM YYYY")}
        </h3>
        <div className="breadcrumbs">
          <div className="breadcrumbItem" data-aos="fade-up">
            <Link to="/">Home</Link>
          </div>
          <i className="fas fa-circle" data-aos="fade-up"></i>
          <div className="breadcrumbItem" data-aos="fade-up">
            <Link to="/news">News</Link>
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

export default NewsHeader;
