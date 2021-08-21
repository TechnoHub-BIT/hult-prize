import React, { useState } from "react";
import "./ContactUs.css";
import AlertModal from "../AlertModal/AlertModal";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { db } from "../../firebase";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");
  const [loader, setLoader] = useState(false);
  const [modal, showModal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
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
          setLoader(false);
          showModal(
            <AlertModal
              message="Your Message has been submitted. Thank you for your feedback!"
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
          setLoader(false);
        });
    } else {
      alert("Please fill all the details")
      // showModal(
      //   <AlertModal
      //     message="Please fill all the details"
      //     icon="failed.png"
      //     reload="true"
      //     close={closeModal}
      //   />
      // );
    }
  };

  const closeModal = () => {
    showModal("");
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Contact Us" />
      {modal}
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
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Fade>
                <Fade left>
                  <a
                    href="https://instagram.com/hultprize_bitd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </Fade>
                <Fade left>
                  <a
                    href="https://linkedin.com/company/hult-prize-bit-durg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        placeholder="First Name"
                        autoFocus
                        required
                      />
                      <label htmlFor="fname">First Name</label>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="inputGroup">
                      <input
                        type="text"
                        id="lname"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        placeholder="Last Name"
                      />
                      <label htmlFor="lname">Last Name</label>
                    </div>
                  </Fade>
                </div>
                <div className="grid2 mt2">
                  <Fade up>
                    <div className="inputGroup">
                      <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </Fade>
                  <Fade up>
                    <div className="inputGroup">
                      <input
                        type="number"
                        id="mobile"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        placeholder="Mobile No."
                      />
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
                        <input
                          type="radio"
                          onChange={(e) => setReason(e.target.value)}
                          value="team-registraions"
                          name="purpose"
                          id="registration"
                        />
                        <label htmlFor="registration">Team registration</label>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="inputRadio">
                        <input
                          type="radio"
                          onChange={(e) => setReason(e.target.value)}
                          value="team-sponsorship"
                          name="purpose"
                          id="sponsorship"
                        />
                        <label htmlFor="sponsorship">Sponsorship</label>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="inputRadio">
                        <input
                          type="radio"
                          onChange={(e) => setReason(e.target.value)}
                          value="team-recruitment"
                          name="purpose"
                          id="recruitment"
                        />
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
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        placeholder="How can we help?"
                      />
                      <label htmlFor="message">How can we help?</label>
                    </div>
                  </Fade>
                </div>
                <div className="mt2">
                  <Fade right>
                    <div className="inputGroup">
                      <button
                        type="button"
                        value="Submit"
                        onClick={handleSubmit}
                        style={{ alignSelf: "flex-end" }}
                      >
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
