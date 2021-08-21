import React ,{useState,useEffect}from "react";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { db } from "../../../firebase";
import Moment from "moment";

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

    let counter = 0;

    return(
        <React.Fragment>
              <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Messages" />
            <div className="messagesListCont">
                <div className="messages">
                    {messages?.map((data, i) => {
                        counter++;
                        return (
                            <Fade up key={i}>      
                                <div className="singleMessage">
                                    <div className="up">
                                        <div className="firstname">{data.firstname}</div>
                                        <div className="lastname">{data.lastname}</div>
                                        <div className="mname">{data.mnumber}</div>
                                        <div className="email">{data.email}</div>
                                        <div className="firstname">{data.reason}</div>
                                        <div className="date">Received on: {Moment(data.createdAt.toDate().toString()).format('lll')}</div>
                                    </div>
                                    <div className="down">
                                        <p>
                                            {data.message}
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        );
                    })}
                </div>
                {
                    counter === 0 ?
                        <Fade up>
                            no messages
                            {/* <Alert color="danger" style={{ textAlign: "center", padding: "1.5em 0" }}>
                                Oops! Looks like there are no received messages at the moment!
                                <br /><br />
                                <a href="/dashboard"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
                            </Alert> */}
                        </Fade>
                                :
                        null
                }
            </div>
        </React.Fragment>
    )
};

export default Messages;