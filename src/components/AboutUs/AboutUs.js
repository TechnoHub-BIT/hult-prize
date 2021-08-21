import React, { useState } from "react";
import "./AboutUs.css";
import PageHeader from "../PageHeader/PageHeader";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const AboutUs = () => {
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
      <Helmet>
        <title>Hult Prize BITD 2022- About the Event</title>
        <meta name="title" content="Hult Prize BITD 2022- About the Event" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="About Us" />
      <div className="aboutUsContainer">
        <div className="section aboutHultSection">
          <Fade up>
            <h2 className="title">
              What is <span>Hult Prize?</span>
            </h2>
          </Fade>
          <Fade up>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corporis odit nesciunt exercitationem ratione, deserunt eligendi
              illo necessitatibus earum quae soluta est eaque mollitia qui,
              excepturi deleniti repellendus vel hic eum quam nostrum.
              Architecto iusto quia eligendi vitae est, alias voluptates facere
              dolores autem eius ut nesciunt quae dignissimos, doloremque ex in
              similique non laborum beatae sed exercitationem. Autem nam ex sed
              ipsa tenetur, consequatur modi doloribus odit obcaecati quidem. A
              ducimus saepe, asperiores error distinctio repudiandae laborum
              cupiditate libero!
            </p>
          </Fade>
        </div>
        <div className="section onCampusSection">
          <Fade up>
            <h2 className="title">
              The <span>On-Campus</span> Program
            </h2>
          </Fade>
          <Fade up>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corporis odit nesciunt exercitationem ratione, deserunt eligendi
              illo necessitatibus earum quae soluta est eaque mollitia qui,
              excepturi deleniti repellendus vel hic eum quam nostrum.
              Architecto iusto quia eligendi vitae est, alias voluptates facere
              dolores autem eius ut nesciunt quae dignissimos, doloremque ex in
              similique non laborum beatae sed exercitationem. Autem nam ex sed
              ipsa tenetur, consequatur modi doloribus odit obcaecati quidem. A
              ducimus saepe, asperiores error distinctio repudiandae laborum
              cupiditate libero!
            </p>
          </Fade>
        </div>
        <div className="section hultPrizeBitdSection">
          <Fade up>
            <h2 className="title">
              Hult Prize <span>BITD</span>
            </h2>
          </Fade>
          <Fade up>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corporis odit nesciunt exercitationem ratione, deserunt eligendi
              illo necessitatibus earum quae soluta est eaque mollitia qui,
              excepturi deleniti repellendus vel hic eum quam nostrum.
              Architecto iusto quia eligendi vitae est, alias voluptates facere
              dolores autem eius ut nesciunt quae dignissimos, doloremque ex in
              similique non laborum beatae sed exercitationem. Autem nam ex sed
              ipsa tenetur, consequatur modi doloribus odit obcaecati quidem. A
              ducimus saepe, asperiores error distinctio repudiandae laborum
              cupiditate libero!
            </p>
          </Fade>
        </div>
        <div className="section contactUsSection">
          <Fade left>
            <h2 className="title">
              Still got <span className="textTheme">mixed up</span> thoughts?
              <br />
              We are always here.
            </h2>
          </Fade>
          <Fade right>
            <a href="/contact-us">Contact Us</a>
          </Fade>
        </div>
        <div className="section eventBulletinsSection">
          <Fade up>
            <h2 className="sectionTitle">
              Here are the <span>Event Bulletins</span>
            </h2>
          </Fade>
          <div className="bulletinsList">
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-crown"></i>
                <h3 className="title">Prize Money</h3>
                <p className="desc">To be revealed soon</p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-users"></i>
                <h3 className="title">150+</h3>
                <p className="desc">
                  Students participated in Hult Prize BITD 2021.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-school"></i>
                <h3 className="title">45+</h3>
                <p className="desc">
                  Colleges are already a part of our campaign.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-school"></i>
                <h3 className="title">45+</h3>
                <p className="desc">
                  Colleges are already a part of our campaign.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-school"></i>
                <h3 className="title">45+</h3>
                <p className="desc">
                  Colleges are already a part of our campaign.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className="singleBulletin">
                <i className="fas fa-school"></i>
                <h3 className="title">45+</h3>
                <p className="desc">
                  Colleges are already a part of our campaign.
                </p>
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

export default AboutUs;
