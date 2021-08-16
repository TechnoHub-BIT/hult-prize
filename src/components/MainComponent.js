import React, { useEffect } from "react";

//Common Components
import Navbar from "./HeaderComponents/NavbarComponents/NavbarComponent";
import Footer from "./FooterComponents/FooterComponent";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
//End Common Components

//Pages
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponent/AboutUsComponent";
import Speakers from "./SpeakersComponent/SpeakersComponent";
import Team from "./TeamComponent/TeamComponent";
import Sponsors from "./SponsorsComponent/SponsorsComponent";
import Contact from "./ContactUsComponent/ContactUsComponent";
import Schedule from "./ScheduleComponent/ScheduleComponent";
import Book from "./BookingComponent/BookingComponent";
import OpenMicGuidelines from "./OpenMicComponent/OpenMicGuidelinesComponent/OpenMicGuidelinesComponent";
import OpenMicApply from "./OpenMicComponent/OpenMicApplyComponent/OpenMicApplyComponent";
import CampusAmbassador from "./CampusAmbassadorComponent/CampusAmbassadorComponent";
import TicketBooking from "./TicketBookingComponent/TicketBookingComponent";
import EventHighlights from "./EventHighlightsComponent/EventHighlightsComponent";
//End Pages

//Blog Components
import Blog from "./BlogComponent/BlogListComponent/BlogListComponent";
import SingleBlog from "./BlogComponent/SingleBlogComponent/SIngleBlogComponent";

import BlogGuidelines from "./BlogComponent/BlogGuidelinesComponent/BlogGuidelinesComponent";
import SubmitBlog from "./BlogComponent/SubmitBlogComponent/SubmitBlogComponent";
//End Blog Components

//Admin Components
import AdminLogin from "./AdminComponent/LoginComponent/LoginComponent";
import AdminDashboard from "./AdminComponent/DashboardComponent/DashboardComponent";
import BlogsList from "./AdminComponent/BlogListComponent/BlogListComponent";
import MessagesList from "./AdminComponent/MessagesListComponent/MessagesListComponent";
import AddBlog from "./AdminComponent/AddBlogComponent/AddBlogComponent";
import OpenMicList from "./AdminComponent/OpenMicListComponent/OpenMicListComponent";
import SpeakersList from "./AdminComponent/SpeakersListComponent/SpeakersListComponent";
import CampusAmbassadorsList from "./AdminComponent/CampusAmbassadorComponent/CampusAmbassadorComponent";
import PromocodeBookings from "./AdminComponent/PromocodeBookingsComponent/PromocodeBookingsComponent";
//End Admin Components

//Private Route
import PrivateRoute from "../PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";
import speakersListComponent from "./AdminComponent/SpeakersListComponent/SpeakersListComponent";

const mainComponent = (props) => {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <ScrollToTop />

          {window.location.pathname !== "/book" ? <Navbar /> : null}

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/speakerslist" component={speakersListComponent} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/campusambassador" component={CampusAmbassador} />
          {/* <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/openmicguidelines" component={OpenMicGuidelines} />
          <Route exact path="/apply" component={OpenMicApply} /> */}
          <Route exact path="/book" component={Book} />
          <Route exact path="/highlights" component={EventHighlights} />

          {/* Blog Components */}
          {/* <Route exact path="/blog" component={Blog} />
          <Route exact path="/singleblog/:id" component={SingleBlog} />
          <Route exact path="/guidelines" component={BlogGuidelines} />
          <Route exact path="/submitblog" component={SubmitBlog} /> */}
          {/* End Blog Components */}

          {/* Private Route */}
          <Route exact path="/login" component={AdminLogin} />
          <PrivateRoute exact path="/addblog" component={AddBlog} />
          <PrivateRoute exact path="/dashboard" component={AdminDashboard} />
          <PrivateRoute exact path="/bloglist" component={BlogsList} />
          <PrivateRoute exact path="/messages" component={MessagesList} />
          {/* <PrivateRoute exact path="/openmiclist" component={OpenMicList} /> */}
          <PrivateRoute exact path="/nominations" component={SpeakersList} />
          <PrivateRoute
            exact
            path="/calist"
            component={CampusAmbassadorsList}
          />
          <PrivateRoute exact path="/bookings" component={PromocodeBookings} />
          {/* End Private Route */}

          {/* <Route exact path="/viptickets" component={TicketBooking} />
          <Route exact path="/speakertickets" component={TicketBooking} /> */}

          {window.location.pathname !== "/book" ? <Footer /> : null}
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default mainComponent;
