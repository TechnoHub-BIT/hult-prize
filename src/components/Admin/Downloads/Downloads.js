import React from "react";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Progress } from "reactstrap";
import { db, storage } from "../../../firebase";
import AlertModal from "../../AlertModal/AlertModal";
import PageHeader from "../../PageHeader/PageHeader";


const Downloads = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  const [modal, showModal] = useState("");

  const types = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
    "application/doc",
    "application/msword",
  ];

  function handleChange(e) {
    const fileUpload = e.target.files[0];
    if (fileUpload && types.includes(fileUpload.type)) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  const onSubmit = async (event) => {
    if (title && date && file) {
      event.preventDefault();
      const application = {
        title,
        date
      }
        setLoading(
          <div className="inputGroup progressBar">
            <Progress animated color="info" value={100}>
              Uploading...
            </Progress>
          </div>
        );
        await storage.ref(`/downloads/${file.name}`).put(file);

        storage
          .ref("downloads")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Downloads")
              .add(
                application,
                (application.url = url),
                (application.filename = file.name)
              )
              .then(() => {
                setURL(""),
                  setFile(null),
                  setTitle(""),
                  setDate(""),
                  setLoading(null);
                showModal(
                  <AlertModal
                    message="Speaker has been nominated successfully!"
                    icon="successful.png"
                    reload="true"
                    close={closeModal}
                  />
                );
              });
          });
      
    } else {
      // If form submission failled
      showModal(
        <AlertModal
          message="Downloads failed! Please try again."
          icon="failed.png"
          close={closeModal}
        />
      );
    }
  };

  const closeModal = () => {
    showModal("");
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>TEDxBITD - Speakers</title>
        <meta
          name="description"
          content="Our speakers are the inspiration centers of TEDxBITD. We aim to bring speakers with inspirational stories and life-changing ideas worth spreading, to encourage great and meaningful conversations."
        />
        <meta
          name="keywords"
          content="ted,tedx,bit,durg,speakers,bitd,event,campus,college,bhilai"
        />
      </Helmet>
     
      <div>
        <PageHeader title="Downloads" />
        {modal}
        <div className="speakerCont">
          <div className="speakerForm">
            <Fade up>           
              <form onSubmit={onSubmit}>
                <Fade up>
                  <div className="inputGroup">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Speaker Name*"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Date*"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="upload" style={{ marginLeft: "10px" }}>
                      Upload document(if any):
                    </label>
                    <input
                      type="file"
                      name="upload"
                      id="upload"
                      placeholder="PDF upload*"
                      style={{ paddingBottom: "45px" }}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputGroup">
                    <button type="submit">
                      Submit&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </Fade>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Downloads;
