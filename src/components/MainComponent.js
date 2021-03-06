import React from "react";

//Pages
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Events from "./Events/Events";
import OurTeam from "./OurTeam/OurTeam";
import NewsList from "./News/NewsList/NewsList";
import SingleNews from "./News/SingleNews/SingleNews";
import TeamRegistration from "./TeamRegistration/TeamRegistration";
//End Pages

//Admin Pages
import Login from "./Admin/Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Slider from "./Admin/Slider/Slider";
import Documents from "./Admin/Documents/Documents";
import Messages from "./Admin/Messages/Messages";
import CreateNews from "./Admin/News/News";
//End Admin Pages

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
import DisplayDocuments from "./Admin/Documents/DisplayDocuments";
import DisplaySliders from "./Admin/Slider/DisplaySliders";
import DisplayNews from "./Admin/News/DisplayNews";
import teamRegistrations from "./Admin/TeamRegistrations/teamRegistrations";

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
          <Route exact path="/events" component={Events} />
          <Route exact path="/team" component={OurTeam} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/news" component={NewsList} />
          <Route exact path="/news/:id" component={SingleNews} />
          <Route exact path="/register" component={TeamRegistration} />
          <Route exact path="/team-registration" component={TeamRegistration} />
          <Route
            exact
            path="/campus-ambassador"
            render={() =>
              (window.location =
                "https://docs.google.com/forms/d/e/1FAIpQLScCrbUbh0KjCVBJH8VMzW5wiiew1YcQ7atJc1wJpVKppXrYjw/viewform")
            }
          />
          {/* End Pages */}

          {/* Admin Pages */}
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/admin/messages" component={Messages} />
          <PrivateRoute
            exact
            path="/admin/documents"
            component={DisplayDocuments}
          />
          <PrivateRoute
            exact
            path="/admin/sliders"
            component={DisplaySliders}
          />
          <PrivateRoute exact path="/admin/news" component={DisplayNews} />
          <PrivateRoute
            exact
            path="/admin/create-document"
            component={Documents}
          />
          <PrivateRoute exact path="/admin/create-slider" component={Slider} />
          <PrivateRoute
            exact
            path="/admin/create-news"
            component={CreateNews}
          />
          <PrivateRoute
            exact
            path="/admin/team-registrations"
            component={teamRegistrations}
          />
          {/* End Admin Pages */}

          <Footer />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default MainComponent;
