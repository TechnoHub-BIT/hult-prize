import React from "react";
import "./OurTeam.css";
import PageHeader from "../PageHeader/PageHeader";
import SingleMember from "./SingleMember/SingleMember";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Team for the Year</title>
        <meta name="title" content="Meet the Hult Prize BITD 022 Team!" />
        <meta
          name="description"
          content="Complex tasks can be accomplished with just the right people working for the right goal. Meet the Hult Prize BIT Durg 2022 team - a team that is unconventionally different, yet mystifyingly similar."
        />
      </Helmet>
      <PageHeader title="Team 2022" />
      <div className="ourTeamContainer">
        <div className="section teamSection">
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Campus</span> Director
            </h2>
            <div className="members">
              <SingleMember
                name="Anubhav Bhatt"
                image="anubhav-bhatt"
                facebook="anubhav.bhatt.505"
                instagram="anubhav.bhatt.505"
                linkedin="anubhavbhatt552"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Co-Campus</span> Director
            </h2>
            <div className="members">
              <SingleMember
                name="Kritika Upadhyay"
                image="kritika-upadhyay"
                facebook="kritika.upadhyay.334"
                instagram="kritikkkkaaaaaaaa"
                linkedin="kritika-upadhyay-2001"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" id="technicalTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Technical</span> Team
            </h2>
            <div className="members members2">
              <SingleMember
                name="Aaryan Khandelwal"
                post="Head"
                image="aaryan-khandelwal"
                facebook="aaryan.khandelwal.731"
                instagram="aaryan610"
                linkedin="aaryan-khandelwal-89ba501a6"
                data-aos="fade-up"
              />
              <SingleMember
                name="Bavisetti Narayan"
                post="Associate"
                image="bavisetti-narayan"
                facebook="Narayan.bavisetti"
                instagram="bavisettinarayan"
                linkedin="bavisetti-narayan-a94b5918b"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Marketing</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Preeti Gabel"
                post="Head"
                image="preeti-gabel"
                instagram="preeti_gabel761"
                linkedin="preeti-gabel-3592151ab"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Public Relations</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Shalini Shrivas"
                post="Head"
                image="shalini-shrivas"
                instagram="shalini_shrivas13"
                linkedin="shalini-shrivas-8775501b1"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Sponsorship & Finance</span> Team
            </h2>
            <div className="members members3">
              <SingleMember
                name="Piyush Gupta"
                post="Head"
                image="piyush-gupta"
                instagram="pi_u_shhh"
                linkedin="piyush-gupta-41494021a"
                data-aos="fade-up"
              />

              <SingleMember
                name="Astha Jain"
                post="Associate"
                image="astha-jain"
                instagram="astha_jain_3"
                linkedin="astha-jain613"
                data-aos="fade-up"
              />

              <SingleMember
                name="Piyush Sahu"
                post="Associate"
                image="piyush-sahu"
                facebook="piyush.piyushsahu.75"
                instagram="piyus_h655"
                linkedin="piyush-sahu-aa95581a9"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Content</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Nandini Pandey"
                post="Head"
                image="nandini-pandey"
                instagram="nandinip_"
                linkedin="nandini-pandey-2a7ba9190"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Graphics</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Palak Dewangan"
                post="Head"
                image="palak-dewangan"
                facebook="palak.dewangan.58"
                instagram="palak_.dewangan"
                linkedin="palak-dewangan-352ba31a0"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="singleTeam" data-aos="fade-up">
            <h2 className="title">
              <span>Video</span> Team
            </h2>
            <div className="members">
              <SingleMember
                name="Mihir Panikar"
                post="Head"
                image="mihir-panikar"
                facebook=""
                instagram="mihirawr"
                linkedin=""
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurTeam;
