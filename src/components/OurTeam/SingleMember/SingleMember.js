import React from "react";

const SingleMember = (props) => {
  return (
    <React.Fragment>
      <div className="singleMember">
        <div className="memberImage">
          <img
            src={"./assets/images/team/" + props.image + ".png"}
            alt={props.name}
          />
        </div>
        <div className="memberDetails">
          <h3 className="name">{props.name}</h3>
          {props.post ? <h4 className="post">{props.post}</h4> : null}
          <div className="bar"></div>
          <div className="social">
            <a
              href={props.facebook}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={"https://instagram.com/" + props.instagram}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={"https://linkedin.com/" + props.linkedin}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleMember;
