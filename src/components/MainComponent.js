import React from "react";

//Pages
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
//End Pages

//Common Components
import Navbar from "./Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
//End Common Components

//Private Route
import PrivateRoute from "../PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

const MainComponent = () => {
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
          {/* End Pages */}
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default MainComponent;
