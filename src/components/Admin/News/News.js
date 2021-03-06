import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import AlertModal from "../../AlertModal/AlertModal";
import { db } from "../../../firebase";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/css/bootstrap.css";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const newsContent = (param) => {
    setContent(param);
  };
  const onChange = (value) => {
    newsContent(value);
  };

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (title && content && imageUrl && date && source && shortDescription) {
      await db
        .collection("News")
        .add({
          title,
          content,
          imageUrl,
          shortDescription,
          date,
          source,
        })
        .then(() => {
          setLoader(false);
          showModal(
            <AlertModal
              admin="true"
              message="News Uploaded Successfully"
              icon="successful.png"
              reload="true"
              close={closeModal}
            />
          );
        })
        .catch((error) => {
          showModal(
            <AlertModal
              admin="true"
              message={error.message}
              icon="failed.png"
              reload="true"
              close={closeModal}
            />
          );
          setLoader(false);
        });
    } else {
      showModal(
        <AlertModal
          admin="true"
          message="Please fill all the details"
          icon="exclamation.png"
          close={closeModal}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <PageHeader title="Slider" />
      {modal}
      <div className="adminNewsContainer">
        <div className="section formSection">
          <h2 className="sectionTitle">
            Upload <span>News</span>
          </h2>
          <form method="post">
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Title*"
                  autoFocus
                  required
                />
                <label htmlFor="title">Title*</label>
              </div>
            </Fade>
            <Fade up>
              <ReactSummernote
                value={content}
                id="content"
                options={{
                  lang: "en-US",
                  height: 500,
                  dialogsInBody: true,
                  toolbar: [
                    ["font", ["bold", "underline"]],
                    ["para", ["paragraph"]],
                    ["insert", ["link"]],
                  ],
                }}
                onChange={onChange}
              />
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="shortDescription"
                  onChange={(e) => setShortDescription(e.target.value)}
                  value={shortDescription}
                  placeholder="Short Description*"
                  required
                />
                <label htmlFor="shortDescription">Short Description*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                  value={imageUrl}
                  placeholder="Drive Image ID*"
                  required
                />
                <label htmlFor="imageUrl">Drive Image ID*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="date"
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  placeholder="Date*"
                  required
                />
                <label htmlFor="date">Date*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="source"
                  onChange={(e) => setSource(e.target.value)}
                  value={source}
                  placeholder="Source*"
                  required
                />
                <label htmlFor="source">Source*</label>
              </div>
            </Fade>
            <Fade right>
              <div className="inputGroup">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{ alignSelf: "flex-end" }}
                >
                  Upload&nbsp;&nbsp;<i className="fas fa-upload"></i>
                </button>
              </div>
            </Fade>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateNews;
