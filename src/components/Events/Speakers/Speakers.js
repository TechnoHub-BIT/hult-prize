import React from "react";
import "./Speakers.css";
export default function Speakers(props) {
  return (
    <div class="content">
      <div class="card" data-aos="flip-left">
        <img
          src="./assets/images/team/ritesh-kumar.jpg"
          alt=""
          class="profile-img"
        />

        <h2 class="profile-name">{props.name}</h2>
        <p class="profile-position">{props.position}</p>
        <p class="profile-info">{props.info}</p>
        <ul class="social-list">
          <li>
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
