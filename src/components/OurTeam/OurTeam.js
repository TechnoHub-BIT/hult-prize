import React from "react";
import "./OurTeam.css";
import PageHeader from "../PageHeader/PageHeader";
import SingleMember from "./SingleMember/SingleMember";

const OurTeam = () => {
  return (
    <React.Fragment>
      <PageHeader title="Team 2022" />
      <div className="ourTeamContainer">
        <div className="section teamSection">
          <div className="singleTeam">
            <h2 className="title">
              <span>Campus</span> Director
            </h2>
            <div className="members">
              <SingleMember
                name="Anubhav Bhatt"
                image="anubhav-bhatt"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Co-Campus</span> Director
            </h2>
            <div className="members">
              <SingleMember
                name="Kritika Upadhyay"
                image="kritika-upadhyay"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam" id="technicalTeam">
            <h2 className="title">
              <span>Technical</span> Team
            </h2>
            <div className="members members2">
              <SingleMember
                name="Aaryan Khandelwal"
                post="Head"
                image="aaryan-khandelwal"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
              <SingleMember
                name="Bavisetti Narayan"
                post="Associate"
                image="bavisetti-narayan"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Marketing</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Preeti Gabel"
                post="Head"
                image="preeti-gabel"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Public Relations</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Shalini Shrivas"
                post="Head"
                image="shalini-shrivas"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Sponsorship & Finance</span> Team
            </h2>
            <div className="members members3">
              <SingleMember
                name="Piyush Gupta"
                post="Head"
                image="piyush-gupta"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />

              <SingleMember
                name="Astha Jain"
                post="Associate"
                image="astha-jain"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />

              <SingleMember
                name="Piyush Sahu"
                post="Associate"
                image="piyush-sahu"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Content</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Nandini Pandey"
                post="Head"
                image="nandini-pandey"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Graphics</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Palak Dewangan"
                post="Head"
                image="palak-dewangan"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
          <div className="singleTeam">
            <h2 className="title">
              <span>Video</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Mihir Panikar"
                post="Head"
                image="mihir-panikar"
                facebook=""
                instagram="aaryan610"
                linkedin=""
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurTeam;
