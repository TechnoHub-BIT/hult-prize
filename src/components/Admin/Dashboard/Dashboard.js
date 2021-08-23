import React from "react";
import "./Dashboard.css";
import PageHeader from "../../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageHeader title="Admin Dashboard" />
      <div className="dashboardContainer">
        <Fade up>
          <div className="buttons">
            <Link to="/admin/documents">
              <button type="button">View Downloads</button>
            </Link>
            <Link to="/admin/messages">
              <button type="button">View Received Messages</button>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/admin/slider">
              <button type="button">Create Slider</button>
            </Link>
            <Link to="/admin/news">
              <button type="button">Create News</button>
            </Link>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
