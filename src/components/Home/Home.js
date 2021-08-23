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
      question: "Who can participate?",
      answer:
        "Students from any college under CSVTU are invited to form teams of 3-4. You are considered a student if, at the time of application submission, you have not yet graduated. Alumni and faculty are not allowed to be official team members.",
      open: true,
    },
    {
      question: "How do I register for the Hult Prize?",
      answer:
        "To register for the On-campus BIT Durg Hult Prize event, the registrations will be open soon. To get quick updates, stay in touch with us on our social media handles.",
      open: false,
    },
    {
      question: "What happens to the teams who don’t win the competition?",
      answer:
        "Teams that compete in their local Hult Prize On-campus competition and do not win can still apply to participate in one of the +25 Regional Summits through the general Hult Prize application window.",
      open: false,
    },
    {
      question: "How will the teams be judged at the Hult Prize On-campus?",
      answer:
        "The Hult Prize BITD team brings esteemed judges every year to analyze and judge the teams. The criteria set for the judgment will be explained to the teams before the event.",
      open: false,
    },
    {
      question: "Do participants get any resources? If yes, then what?",
      answer:
        "A wide range of resources is made accessible to students who decide to enter the Hult Prize, including one million dollars in start-up capital to the winner along with an ecosystem that constitutes mentors, judges, and others via the Hult Prize Accelerator Program.<br /><br />Alongside the resources provided by the Hult Prize, the BIT- D Team will be readily available to address any difficulties faced by the teams.",
      open: false,
    },
    {
      question: "What if a team cannot afford the costs?",
      answer:
        "One of the most important parts of being an entrepreneur is the ability to raise funds.<br /><br />Historically, selected teams have not had an issue coming up with the funding required to attend one of our regional events. Oftentimes universities afford the costs associated with travel and lodging, and in other cases, teams have crowdfunded their way to the city of their choice.<br /><br />Think of this as the first challenge you will face as an up-and-coming start-up.",
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
              if (index < 3)
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
                        {item.title.length < 50
                          ? item.title
                          : item.title.substring(0, 50) + "..."}
                      </Link>
                      <h4 className="date">
                        <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                        {Moment(item.date).format("DD MMMM YYYY")}
                      </h4>
                      <p className="description">
                        {item.shortDescription.length < 300
                          ? item.shortDescription
                          : item.shortDescription.substring(0, 300) + "..."}
                      </p>
                    </div>
                  </Fade>
                );
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
        {/* <div className="section sponsorsSection">
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
          </div>
        </div> */}
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
