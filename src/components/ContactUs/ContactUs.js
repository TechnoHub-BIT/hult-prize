import React from "react";
import "./ContactUs.css";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Contact Us" />
      <div className="contactUsContainer">
        <div className="section formSection">
          <Fade up>
            <h3 className="sectionTitle">
              Let's have a <span>Talk</span>
            </h3>
          </Fade>
          <div className="content">
            <div className="details">
              <div className="header">
                <Fade up>
                  <h4 className="title">Contact Information</h4>
                </Fade>
                <Fade up>
                  <h5 className="subtitle">
                    Fill up the form and our team will get back to you within 24
                    hours.
                  </h5>
                </Fade>
                <div className="links">
                  <Fade up>
                    <div className="link">
                      <i className="fas fa-phone-alt"></i>
                      <a href="#">+91-9999999999</a>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="link">
                      <i className="fas fa-envelope"></i>
                      <a href="#">support@hultprizebitd.in</a>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="link">
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="#">Bhilai Institue of Technology, Durg</a>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="social">
                <Fade left>
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Fade>
                <Fade left>
                  <a href="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Fade>
                <Fade left>
                  <a href="https://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Fade>
              </div>
            </div>
            <div className="form">
              <Fade up>
                <h4 className="title">Send us a Message</h4>
              </Fade>
              <form>
                <div className="grid2">
                  <Fade up>
                    <div className="inputGroup">
                      <input
                        type="text"
                        id="fname"
                        placeholder="First Name"
                        autoFocus
                      />
                      <label htmlFor="fname">First Name</label>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="inputGroup">
                      <input type="text" id="lname" placeholder="Last Name" />
                      <label htmlFor="lname">Last Name</label>
                    </div>
                  </Fade>
                </div>
                <div className="grid2 mt2">
                  <Fade up>
                    <div className="inputGroup">
                      <input type="text" id="email" placeholder="Email" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="inputGroup">
                      <input type="text" id="mobile" placeholder="Mobile No." />
                      <label htmlFor="mobile">Mobile No.</label>
                    </div>
                  </Fade>
                </div>
                <div className="checkBoxes mt2">
                  <Fade up>
                    <h5 style={{ fontSize: "1rem", fontWeight: "500" }}>
                      Reason for contacting:
                    </h5>
                  </Fade>
                  <div className="grid3" style={{ margin: "1.5em 0 0 0.5em" }}>
                    <Fade up>
                      <div className="inputRadio">
                        <input type="radio" name="purpose" id="registration" />
                        <label htmlFor="registration">Team registration</label>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="inputRadio">
                        <input type="radio" name="purpose" id="sponsorship" />
                        <label htmlFor="sponsorship">Sponsorship</label>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="inputRadio">
                        <input type="radio" name="purpose" id="recruitment" />
                        <label htmlFor="recruitment">Team Recruitment</label>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="mt2">
                  <Fade up>
                    <div className="inputGroup textarea">
                      <input
                        type="text"
                        id="message"
                        placeholder="How can we help?"
                      />
                      <label htmlFor="message">How can we help?</label>
                    </div>
                  </Fade>
                </div>
                <div className="mt2">
                  <Fade right>
                    <div className="inputGroup">
                      <button type="button" style={{ alignSelf: "flex-end" }}>
                        Send Message
                      </button>
                    </div>
                  </Fade>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
