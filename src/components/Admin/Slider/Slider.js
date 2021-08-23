import React, { useState } from "react";
import "../common.css";
import { useHistory } from "react-router-dom";
import PageHeader from "../../PageHeader/PageHeader";
import AlertModal from "../../AlertModal/AlertModal";
import { db } from "../../../firebase";
import { Fade } from "react-reveal";

const Slider = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTtile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hyperLink, setHyperLink] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (title && subTitle && imageUrl && hyperLink && buttonText) {
      await db
        .collection("Slider")
        .add({
          title,
          subTitle,
          imageUrl,
          hyperLink,
          buttonText,
        })
        .then(() => {
          setLoader(false);
          showModal(
            <AlertModal
              message="Slider has been created Sucessfully!"
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
    } else {
      alert("Please fill all the details");
      // showModal(
      //   <AlertModal
      //     message="Please fill all the details"
      //     icon="failed.png"
      //     reload="true"
      //     close={closeModal}
      //   />
      // );
    }
  };

  return (
    <React.Fragment>
      <PageHeader title="Slider" />
      {modal}
      <div className="adminSliderContainer">
        <div className="section formSection">
          <h2 className="sectionTitle">
            Upload <span>Slider Details</span>
          </h2>
          <form>
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
              <div className="inputGroup">
                <input
                  type="text"
                  id="subtitle"
                  onChange={(e) => setSubTtile(e.target.value)}
                  value={subTitle}
                  placeholder="Subtitle*"
                  required
                />
                <label htmlFor="subtitle">Subtitle*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="imageId"
                  onChange={(e) => setImageUrl(e.target.value)}
                  value={imageUrl}
                  placeholder="Drive Image ID*"
                />
                <label htmlFor="imageId">Drive Image ID*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="buttonText"
                  onChange={(e) => setButtonText(e.target.value)}
                  value={buttonText}
                  placeholder="Button Text*"
                  required
                />
                <label htmlFor="buttonText">Button Text*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="hyperlink"
                  onChange={(e) => setHyperLink(e.target.value)}
                  value={hyperLink}
                  placeholder="Hyperlink*"
                />
                <label htmlFor="hyperlink">Hyperlink*</label>
              </div>
            </Fade>
            <Fade right>
              <div className="inputGroup">
                <button
                  type="button"
                  value="Submit"
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

export default Slider;
