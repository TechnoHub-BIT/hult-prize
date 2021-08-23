import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import Moment from "moment";
import { Button } from "reactstrap";
import AlertModal from "../../AlertModal/AlertModal";
import { useHistory } from "react-router-dom";

export default function DisplayNews() {
  const [news, setNews] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("News")
        .orderBy("date", "desc")
        .onSnapshot(function (data) {
          setNews(
            data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
    };
    fetchdata();
  }, []);

  const deleteNews = async (id) => {
    await db.collection("News").doc(id).delete();
    history.push("/admin/news");
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
      <div className="newsGrid">
        {news.map((item, index) => {
          return (
            <Fade up>
              <div className="singleNews" key={index}>
                <img
                  src={
                    `https://drive.google.com/uc?export=view&id=` +
                    `${item.imageUrl}`
                  }
                  alt={item.title}
                />
                {item.title}
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                  {Moment(item.date).format("DD MMMM YYYY")}
                </h4>
                <p className="description">
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                    className="newsDetails"
                  ></div>
                </p>
                <Button type="button" onClick={() => deleteNews(item.id)}>
                  Delete
                </Button>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
