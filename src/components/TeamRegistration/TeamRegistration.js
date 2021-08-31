import React, { useEffect, useState } from "react";
import "./TeamRegistration.css";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../../firebase";
import AlertModal from "../AlertModal/AlertModal";


const TeamRegistration = () => {
  const [teamName,setTeamName] = useState('')
  const [nameOne,setNameOne] = useState('');
  const [numberOne,setNumberOne] = useState('')
  const [emailOne,setEmailOne] = useState('')
  const [semesterOne,setSemesterOne] = useState('')
  const [branchOne,setBranchOne] = useState('')
  const [collegeOne,setCollegeOne] = useState('')
  const [linkedinOne,setLinkedinOne] = useState('')

  const [nameTwo,setNameTwo] = useState('');
  const [numberTwo,setNumberTwo] = useState('')
  const [emailTwo,setEmailTwo] = useState('')
  const [semesterTwo,setSemesterTwo] = useState('')
  const [branchTwo,setBranchTwo] = useState('')
  const [collegeTwo,setCollegeTwo] = useState('')
  const [linkedinTwo,setLinkedinTwo] = useState('')

  const [nameThree,setNameThree] = useState('');
  const [numberThree,setNumberThree] = useState('')
  const [emailThree,setEmailThree] = useState('')
  const [semesterThree,setSemesterThree] = useState('')
  const [branchThree,setBranchThree] = useState('')
  const [collegeThree,setCollegeThree] = useState('')
  const [linkedinThree,setLinkedinThree] = useState('')

  const [nameFour,setNameFour] = useState('');
  const [numberFour,setNumberFour] = useState('')
  const [emailFour,setEmailFour]= useState('')
  const [semesterFour,setSemesterFour] = useState('')
  const [branchFour,setBranchFour] = useState('')
  const [collegeFour,setCollegeFour] = useState('')
  const [linkedinFour,setLinkedinFour] = useState('')
  
  const [modal, showModal] = useState("");
  const [loader, setLoader] = useState(false);
  const closeModal = () => {
    showModal("");
  };

const onSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
      await db
        .collection("team-registration")
        .add({
          teamName,
          nameOne,
          numberOne,
          emailOne,
          semesterOne,
         branchOne,
          collegeOne,
          linkedinOne,
          nameTwo,
         numberTwo,
         emailTwo,
          semesterTwo,
         branchTwo,
         collegeTwo,
         linkedinTwo,
        
          nameThree,
          numberThree,
         emailThree,
          semesterThree,
         branchThree,
          collegeThree,
         linkedinThree,
        
          nameFour,
          numberFour,
          emailFour,
          semesterFour,
          branchFour,
          collegeFour,
        linkedinFour

        })
        .then(() => {
          setLoader(false);
          showModal(
            <AlertModal
              message="Team Registration Sucessfully!"
              icon="successful.png"
              reload="true"
              close={closeModal}
            />
          );
        })
        .catch((error) => {
          showModal(
            <AlertModal
              message={error.message}
              icon="failed.png"
              reload="true"
              close={closeModal}
            />
          );
          setLoader(false);
        });
    
}

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
      {modal}
      <div className="registerContainer">
        <div className="section formSection">
          <h2 className="sectionTitle">
            Register your <span>Team</span>
          </h2>
          <form action="" method="post" onSubmit={onSubmit}>
            <div className="row" style={{ gridRowGap: "2em" }}>
              <div className="col-lg-12">
                <div className="inputGroup">
                  <input
                    type="text"
                    name="tname"
                    id="tname"
                    placeholder="Team Name*"
                    onChange={(e) =>setTeamName(e.target.value)}
                    value={teamName}
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
                    onChange={(e) =>setNameOne(e.target.value)}
                    value={nameOne}
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
                    onChange={(e) =>setNumberOne(e.target.value)}
                    value={numberOne}
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
                    onChange={(e) =>setEmailOne(e.target.value)}
                    value={emailOne}
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
                    onChange={(e) =>setSemesterOne(e.target.value)}
                    value={semesterOne}
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
                    onChange={(e) =>setBranchOne(e.target.value)}
                    value={branchOne}
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
                    onChange={(e) =>setCollegeOne(e.target.value)}
                    value={collegeOne}
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
                    onChange={(e) =>setLinkedinOne(e.target.value)}
                    value={linkedinOne}
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
                    onChange={(e) =>setNameTwo(e.target.value)}
                    value={nameTwo}
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
                    onChange={(e) =>setNumberTwo(e.target.value)}
                    value={numberTwo}
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
                    onChange={(e) =>setEmailTwo(e.target.value)}
                    value={emailTwo}
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
                    onChange={(e) =>setSemesterTwo(e.target.value)}
                    value={semesterTwo}
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
                    onChange={(e) =>setBranchTwo(e.target.value)}
                    value={branchTwo}
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
                    onChange={(e) =>setCollegeTwo(e.target.value)}
                    value={collegeTwo}
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
                    onChange={(e) =>setLinkedinTwo(e.target.value)}
                    value={linkedinTwo}
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
                    onChange={(e) =>setNameThree(e.target.value)}
                    value={nameThree}
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
                    onChange={(e) =>setNumberThree(e.target.value)}
                    value={numberThree}
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
                    onChange={(e) =>setEmailThree(e.target.value)}
                    value={emailThree}
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
                    onChange={(e) =>setSemesterThree(e.target.value)}
                    value={semesterThree}
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
                    onChange={(e) =>setBranchThree(e.target.value)}
                    value={branchThree}
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
                    onChange={(e) =>setCollegeThree(e.target.value)}
                    value={collegeThree}
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
                    onChange={(e) =>setLinkedinThree(e.target.value)}
                    value={linkedinThree}
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
                    onChange={(e) =>setNameFour(e.target.value)}
                    value={nameFour}
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
                    onChange={(e) =>setNumberFour(e.target.value)}
                    value={numberFour}
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
                    onChange={(e) =>setEmailFour(e.target.value)}
                    value={emailFour}
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
                    onChange={(e) =>setSemesterFour(e.target.value)}
                    value={semesterFour}
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
                    onChange={(e) =>setBranchFour(e.target.value)}
                    value={branchFour}
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
                    onChange={(e) =>setCollegeFour(e.target.value)}
                    value={collegeFour}
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
                    onChange={(e) =>setLinkedinFour(e.target.value)}
                    value={linkedinFour}
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
