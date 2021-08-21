import React from "react";

//Pages
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import NewsList from "./News/NewsList/NewsList";
import SingleNews from "./News/SingleNews/SingleNews";
//End Pages

//Common Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from "react-reveal/globals";
//End Common Components

//Private Route
import PrivateRoute from "../PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

const MainComponent = () => {
  config({ ssrFadeout: true });

  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Navbar />
          {/* Pages */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/team" component={OurTeam} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/news" component={NewsList} />
          <Route exact path="/singlenews" component={SingleNews} />
          {/* End Pages */}
          <Footer />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default MainComponent;
