import React, { useState } from "react";
import "./Navbar.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const {currentUser, logout} = useAuth();
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
          <Link href="/" className="logo">
            <img src={HorizontalLogo} alt="Hult Prize BITD 2022 Logo" />
          </Link>
        </div>
        <div className={"desktopNavbar " + navbarClass}>
          <div className="navbarLeft">
            <a to="/" className="logo">
              <img src={HorizontalLogo} alt="" />
            </a>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/about-us">About</Link>
              <Link to="/team">Team 2022</Link>
              <Link to="/contact-us">Contact</Link>
              { currentUser ? ( <Link onClick={logout}>Log Out</Link>):(null)}
            </div>
          </div>
          <div className="navbarRight">
            <div className="social">
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
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
