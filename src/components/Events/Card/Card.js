import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="cartainer">
      <div className="card" data-aos="fade-up">
        <h3 className="title">
          <span> introduction</span>
        </h3>

        <div className="eventimg-dis">
          <div className="eventimg">
            <img
              src="./assets/images/team/ritesh-kumar.jpg"
              alt="Ritesh Kumar Thakur"
              alt=""
            />
          </div>
          <div className="eventdis">
            <ul>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam dolor aspernatur sequi placeat soluta similique vero
                  Lorem ipsum
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam dolor aspernatur sequi placeat soluta similique vero
                </p>
              </li>
              <div className="para2">
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam dolor aspernatur sequi placeat soluta similique vero
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam dolor aspernatur sequi placeat soluta similique vero
                  </p>
                </li>
              </div>

              <li>
                <div className="datetime">
                  <h6> 10 sept 2021 </h6>
                  <h6> 8:00pm </h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
