import React, { useState } from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "../../images/dashboard/carousel/hult-prize-cover.png";
import Image2 from "../../images/dashboard/carousel/hult-prize-theme-cover.jpg";
import FAQ from "./FAQ";

const Home = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "Who are the speakers?",
      answer:
        "<strong>TEDxBITD</strong> is aiming to bring together a group of numerous inspiring ideas to the main stage. To get a better knowledge of the speakers, <a href='/speakers'>visit here</a>, else stay connected with us on our social media handles.",
      open: true,
    },
    {
      question: "Who can attend TEDxBITD?",
      answer:
        "<strong>TEDxBITD</strong> is an independently organized event under the TEDx banner. Anyone who wishes to be a part of the first event can register and attend the event. <a href='/contact'>Contact us</a> for more information.",
      open: false,
    },
    {
      question: "Where is the event venue?",
      answer:
        "<strong>TEDxBITD</strong> is looking forward to hosting numerous esteemed speakers and a great audience via online platform. <a href='/contact'>Contact us</a> for more information.",
      open: false,
    },
    {
      question: "How long will be the event?",
      answer:
        "<strong>TEDxBITD</strong> is an all-day event, starting from 10:00 am onwards. Schedule will be uploaded <a href='/schedule'>here</a> soon.",
      open: false,
    },
    {
      question:
        "When will the registrations start/end? Can tickets be bought at the door?",
      answer:
        "The registrations will start soon. Stay connected with us on our social media for recent updates. <a href='/contact'>Contact us</a> for more information.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

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
          <h3 className="sectionTitle">
            <span>Latest</span> News & Updates
          </h3>
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
                tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Voluptate doloribus rem, enim alias deleniti, perferendis
                at ipsum reprehenderit cupiditate ea, est dolorum aut iure
                nulla. Voluptas nesciunt nemo minus amet temporibus dolor
                pariatur voluptates culpa repellendus, labore et nihil
                distinctio!
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
            <a href="/news">
              Read More&nbsp;&nbsp;
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
        <div className="section downloadsSection">
          <h3 className="sectionTitle">
            Download all <span>Event Documents</span>
          </h3>
          <div className="downloadsGrid">
            <a href="#" className="singleDownload">
              <div className="left">
                <h4 className="title">Hult Prize 2022 Theme</h4>
                <h5 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h5>
              </div>
              <div className="right">
                <a href="#" class="downloadBtn">
                  Download
                </a>
              </div>
            </a>
            <a href="#" className="singleDownload">
              <div className="left">
                <h4 className="title">Hult Prize 2022 Theme</h4>
                <h5 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h5>
              </div>
              <div className="right">
                <a href="#" class="downloadBtn">
                  Download
                </a>
              </div>
            </a>
            <a href="#" className="singleDownload">
              <div className="left">
                <h4 className="title">Hult Prize 2022 Theme</h4>
                <h5 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h5>
              </div>
              <div className="right">
                <a href="#" class="downloadBtn">
                  Download
                </a>
              </div>
            </a>
            <a href="#" className="singleDownload">
              <div className="left">
                <h4 className="title">Hult Prize 2022 Theme</h4>
                <h5 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;18 Aug,
                  2021
                </h5>
              </div>
              <div className="right">
                <a href="#" class="downloadBtn">
                  Download
                </a>
              </div>
            </a>
          </div>
          <div className="ctaBtn">
            <a href="/news">
              View All&nbsp;&nbsp;
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
        <div className="section aboutHultSection">
          <div className="logo">
            <img
              src="./assets/images/logos/bit-vertical-black.png"
              alt="Hult Prize BITD 2022 Logo"
            />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            provident quas fugiat! Unde asperiores nihil harum odit sint
            voluptates, accusamus magni quaerat cum necessitatibus? Iste
            repellendus repellat perferendis nisi doloremque earum placeat
            reiciendis autem, dicta, dolore pariatur neque labore qui quidem vel
            enim recusandae odit minus. Ratione delectus repudiandae rerum.
          </div>
        </div>
        <div className="section aboutUsSection">
          <h3 className="title">
            Still don't know what's{" "}
            <span className="textTheme">Hult Prize?</span>
          </h3>
          <a href="/about-us">Know More</a>
        </div>
        <div className="section sponsorsSection">
          <h3 className="sectionTitle">
            Our <span>Sponsors</span>
          </h3>
          <div className="sponsorsList">
            <div className="singleSponsor">
              <img
                src="./assets/images/logos/zomato.png"
                alt="Zomato- Hult Prize BITD 2022 Sponsor"
              />
              <h4 className="name">Zomato</h4>
              <h5 className="title">Food Partner</h5>
            </div>
            <div className="singleSponsor">
              <img
                src="./assets/images/logos/zomato.png"
                alt="Zomato- Hult Prize BITD 2022 Sponsor"
              />
              <h4 className="name">Zomato</h4>
              <h5 className="title">Food Partner</h5>
            </div>
            <div className="singleSponsor">
              <img
                src="./assets/images/logos/zomato.png"
                alt="Zomato- Hult Prize BITD 2022 Sponsor"
              />
              <h4 className="name">Zomato</h4>
              <h5 className="title">Food Partner</h5>
            </div>
            <div className="singleSponsor">
              <img
                src="./assets/images/logos/zomato.png"
                alt="Zomato- Hult Prize BITD 2022 Sponsor"
              />
              <h4 className="name">Zomato</h4>
              <h5 className="title">Food Partner</h5>
            </div>
          </div>
        </div>
        <div className="section faqSection">
          <h3 className="sectionTitle">
            <span>Frequently</span> Asked Questions
          </h3>
          <section className="faqsList">
            <div className="container-fluid">
              <div className="singleFaq">
                {faqs.map((faq, i) => (
                  <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
