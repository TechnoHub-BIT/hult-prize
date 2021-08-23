import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import Moment from "moment";
import { Button } from "reactstrap";
import AlertModal from "../../AlertModal/AlertModal";
import { useHistory } from "react-router-dom";

export default function DisplaySliders() {
  const [slider, setSliders] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Slider").onSnapshot(function (data) {
        setSliders(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const deleteSlider = async (id) => {
    await db.collection("Slider").doc(id).delete();
    history.push("/admin/slider");
    //   .then(() => {
    //     showModal("");
    //   })
    //   .catch((error) => {
    //     showModal("");
    //     alert(error.message);
    //   });
  };

  //       const closeModal = () => {
  //         showModal("");
  //       };

  //       //Modal
  //   const [modal, showModal] = useState("");
  //   const deleteDocumentModal = (id) => {
  //     showModal(
  //       <AlertModal
  //         message="Are you sure you want to delete this document?"
  //         icon="delete"
  //         leftBtn="Delete"
  //         rightBtn="Cancel"
  //         actionParam={id}
  //         action={deleteDocument}
  //         close={closeModal}
  //       />
  //     );
  //   };
  return (
    <div>
      <PageHeader title="Manage Documents" />
      {/* {modal} */}
      {slider.map((item) => {
        return (
          <div
            className="item"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=" +
                `${item.imageUrl}` +
                "')",
            }}
          >
            <div className="content">
              <h2 className="heading textTheme">{item.title}</h2>
              <h2 className="subHeading textWhite">{item.subTitle}</h2>
              <a href={`${item.hyperLink}`} target="_blank" className="ctaBtn">
                {item.buttonText}
              </a>
              <Button type="button" onClick={() => deleteSlider(item.id)}>
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
