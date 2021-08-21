import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import AlertModal from "../../AlertModal/AlertModal";
import { db } from "../../../firebase";

const Slider = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTtile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hyperLink, setHyperLink] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (title && subTitle && imageUrl && hyperLink) {
      await db
        .collection("Slider")
        .add({
          title,
          subTitle,
          imageUrl,
          hyperLink,
        })
        .then(() => {
          setLoader(false);
          showModal(
            <AlertModal
              message="Your Message has been submitted. Thank you for your feedback!"
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
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Slider" />
      {modal}
      <div className="loginCont">
        <form>
          <div className="grid2">
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="subtitle"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="First Name"
                  autoFocus
                  required
                />
                <label htmlFor="fname">Title</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="subtitle"
                  onChange={(e) => setSubTtile(e.target.value)}
                  value={subTitle}
                  placeholder="Last Name"
                />
                <label htmlFor="lname">Sub-Title</label>
              </div>
            </Fade>
          </div>
          <div className="grid2 mt2">
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                  value={imageUrl}
                  placeholder="Email"
                />
                <label htmlFor="image">Image-Url</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="hyperlink"
                  onChange={(e) => setHyperLink(e.target.value)}
                  value={hyperLink}
                  placeholder="Mobile No."
                />
                <label htmlFor="mobile">Hyper Link</label>
              </div>
            </Fade>
          </div>
          <div className="mt2">
            <Fade right>
              <div className="inputGroup">
                <button
                  type="button"
                  value="Submit"
                  onClick={handleSubmit}
                  style={{ alignSelf: "flex-end" }}
                >
                  Send Message
                </button>
              </div>
            </Fade>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Slider;
