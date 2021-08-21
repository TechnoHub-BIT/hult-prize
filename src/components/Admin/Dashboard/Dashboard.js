import React from "react";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="DashBoard" />
      <div className="dashboardCont">
        <Fade up>
          <div className="buttons">
            <Link to="/downloads">
              <button type="button">Create Downloads</button>
            </Link>
            <Link to="/messages">
              <button type="button">View Received Messages</button>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/slider">
              <button type="button">Create Slider</button>
            </Link>
            <Link to="/create-news">
              <button type="button">Create News</button>
            </Link>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;