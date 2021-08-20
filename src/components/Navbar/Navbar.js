import React, { useState } from "react";
import "./Navbar.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";

const Navbar = () => {
  const [navbarClass, toggleNavbar] = useState(false);
  const [menuIcon, setIcon] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="mobileNavbar">
          <div
            className={"hamburger " + menuIcon}
            onClick={() => {
              toggleNavbar(!navbarClass);
              setIcon(!menuIcon);
            }}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          <a href="/" className="logo">
            <img src={HorizontalLogo} alt="Hult Prize BITD 2022 Logo" />
          </a>
        </div>
        <div className={"desktopNavbar " + navbarClass}>
          <div className="navbarLeft">
            <a href="/" className="logo">
              <img src={HorizontalLogo} alt="" />
            </a>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about-us">About</a>
              <a href="/team">Team 2022</a>
              <a href="/contact-us">Contact</a>
            </div>
          </div>
          <div className="navbarRight">
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
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
