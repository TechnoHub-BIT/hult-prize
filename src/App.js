import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import config from "react-reveal/globals";
import Logo from "./img/logo-white.png";

config({ ssrFadeout: true });

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        {/*
            <div>
              <img src={ Logo } alt="TEDxBITD White Logo" />
              <h1>Excited, aren't we?</h1>
              <div className="socialMedia">
                  <a href="https://instagram.com/tedxbitd" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/TEDxBITD" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://facebook.com/TEDxBITD" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://linkedin.com/company/tedxbitd" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          */}
      </div>
    </BrowserRouter>
  );
};

export default App;
