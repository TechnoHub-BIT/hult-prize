import React from "react";
import "./NewsList.css";
import PageHeader from "../../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const NewsList = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Latest Event News</title>
        <meta name="title" content="Hult Prize BITD 2022- Latest Event News" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Latest News" />
      <div className="newsListContainer">
        <div className="section latestNewsSection">
          <Fade up>
            <h3 className="sectionTitle">
              <span>Latest</span> News & Updates
            </h3>
          </Fade>
          <div className="newsGrid">
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptate doloribus rem, enim alias deleniti,
                  perferendis at ipsum reprehenderit cupiditate ea, est dolorum
                  aut iure nulla. Voluptas nesciunt nemo minus amet temporibus
                  dolor pariatur voluptates culpa repellendus, labore et nihil
                  distinctio!
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate doloribus rem, enim alias deleniti, perferendis at
                  ipsum reprehenderit cupiditate ea, est dolorum aut iure nulla.
                  Voluptas nesciunt nemo minus amet temporibus dolor pariatur
                  voluptates culpa repellendus, labore et nihil distinctio!
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptate doloribus rem, enim alias deleniti,
                  perferendis at ipsum reprehenderit cupiditate ea, est dolorum
                  aut iure nulla. Voluptas nesciunt nemo minus amet temporibus
                  dolor pariatur voluptates culpa repellendus, labore et nihil
                  distinctio!
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptate doloribus rem, enim alias deleniti,
                  perferendis at ipsum reprehenderit cupiditate ea, est dolorum
                  aut iure nulla. Voluptas nesciunt nemo minus amet temporibus
                  dolor pariatur voluptates culpa repellendus, labore et nihil
                  distinctio!
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptate doloribus rem, enim alias deleniti,
                  perferendis at ipsum reprehenderit cupiditate ea, est dolorum
                  aut iure nulla. Voluptas nesciunt nemo minus amet temporibus
                  dolor pariatur voluptates culpa repellendus, labore et nihil
                  distinctio!
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleNews">
                <a href="#">
                  <img src="./assets/images/dashboard/news/news-1.jpg" alt="" />
                </a>
                <a href="#" className="title">
                  Whatever the news title be
                </a>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h4>
                <p className="description">
                  tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptate doloribus rem, enim alias deleniti,
                  perferendis at ipsum reprehenderit cupiditate ea, est dolorum
                  aut iure nulla. Voluptas nesciunt nemo minus amet temporibus
                  dolor pariatur voluptates culpa repellendus, labore et nihil
                  distinctio!
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsList;
