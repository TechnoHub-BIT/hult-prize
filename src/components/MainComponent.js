import React from "react";

//Pages
import Home from "./Home/Home";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default MainComponent;
