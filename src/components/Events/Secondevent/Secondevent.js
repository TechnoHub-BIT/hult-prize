import React from "react";
import "./Secondevent.css";
export default function Secondevent(props) {
  return (
    <div className="Secondevent">
      <div className="SecondeventContainer">
        <h6 data-aos="fade-up">8-Sept-2021</h6>
        {/* <h6 data-aos="fade-up">7:00pm</h6> */}
        <h2 data-aos="fade-up">
          <span>Introduction</span>
          {""}
        </h2>
        <p data-aos="fade-up">{props.para}</p>
        {/* <p >{props.list}</p> */}
        <div className="speaker">
          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>

          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="SecondeventContainer">
        <h6 data-aos="fade-up">8-Sept-2021</h6>
        {/* <h6 data-aos="fade-up">7:00pm</h6> */}
        <h2 data-aos="fade-up">
          <span>Introduction</span>
        </h2>
        <p data-aos="fade-up" data-aos="fade-up">
          {props.para}
        </p>
        {/* <p >{props.list}</p> */}
        <div className="speaker">
          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>

          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="SecondeventContainer">
        <h6 data-aos="fade-up">8-Sept-2021</h6>
        {/* <h6 data-aos="fade-up">7:00pm</h6> */}
        <h2 data-aos="fade-up">
          <span>Introduction</span>
        </h2>
        <p data-aos="fade-up">{props.para}</p>
        {/* <p >{props.list}</p> */}
        <div className="speaker">
          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>

          <div className="singleSpeaker" data-aos="fade-up">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
            />
            <div className="speakerDetails">
              <h5 className="name">Ritesh Kumar Thakur</h5>
              <h6 className="post">Co-ordinator</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
