import React from "react";
import "./TeamRegistration.css";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamRegistration = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Register your Team</title>
        <meta
          name="title"
          content="Register your Team for Hult Prize BITD 2022"
        />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Team Registration" />
      <div className="registerContainer">
        <div className="section formSection">
          <h2 className="sectionTitle">
            Register your <span>Team</span>
          </h2>
          <form action="">
            <div className="row" style={{ gridRowGap: "2em" }}>
              <div className="col-lg-12">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tname"
                    id="tname"
                    placeholder="Team Name*"
                    autoFocus
                    required
                  />
                  <label htmlFor="tname">Team Name*</label>
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="sectionSubtitle">
                  Team <span>Leader</span>
                </h3>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tlname"
                    id="tlname"
                    placeholder="Name*"
                    required
                  />
                  <label htmlFor="tlname">Name*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tlmobile"
                    id="tlmobile"
                    placeholder="Mobile No.*"
                    required
                  />
                  <label htmlFor="tlmobile">Mobile No.*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="email"
                    name="tlemail"
                    id="tlemail"
                    placeholder="Email*"
                    required
                  />
                  <label htmlFor="tlemail">Email*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tlsemester"
                    id="tlsemester"
                    placeholder="Semester*"
                    required
                  />
                  <label htmlFor="tlsemester">Semester*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tlbranch"
                    id="tlbranch"
                    placeholder="Branch*"
                    required
                  />
                  <label htmlFor="tlbranch">Branch*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tlcollege"
                    id="tlcollege"
                    placeholder="College*"
                    required
                  />
                  <label htmlFor="tlcollege">College*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tllinkedin"
                    id="tllinkedin"
                    placeholder="Linkedin"
                  />
                  <label htmlFor="tllinkedin">Linkedin</label>
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="sectionSubtitle">
                  Team <span>Member 2</span>
                </h3>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm2name"
                    id="tm2name"
                    placeholder="Name*"
                    required
                  />
                  <label htmlFor="tm2name">Name*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm2mobile"
                    id="tm2mobile"
                    placeholder="Mobile No.*"
                    required
                  />
                  <label htmlFor="tm2mobile">Mobile No.*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="email"
                    name="tm2email"
                    id="tm2email"
                    placeholder="Email*"
                    required
                  />
                  <label htmlFor="tm2email">Email*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm2semester"
                    id="tm2semester"
                    placeholder="Semester*"
                    required
                  />
                  <label htmlFor="tm2semester">Semester*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm2branch"
                    id="tm2branch"
                    placeholder="Branch*"
                    required
                  />
                  <label htmlFor="tm2branch">Branch*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm2college"
                    id="tm2college"
                    placeholder="College*"
                    required
                  />
                  <label htmlFor="tm2college">College*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm2linkedin"
                    id="tm2linkedin"
                    placeholder="Linkedin"
                  />
                  <label htmlFor="tm2linkedin">Linkedin</label>
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="sectionSubtitle">
                  Team <span>Member 3</span>
                </h3>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm3name"
                    id="tm3name"
                    placeholder="Name*"
                    required
                  />
                  <label htmlFor="tm3name">Name*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm3mobile"
                    id="tm3mobile"
                    placeholder="Mobile No.*"
                    required
                  />
                  <label htmlFor="tm3mobile">Mobile No.*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="email"
                    name="tm3email"
                    id="tm3email"
                    placeholder="Email*"
                    required
                  />
                  <label htmlFor="tm3email">Email*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm3semester"
                    id="tm3semester"
                    placeholder="Semester*"
                    required
                  />
                  <label htmlFor="tm3semester">Semester*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm3branch"
                    id="tm3branch"
                    placeholder="Branch*"
                    required
                  />
                  <label htmlFor="tm3branch">Branch*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm3college"
                    id="tm3college"
                    placeholder="College*"
                    required
                  />
                  <label htmlFor="tm3college">College*</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm3linkedin"
                    id="tm3linkedin"
                    placeholder="Linkedin"
                  />
                  <label htmlFor="tm3linkedin">Linkedin</label>
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="sectionSubtitle">
                  Team <span>Member 4</span>(Optional)
                </h3>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm4name"
                    id="tm4name"
                    placeholder="Name"
                  />
                  <label htmlFor="tm4name">Name</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm4mobile"
                    id="tm4mobile"
                    placeholder="Mobile No."
                  />
                  <label htmlFor="tm4mobile">Mobile No.</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="email"
                    name="tm4email"
                    id="tm4email"
                    placeholder="Email"
                  />
                  <label htmlFor="tm4email">Email</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="number"
                    name="tm4semester"
                    id="tm4semester"
                    placeholder="Semester"
                  />
                  <label htmlFor="tm4semester">Semester</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm4branch"
                    id="tm4branch"
                    placeholder="Branch"
                  />
                  <label htmlFor="tm4branch">Branch</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm4college"
                    id="tm4college"
                    placeholder="College"
                  />
                  <label htmlFor="tm4college">College</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tm4linkedin"
                    id="tm4linkedin"
                    placeholder="Linkedin"
                  />
                  <label htmlFor="tm4linkedin">Linkedin</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputGroup">
                  <button type="submit">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamRegistration;
