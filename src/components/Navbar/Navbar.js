import React, { useState } from "react";
import "./Navbar.css";
import HorizontalLogo from "../../images/logos/horizontal-white.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
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
          <Link to="/" className="logo">
            <img src={HorizontalLogo} alt="Hult Prize BITD 2022 Logo" />
          </Link>
        </div>
        <div className={"desktopNavbar " + navbarClass}>
          <div className="navbarLeft">
            <Link to="/" className="logo">
              <img src={HorizontalLogo} alt="" />
            </Link>
            {currentUser ? (
              <div className="links">
                <Link
                  to="/admin/dashboard"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/team-registrations"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Registrations
                </Link>
                <Link
                  to="/admin/news"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  News
                </Link>
                <Link
                  to="/admin/documents"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Documents
                </Link>
                <Link
                  to="/admin/sliders"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Slider
                </Link>
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                    logout();
                  }}
                >
                  Log Out
                </a>
              </div>
            ) : (
              <div className="links">
                <Link
                  to="/"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/register"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Register
                </Link>
                <Link
                  to="/news"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  News
                </Link>
                <Link
                  to="/about-us"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  About
                </Link>
                <Link
                  to="/team"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Team 2022
                </Link>
                <Link
                  to="/campus-ambassador"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Campus Ambassador
                </Link>
                <Link
                  to="/contact-us"
                  onClick={() => {
                    toggleNavbar(!navbarClass);
                    setIcon(!menuIcon);
                  }}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
          <div className="navbarRight">
            <div className="social">
              <a
                href="https://facebook.com/bitd.hultprize/"
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
