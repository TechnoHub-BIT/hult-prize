import React, { useState } from "react";
import "../common.css";
import { db, storage } from "../../../firebase";
import AlertModal from "../../AlertModal/AlertModal";
import PageHeader from "../../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

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
        date,
      };
      setLoading(
        <div className="inputGroup progressBar">
          {/* <Progress animated color="info" value={100}>
            Uploading...
          </Progress> */}
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
                  message="Downloads has been added successfully!"
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
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>

      <div>
        <PageHeader title="Downloads" />
        {modal}
        <div className="adminDownloadsContainer">
          <div className="section formSection">
            <h2 className="sectionTitle">
              Upload <span>Event Documents</span>
            </h2>
            <Fade up>
              <form onSubmit={onSubmit}>
                <Fade up>
                  <div className="inputGroup">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title*"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autoFocus
                      required
                    />
                    <label htmlFor="title">Title*</label>
                  </div>
                </Fade>
                <Fade up>
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
                    <label htmlFor="date">Date*</label>
                  </div>
                </Fade>
                <Fade up>
                  <div className="inputGroup">
                    <input
                      type="file"
                      name="upload"
                      id="upload"
                      placeholder="Upload Document*"
                      onChange={handleChange}
                    />
                    <label htmlFor="upload">Upload Document*</label>
                  </div>
                </Fade>
                <Fade up>
                  <div className="inputGroup">
                    <button type="submit">
                      Upload&nbsp;&nbsp;<i className="fas fa-upload"></i>
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
