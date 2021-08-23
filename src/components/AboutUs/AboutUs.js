import React, { useState } from "react";
import "./AboutUs.css";
import PageHeader from "../PageHeader/PageHeader";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const AboutUs = () => {
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
