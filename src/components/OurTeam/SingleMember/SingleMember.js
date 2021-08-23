import React from "react";
import { Fade } from "react-reveal";

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
          <Fade up>
            <h3 className="name">{props.name}</h3>
          </Fade>
          {props.post ? (
            <Fade up>
              <h4 className="post">{props.post}</h4>
            </Fade>
          ) : null}

          <Fade up>
            <div className="bar"></div>
          </Fade>
          <div className="social">
            {props.facebook ? (
              <Fade up>
                <a
                  href={"https://facebook.com/" + props.facebook}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Fade>
            ) : null}
            {props.instagram ? (
              <Fade up>
                <a
                  href={"https://instagram.com/" + props.instagram}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </Fade>
            ) : null}
            {props.linkedin ? (
              <Fade up>
                <a
                  href={"https://linkedin.com/in/" + props.linkedin}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </Fade>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleMember;
