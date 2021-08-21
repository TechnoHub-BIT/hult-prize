import React, { useState } from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FAQ from "./FAQ";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

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
              style={{
                backgroundImage:
                  "url('https://drive.google.com/uc?export=view&id=" +
                  "1vIi-i6PjDTL9WvK1OAcRX-kUHtVDamVD" +
                  "')",
              }}
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
              style={{
                backgroundImage:
                  "url('https://drive.google.com/uc?export=view&id=" +
                  "1ie1AwpLPK4LorIDVAIkh1XcSBHvQco0t" +
                  "')",
              }}
            >
              <div className="content">
                <Fade up>
                  <h2 className="heading textTheme">Registrations are Live!</h2>
                  <h2 className="subHeading textWhite">
                    On-Campus Program 2021-22
                  </h2>
                  <a href="#" className="ctaBtn">
                    Register Now
                  </a>
                </Fade>
              </div>
            </div>
          </OwlCarousel>
        </div>
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
            <Fade down>
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
          </div>
          <Fade up>
            <div className="ctaBtn">
              <a href="/news">
                Read More&nbsp;&nbsp;
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </Fade>
        </div>
        <div className="section downloadsSection">
          <Fade up>
            <h3 className="sectionTitle">
              Download all <span>Event Documents</span>
            </h3>
          </Fade>
          <div className="downloadsGrid">
            <Fade up>
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
            </Fade>
            <Fade up>
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
            </Fade>
            <Fade up>
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
            </Fade>
            <Fade up>
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
            </Fade>
          </div>
          <Fade up>
            <div className="ctaBtn">
              <Link to="/news">
                View All&nbsp;&nbsp;
                <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </Fade>
        </div>
        <div className="section aboutHultSection">
          <Fade left>
            <div className="logo">
              <img
                src="./assets/images/logos/bit-vertical-black.png"
                alt="Hult Prize BITD 2022 Logo"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              provident quas fugiat! Unde asperiores nihil harum odit sint
              voluptates, accusamus magni quaerat cum necessitatibus? Iste
              repellendus repellat perferendis nisi doloremque earum placeat
              reiciendis autem, dicta, dolore pariatur neque labore qui quidem
              vel enim recusandae odit minus. Ratione delectus repudiandae
              rerum.
            </div>
          </Fade>
        </div>
        <div className="section contactUsSection">
          <Fade left>
            <h3 className="title">
              Still got <span className="textTheme">mixed up</span> thoughts?
              <br />
              We are always here.
            </h3>
          </Fade>
          <Fade right>
            <Link to="/contact-us">Contact Us</Link>
          </Fade>
        </div>
        <div className="section sponsorsSection">
          <Fade up>
            <h3 className="sectionTitle">
              Our <span>Sponsors</span>
            </h3>
          </Fade>
          <div className="sponsorsList">
            <Fade up>
              <div className="singleSponsor">
                <img
                  src="./assets/images/logos/zomato.png"
                  alt="Zomato- Hult Prize BITD 2022 Sponsor"
                />
                <h4 className="name">Zomato</h4>
                <h5 className="title">Food Partner</h5>
              </div>
            </Fade>
            <Fade up>
              <div className="singleSponsor">
                <img
                  src="./assets/images/logos/zomato.png"
                  alt="Zomato- Hult Prize BITD 2022 Sponsor"
                />
                <h4 className="name">Zomato</h4>
                <h5 className="title">Food Partner</h5>
              </div>
            </Fade>
            <Fade up>
              <div className="singleSponsor">
                <img
                  src="./assets/images/logos/zomato.png"
                  alt="Zomato- Hult Prize BITD 2022 Sponsor"
                />
                <h4 className="name">Zomato</h4>
                <h5 className="title">Food Partner</h5>
              </div>
            </Fade>
            <Fade up>
              <div className="singleSponsor">
                <img
                  src="./assets/images/logos/zomato.png"
                  alt="Zomato- Hult Prize BITD 2022 Sponsor"
                />
                <h4 className="name">Zomato</h4>
                <h5 className="title">Food Partner</h5>
              </div>
            </Fade>
          </div>
        </div>
        <div className="section faqSection">
          <Fade up>
            <h3 className="sectionTitle">
              <span>Frequently</span> Asked Questions
            </h3>
          </Fade>
          <section className="faqsList">
            <div className="container-fluid">
              <Fade up>
                <div className="singleFaq">
                  {faqs.map((faq, i) => (
                    <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
                  ))}
                </div>
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
