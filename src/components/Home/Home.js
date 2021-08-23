import React, { useState, useEffect } from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FAQ from "./FAQ";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import Moment from "moment";

const Home = () => {
  const [downloads, setDownloads] = useState([]);
  useEffect(() => {
    db.collection("Documents")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDownloads(data);
      });
  }, []);

  const [slider, setSliders] = useState([]);
  useEffect(() => {
    db.collection("Slider")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSliders(data);
      });
  }, []);

  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("News")
        .orderBy("date", "desc")
        .onSnapshot(function (data) {
          setNews(
            data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
    };
    fetchdata();
  }, []);

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

  const [documentsLength, setLength] = useState(6);
  const [ctaBtn, toggleBtn] = useState("");

  return (
    <React.Fragment>
      <div className="homeContainer">
        <div className="mainCarousel">
          {slider.length && (
            <Fade down>
              <OwlCarousel
                className="owl-carousel"
                items={1}
                dots="false"
                autoplay="true"
                autoplayTimeout="5000"
                loop="true"
              >
                {slider.map((item) => {
                  return (
                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "url('https://drive.google.com/uc?export=view&id=" +
                          `${item.imageUrl}` +
                          "')",
                      }}
                    >
                      <div className="content">
                        <h2 className="heading textTheme">{item.title}</h2>
                        <h2 className="subHeading textWhite">
                          {item.subTitle}
                        </h2>
                        <a
                          href={`${item.hyperLink}`}
                          target="_blank"
                          className="ctaBtn"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </Fade>
          )}
        </div>
        <div className="section latestNewsSection">
          <Fade up>
            <h3 className="sectionTitle">
              <span>Latest</span> News & Updates
            </h3>
          </Fade>
          <div className="newsGrid">
            {news.map((item, index) => {
              if (index < 3) {
                console.log(item.content.length);
                return (
                  <Fade up>
                    <div className="singleNews" key={index}>
                      <Link to={`/news/` + `${item.id}`}>
                        <img
                          src={
                            `https://drive.google.com/uc?export=view&id=` +
                            `${item.imageUrl}`
                          }
                          alt={item.title}
                        />
                      </Link>
                      <Link to={`/news/` + `${item.id}`} className="title">
                        {item.title}
                      </Link>
                      <h4 className="date">
                        <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                        {Moment(item.date).format("DD MMMM YYYY")}
                      </h4>
                      <p className="description"> {item.shortDescription}</p>
                    </div>
                  </Fade>
                );
              }
            })}
          </div>
          <Fade up>
            <div style={{ textAlign: "center" }}>
              <Link to="/news" className="ctaBtn">
                Read More&nbsp;&nbsp;
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </Fade>
          <Fade up></Fade>
        </div>
        <div className="section downloadsSection">
          <Fade up>
            <h3 className="sectionTitle">
              Download all <span>Event Documents</span>
            </h3>
          </Fade>
          <div className="downloadsGrid">
            {downloads.map((item, index) => {
              if (index < documentsLength)
                return (
                  <Fade up>
                    <div className="singleDownload">
                      <div className="left">
                        <h4 className="title">{item.title}</h4>
                        <h5 className="date">
                          <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                          {Moment(item.date).format("DD MMMM YYYY")}
                        </h5>
                      </div>
                      <div className="right">
                        <a
                          href={`${item.url}`}
                          target="_blank"
                          className="downloadBtn"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </Fade>
                );
            })}
          </div>
          {downloads.length > documentsLength ? (
            <Fade up>
              <div className={ctaBtn} style={{ textAlign: "center" }}>
                <div
                  className="ctaBtn"
                  onClick={() => {
                    setLength(downloads.length);
                    toggleBtn("hideBtn");
                  }}
                >
                  View All&nbsp;&nbsp;
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </Fade>
          ) : null}
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
