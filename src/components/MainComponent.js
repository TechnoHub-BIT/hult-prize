import React from "react";

//Common Components
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
//End Common Components

//Private Route
import PrivateRoute from "../PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

const mainComponent = (props) => {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <ScrollToTop />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default mainComponent;
