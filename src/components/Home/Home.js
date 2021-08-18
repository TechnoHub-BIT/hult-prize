import React from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "../../images/dashboard/carousel/hult-prize-cover.png";
import Image2 from "../../images/dashboard/carousel/hult-prize-theme-cover.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homeContainer">
        <div className="mainCarousel">
          <OwlCarousel
            className="owl-carousel"
            items={1}
            dots="false"
            autoplay="true"
            autoplayTimeout="5000"
            loop="true"
          >
            <div
              className="item"
              style={{ backgroundImage: "url(" + Image2 + ")" }}
            >
              <div className="content">
                <h2 className="heading textTheme">2021-22 Theme Revealed</h2>
                <h2 className="subHeading textWhite">Download Brochure Now</h2>
                <a href="#" className="ctaBtn">
                  Download
                </a>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(" + Image + ")" }}
            >
              <div className="content">
                <h2 className="heading textTheme">Registrations are Live!</h2>
                <h2 className="subHeading textWhite">
                  On-Campus Program 2021-22
                </h2>
                <a href="#" className="ctaBtn">
                  Register Now
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="section latestNewsSection">
          <h3 className="sectionTitle">Latest News & Updates</h3>
          <div className="newsGrid">
            <div className="singleNews">
              <a href="#">
                <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
              </a>
              <a href="#" className="title">
                Whatever the news title be
              </a>
              <h4 className="date">
                <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug, 2021
              </h4>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate doloribus rem, enim alias deleniti, perferendis at
                ipsum reprehenderit cupiditate ea, est dolorum aut iure nulla.
                Voluptas nesciunt nemo minus amet temporibus dolor pariatur
                voluptates culpa repellendus, labore et nihil distinctio!
              </p>
            </div>
            <div className="singleNews">
              <a href="#">
                <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
              </a>
              <a href="#" className="title">
                Whatever the news title be
              </a>
              <h4 className="date">
                <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug, 2021
              </h4>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate doloribus rem, enim alias deleniti, perferendis at
                ipsum reprehenderit cupiditate ea, est dolorum aut iure nulla.
                Voluptas nesciunt nemo minus amet temporibus dolor pariatur
                voluptates culpa repellendus, labore et nihil distinctio!
              </p>
            </div>
            <div className="singleNews">
              <a href="#">
                <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
              </a>
              <a href="#" className="title">
                Whatever the news title be
              </a>
              <h4 className="date">
                <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug, 2021
              </h4>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate doloribus rem, enim alias deleniti, perferendis at
                ipsum reprehenderit cupiditate ea, est dolorum aut iure nulla.
                Voluptas nesciunt nemo minus amet temporibus dolor pariatur
                voluptates culpa repellendus, labore et nihil distinctio!
              </p>
            </div>
          </div>
          <div className="ctaBtn">
            <button type="button">
              Read More&nbsp;&nbsp;
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
