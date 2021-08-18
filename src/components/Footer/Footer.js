import React from "react";
import "./Footer.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="footer">
        <div className="mainFooter">
          <div className="footerTop">
            <div className="description">
              <img src={HorizontalLogo} alt="Hult Prize BITD 2022 Logo" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam quidem voluptatibus corrupti ex, numquam ullam rem
                eaque repudiandae ipsum perspiciatis tempore architecto nihil
                unde quibusdam, dolore ducimus, rerum esse. Officiis illo, velit
                amet nihil animi voluptatem totam voluptates unde ipsa.
              </p>
              <div className="social">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about-us">About Hult Prize BITD</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <div className="links">
              <a href="/news">Latest News</a>
              <a href="#">About Hult Prize BITD</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="footerBottom">
            <div>Copyright &copy; Hult Prize BITD 2022</div>
            <div>
              Developed by-{" "}
              <span className="textTheme">Hult Prize Technical Team</span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
