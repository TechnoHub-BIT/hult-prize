import React from "react";
import "./Footer.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="mainFooter">
          <div className="footerTop">
            <div className="description">
              <img
                src={HorizontalLogo}
                alt="Hult Prize BITD 2022 Logo"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam quidem voluptatibus corrupti ex, numquam ullam rem
                eaque repudiandae ipsum perspiciatis tempore architecto nihil
                unde quibusdam, dolore ducimus, rerum esse. Officiis illo, velit
                amet nihil animi voluptatem totam voluptates unde ipsa.
              </p>
              <div className="social">
                <a
                  href="https://facebook.com/bitd.hultprize/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <i className="fab fa-facebook"></i>
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
            <div className="links">
              <Link to="/" data-aos="fade-up">
                Home
              </Link>
              <Link to="/about-us" data-aos="fade-up">
                About Hult Prize BITD
              </Link>
              <Link to="/contact-us" data-aos="fade-up">
                Contact Us
              </Link>
            </div>
            <div className="links">
              <Link to="/news" data-aos="fade-up">
                Latest News
              </Link>

              {/* <Link to="/documents" data-aos="fade-up">
                Documents
              </Link> */}

              <Link to="/team" data-aos="fade-up">
                Team 2022
              </Link>
            </div>
          </div>
          <div className="footerBottom">
            <div>Copyright &copy; Hult Prize BITD 2022</div>
            <div className="developedBy">
              Developed by{" "}-{" "}
              <Link to="/team#technicalTeam" className="textTheme">
                Hult Prize Technical Team
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
