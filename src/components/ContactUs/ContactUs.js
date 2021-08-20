import React from "react";
import "./ContactUs.css";
import PageHeader from "../PageHeader/PageHeader";

const ContactUs = () => {
  return (
    <React.Fragment>
      <PageHeader title="Contact Us" />
      <div className="contactUsContainer">
        <div className="section formSection">
          <h3 className="sectionTitle">
            Let's have a <span>Talk</span>
          </h3>
          <div className="content">
            <div className="details">
              <div className="header">
                <h4 className="title">Contact Information</h4>
                <h5 className="subtitle">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </h5>

                <div className="links">
                  <div className="link">
                    <i className="fas fa-phone-alt"></i>
                    <a href="#">+91-9999999999</a>
                  </div>
                  <div className="link">
                    <i className="fas fa-envelope"></i>
                    <a href="#">support@hultprizebitd.in</a>
                  </div>
                  <div className="link">
                    <i className="fas fa-map-marker-alt"></i>
                    <a href="#">Bhilai Institue of Technology, Durg</a>
                  </div>
                </div>
              </div>
              <div className="social">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="form">
              <h4 className="title">Send us a Message</h4>
              <form>
                <div className="grid2">
                  <div className="inputGroup">
                    <input
                      type="text"
                      id="fname"
                      placeholder="First Name"
                      autoFocus
                    />
                    <label htmlFor="fname">First Name</label>
                  </div>
                  <div className="inputGroup">
                    <input type="text" id="lname" placeholder="Last Name" />
                    <label htmlFor="lname">Last Name</label>
                  </div>
                </div>
                <div className="grid2 mt2">
                  <div className="inputGroup">
                    <input type="text" id="email" placeholder="Email" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="inputGroup">
                    <input type="text" id="mobile" placeholder="Mobile No." />
                    <label htmlFor="mobile">Mobile No.</label>
                  </div>
                </div>
                <div className="checkBoxes mt2">
                  <h5 style={{ fontSize: "1rem", fontWeight: "500" }}>
                    Reason for contacting:
                  </h5>
                  <div className="grid3" style={{ margin: "1.5em 0 0 0.5em" }}>
                    <div className="inputRadio">
                      <input type="radio" name="purpose" id="registration" />
                      <label htmlFor="registration">Team registration</label>
                    </div>
                    <div className="inputRadio">
                      <input type="radio" name="purpose" id="sponsorship" />
                      <label htmlFor="sponsorship">Sponsorship</label>
                    </div>
                    <div className="inputRadio">
                      <input type="radio" name="purpose" id="recruitment" />
                      <label htmlFor="recruitment">Team Recruitment</label>
                    </div>
                  </div>
                </div>
                <div className="mt2">
                  <div className="inputGroup textarea">
                    <input
                      type="text"
                      id="message"
                      placeholder="How can we help?"
                    />
                    <label htmlFor="message">How can we help?</label>
                  </div>
                </div>
                <div className="mt2">
                  <div className="inputGroup">
                    <button type="button" style={{ alignSelf: "flex-end" }}>
                      Send Message
                    </button>
                  </div>
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
