import React, { useState, useEffect } from "react";
import PageHeader from "../../PageHeader/PageHeader";
import { db } from "../../../firebase";
import { Fade } from "react-reveal";

const teamRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  useEffect(() => {
    db.collection("team-registration")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setRegistrations(data);
      });
  }, []);

  return (
    <React.Fragment>
      <PageHeader title="Registrations" />
      <div className="adminListContainer">
        <div className="section adminListSection">
          <h2 className="sectionTitle">
            View <span>Registrations</span>
          </h2>
          <div className="messagesList">
            {registrations?.map((data, index) => {
              return (
                <Fade up key={index}>
                   <h2>{data.teamName}</h2>
                  <div className="singleMessage">
                    <div className="left">
                      <h3 className="title">
                            Memeber 1
                        <span className="date">Name : {data.nameOne}</span>
                        <span className="date">Mobile No. : {data.numberOne}</span>
                        <span className="date">Email : {data.emailOne}</span>
                        <span className="date">Semester : {data.semesterOne}</span>
                        <span className="date">Branch : {data.branchOne}</span>
                        <span className="date">College Name : {data.collegeOne}</span>
                        <span className="date">LinkedIn : {data.linkedinOne}</span>
                      </h3>
                      <h3 className="title">
                      Memeber 3
                      <span className="date">Name : {data.nameThree}</span>
                        <span className="date">Mobile No. : {data.numberThree}</span>
                        <span className="date">Email : {data.emailThree}</span>
                        <span className="date">Semester : {data.semesterThree}</span>
                        <span className="date">Branch : {data.branchThree}</span>
                        <span className="date">College Name : {data.collegeOne}</span>
                        <span className="date">LinkedIn : {data.linkedinThree}</span>
                      </h3>

                    </div>
                    <div className="right">
                    <h3 className="title">
                      Memeber 2
                      <span className="date">Name : {data.nameTwo}</span>
                        <span className="date">Mobile No. : {data.numberTwo}</span>
                        <span className="date">Email : {data.emailTwo}</span>
                        <span className="date">Semester : {data.semesterTwo}</span>
                        <span className="date">Branch : {data.branchOne}</span>
                        <span className="date">College Name : {data.collegeOne}</span>
                        <span className="date">LinkedIn : {data.linkedinTwo}</span>
                      </h3>
                      {data.nameFour? 
                      <h3 className="title">
                      Memeber 4
                      <span className="date">Name : {data.nameFour}</span>
                        <span className="date">Mobile No. : {data.numberFour}</span>
                        <span className="date">Email : {data.emailFour}</span>
                        <span className="date">Semester : {data.semesterFour}</span>
                        <span className="date">Branch : {data.branchFour}</span>
                        <span className="date">College Name : {data.collegeOne}</span>
                        <span className="date">LinkedIn : {data.linkedinFour}</span>
                      </h3>
                      : null}
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default teamRegistrations;
