import React from "react";
import "./Footer.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="mainFooter">
          <div className="footerTop">
            <div className="description">
              <Fade up>
                <img src={HorizontalLogo} alt="Hult Prize BITD 2022 Logo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam quidem voluptatibus corrupti ex, numquam ullam rem
                  eaque repudiandae ipsum perspiciatis tempore architecto nihil
                  unde quibusdam, dolore ducimus, rerum esse. Officiis illo,
                  velit amet nihil animi voluptatem totam voluptates unde ipsa.
                </p>
              </Fade>
              <div className="social">
                <Fade up>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com/hultprize_bitd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
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
            <div className="links">
              <Fade up>
                <a href="/">Home</a>
                <a href="/about-us">About Hult Prize BITD</a>
                <a href="/contact-us">Contact Us</a>
              </Fade>
            </div>
            <div className="links">
              <Fade up>
                <a href="/news">Latest News</a>
                <a href="/documents">Documents</a>
                <a href="/team">Team 2022</a>
              </Fade>
            </div>
          </div>
          <div className="footerBottom">
            <Fade left>
              <div>Copyright &copy; Hult Prize BITD 2022</div>
            </Fade>
            <Fade right>
              <div>
                Developed by-{" "}
                <a href="/team#technicalTeam" className="textTheme">
                  Hult Prize Technical Team
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
