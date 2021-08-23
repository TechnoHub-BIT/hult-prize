import React, { useState, useEffect } from "react";
import PageHeader from "../../PageHeader/PageHeader";
import { db } from "../../../firebase";
import Moment from "moment";
import { Fade } from "react-reveal";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("contactus")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setMessages(data);
      });
  }, []);

  return (
    <React.Fragment>
      <PageHeader title="Messages" />
      <div className="adminListContainer">
        <div className="section adminListSection">
          <h2 className="sectionTitle">
            View <span>Messages</span>
          </h2>
          <div className="messagesList">
            {messages?.map((data, index) => {
              return (
                <Fade up key={index}>
                  <div className="singleMessage">
                    <div className="left">
                      <h3 className="title">
                        {data.firstName + " " + data.lastName}
                        <span className="date">{data.mnumber}</span>
                        <span className="date">{data.email}</span>
                        <span className="date">{data.reason}</span>
                      </h3>
                    </div>
                    <div className="right">
                      <h3 className="title">
                        <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                        {Moment(data.createdAt.toDate().toString()).format(
                          "lll"
                        )}
                      </h3>
                      <p className="message">{data.message}</p>
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

export default Messages;
