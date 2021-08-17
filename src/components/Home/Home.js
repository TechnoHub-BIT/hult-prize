import React from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainCarousel">
        <OwlCarousel
          className="owl-carousel"
          items={1}
          autoplay="true"
          autoplayTimeout="3000"
          loop="true"
        >
          <div className="item">
            <img
              src="./assets/images/dashboard/carousel/hult-prize-cover.png"
              alt="Hult Prize BITD 2022 Cover"
            />
          </div>
          <div className="item">
            <img
              src="./assets/images/dashboard/carousel/hult-prize-cover.png"
              alt="Hult Prize BITD 2022 Cover"
            />
          </div>
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
};

export default Home;
