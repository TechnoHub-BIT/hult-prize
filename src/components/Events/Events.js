import React from "react";
import "./Events.css";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import Card from "./Card/Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Speakers from "./Speakers/Speakers";
import Secondevent from "./Secondevent/Secondevent";
import AOS from "aos";
import "aos/dist/aos.css";
const Highlights = () => {
  AOS.init({
    duration: 1000,
  });
  //const [eventdis, setEventdis] = useState("ritesh");
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BIT Durg 2022 - Events</title>
        <meta
          name="title"
          content="What is Hult Prize? | Hult Prize BIT Durg 2022"
        />
        <meta
          name="description"
          content="The Hult Prize is the world's largest social impact movement. It is a startup competition that crowdsources ideas from challenging students from all over the world to solve a pressing issue."
        />
      </Helmet>
      <PageHeader title="Events" />

      <div className="eventsContainer">
        <div className="section eventHeading">
          <h1 className="head" data-aos="fade-up">
            2021 - 2022
          </h1>
        </div>
        <div className="section eventMainpage">
          <div className="mainpage">
            <h5 className="eventtitle" data-aos="fade-up">
              September 5 <sup>th</sup> - 30
              <sup>th</sup> 2021
            </h5>
            <h2 data-aos="fade-up">
              HULT <br /> PRIZE <br /> 2021
            </h2>
            <h5 className="clgtitle" data-aos="fade-up">
              BHILAI INSTITUTE OF TECHNOLOGY, Durg
            </h5>
          </div>
        </div>
        <div className="eventsUpcoming">
          <h1>
            Upcoming
            <span> Events</span>
            <div className="bar"></div>
          </h1>
          <div className="eventcard">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="previousyearslider">
          <div className="sliderheading" data-aos="fade-up">
            <h1>
              Previous Events
              <span> Snaps</span>
            </h1>
          </div>

          <OwlCarousel
            className="owl-carousel"
            items={1}
            dots="true"
            autoplay="true"
            autoplayTimeout="5000"
            loop="true"
          >
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="speakerDetails">
          <h1 data-aos="fade-up">
            Our
            <span> Speakers</span>
          </h1>
          <div className="speakerscard">
            <Speakers
              name="RITESH THAKUR"
              position="co-ordinator,team-member"
            />
            <Speakers
              name="RITESH THAKUR"
              position="co-ordinator,team-member"
            />
            <Speakers
              name="RITESH THAKUR"
              position="co-ordinator,team-member"
            />
          </div>
        </div>
        <div className="prevoiusyearevents">
          <h1 data-aos="fade-up">
            Previous Year
            <span> Events</span>{" "}
          </h1>
          <div className="peviouvents">
            <Secondevent
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          saepe explicabo sequi sapiente quaerat officia vitae, at iste
          cupiditate provident? Quae asperiores nobis explicabo illo in
          obcaecati vitae dolore nostrum?"
            />
          </div>
        </div>
        <div className="previousyearslider">
          <div className="sliderheading" data-aos="fade-up">
            <h1>
              Previous Year
              <span> Snaps</span>
            </h1>
            <div className="bar"></div>
          </div>

          <OwlCarousel
            className="owl-carousel"
            items={1}
            dots="true"
            autoplay="true"
            autoplayTimeout="5000"
            loop="true"
          >
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
            <div className="sliderimg">
              <img src="./assets/images/team/ritesh-kumar.jpg" alt="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="previouseventsbulletent">
          <div className="bulletentheading" data-aos="fade-up">
            <div className="sliderheading">
              <h1>
                Previous Year
                <span> Bulletents</span>
              </h1>
            </div>
          </div>
          <div className="bulletentdetails" data-aos="fade-up">
            <ul>
              <li data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                nam ullam blanditiisLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quis nam ullam blanditiis
              </li>
              <li data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                nam ullam blanditiisLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quis nam ullam blanditiis
              </li>
              <li data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                nam ullam blanditiisLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quis nam ullam blanditiis
              </li>
              <li data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                nam ullam blanditiisLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quis nam ullam blanditiis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Highlights;
