import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import AlertModal from "../../AlertModal/AlertModal";
import { db } from "../../../firebase";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (title && content && imageUrl && date && source) {
      await db
        .collection("News")
        .add({
          title,
          content,
          imageUrl,
          date,
          source
        })
        .then(() => {
          setLoader(false);
          showModal(
            <AlertModal
              message="Created Successfully"
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
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Title"
                  autoFocus
                  required
                />
                <label htmlFor="title">Title</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="content"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  placeholder="Content"
                />
                <label htmlFor="content">Content</label>
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
                  placeholder="Image-Url"
                />
                <label htmlFor="imageUrl">Image-Url</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="date"
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  placeholder="Date"
                />
                <label htmlFor="date">Date</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  id="source"
                  onChange={(e) => setSource(e.target.value)}
                  value={source}
                  placeholder="Source"
                />
                <label htmlFor="source">Source</label>
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
                  Create News
                </button>
              </div>
            </Fade>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateNews;
