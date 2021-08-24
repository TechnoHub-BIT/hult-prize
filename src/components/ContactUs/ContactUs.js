import React, { useState } from "react";
import "./ContactUs.css";
import AlertModal from "../AlertModal/AlertModal";
import PageHeader from "../PageHeader/PageHeader";
import { db } from "../../firebase";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  AOS.init({
    duration: 1000,
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");
  const [modal, showModal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var mnumber = Number(number);
    if (number && firstName && lastName && message && reason && email) {
      await db
        .collection("contactus")
        .add({
          firstName,
          lastName,
          message,
          mnumber,
          email,
          reason,
          createdAt: new Date(),
        })
        .then(() => {
          showModal(
            <AlertModal
              message="Your message has been submitted. Thank you for your feedback!"
              icon="successful.png"
              reload="true"
              close={closeModal}
            />
          );
        })
        .catch((error) => {
          showModal(
            <AlertModal
              message={error.message}
              icon="failed.png"
              reload="true"
              close={closeModal}
            />
          );
        });
    } else
      showModal(
        <AlertModal
          message="Please fill all the details"
          icon="exclamation.png"
          close={closeModal}
        />
      );
  };

  const closeModal = () => {
    showModal("");
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Contact Us | Hult Prize BITD 2022" />
        <meta
          name="description"
          content="Looking for someone to answer your queries? Send us a message and connect with us here. Our team of volunteers will help you guide your way through the Hult Prize 2022 competition. We will get you the help you need."
        />
      </Helmet>
      <PageHeader title="Contact Us" />
      {modal}
      <div className="contactUsContainer">
        <div className="section formSection">
          <h3 className="sectionTitle" data-aos="fade-up">
            Let's have a <span>Talk</span>
          </h3>
          <div className="content">
            <div className="details">
              <div className="header">
                <h4 className="title" data-aos="fade-up">
                  Contact Information
                </h4>
                <h5 className="subtitle" data-aos="fade-up">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </h5>
                <div className="links">
                  <div className="link" data-aos="fade-up">
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:+918234993336">+91-8234993336</a>
                  </div>
                  <div className="link" data-aos="fade-up">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:hultprize@gmail.com">hultprize@gmail.com</a>
                  </div>
                  <div className="link" data-aos="fade-up">
                    <i className="fas fa-map-marker-alt"></i>
                    <a
                      href="https://goo.gl/maps/5JyQq2DaKvn5YZYG7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bhilai Institue of Technology, Durg
                    </a>
                  </div>
                </div>
              </div>
              <div className="social">
                <a
                  href="https://facebook.com/bitd.hultprize/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/hultprize_bitd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com/company/hult-prize-bit-durg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="form">
              <h4 className="title" data-aos="fade-up">
                Send us a Message
              </h4>
              <form>
                <div className="grid2">
                  <div className="inputGroup" data-aos="fade-up">
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      placeholder="First Name*"
                      autoFocus
                      required
                    />
                    <label htmlFor="fname">First Name*</label>
                  </div>
                  <div className="inputGroup" data-aos="fade-up">
                    <input
                      type="text"
                      id="lname"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      placeholder="Last Name*"
                      required
                    />
                    <label htmlFor="lname">Last Name*</label>
                  </div>
                </div>
                <div className="grid2 mt2">
                  <div className="inputGroup" data-aos="fade-up">
                    <input
                      type="number"
                      id="mobile"
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                      placeholder="Mobile No.*"
                      required
                    />
                    <label htmlFor="mobile">Mobile No.*</label>
                  </div>
                  <div className="inputGroup" data-aos="fade-up">
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email*"
                      required
                    />
                    <label htmlFor="email">Email*</label>
                  </div>
                </div>
                <div className="checkBoxes mt2">
                  <h5
                    style={{ fontSize: "1rem", fontWeight: "500" }}
                    data-aos="fade-up"
                  >
                    Reason for contacting*:
                  </h5>
                  <div className="grid3" style={{ margin: "1.5em 0 0 0.5em" }}>
                    <div className="inputRadio" data-aos="fade-up">
                      <input
                        type="radio"
                        onChange={(e) => setReason(e.target.value)}
                        value="Team registration"
                        name="purpose"
                        id="registration"
                      />
                      <label htmlFor="registration">Team registration</label>
                    </div>
                    <div className="inputRadio" data-aos="fade-up">
                      <input
                        type="radio"
                        onChange={(e) => setReason(e.target.value)}
                        value="Sponsorship"
                        name="purpose"
                        id="sponsorship"
                      />
                      <label htmlFor="sponsorship">Sponsorship</label>
                    </div>
                    <div className="inputRadio" data-aos="fade-up">
                      <input
                        type="radio"
                        onChange={(e) => setReason(e.target.value)}
                        value="Mentorship"
                        name="purpose"
                        id="recruitment"
                      />
                      <label htmlFor="recruitment">Mentorship</label>
                    </div>
                  </div>
                </div>
                <div className="mt2">
                  <div className="inputGroup textarea" data-aos="fade-up">
                    <input
                      type="text"
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      placeholder="How can we help?*"
                      required
                    />
                    <label htmlFor="message">How can we help?*</label>
                  </div>
                </div>
                <div className="mt2">
                  <div className="inputGroup" data-aos="fade-left">
                    <button
                      type="button"
                      value="Submit"
                      onClick={handleSubmit}
                      style={{ alignSelf: "flex-end" }}
                    >
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
