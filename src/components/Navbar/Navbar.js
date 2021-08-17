import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbarClass, toggleNavbar] = useState(false);

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="mobileNavbar">
          <div className="hamburger" onClick={() => toggleNavbar(!navbarClass)}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        <div className={"desktopNavbar " + navbarClass}>
          <div className="navbarLeft">
            <div className="logo">HULT PRIZE</div>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about-us">About</a>
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
      </div>
    </React.Fragment>
  );
};

export default Navbar;
