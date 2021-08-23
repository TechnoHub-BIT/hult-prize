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
        <div className="section navigationSection">
          <h2 className="sectionTitle">
            Manage <span>Website</span>
          </h2>
          <div className="cardsGrid">
            <div className="singleCard">
              <h3 className="title">Uploaded Documents</h3>
              <h4 className="total">7 Documents</h4>
              <Link to="/admin/documents" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Received Messages</h3>
              <h4 className="total">9 Messages</h4>
              <Link to="/admin/messages" className="button">
                <i className="fas fa-eye"></i>&nbsp;&nbsp;View
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Created Sliders</h3>
              <h4 className="total">4 Sliders</h4>
              <Link to="/admin/slider" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
            <div className="singleCard">
              <h3 className="title">Uploaded News</h3>
              <h4 className="total">3 News</h4>
              <Link to="/admin/news" className="button">
                <i className="fas fa-wrench"></i>&nbsp;&nbsp;Manage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
