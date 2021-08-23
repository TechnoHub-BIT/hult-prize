import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import Moment from "moment";
import { Button } from "reactstrap";
import AlertModal from "../../AlertModal/AlertModal";
import { useHistory } from "react-router-dom";

export default function DisplayDocuments() {
  const [downloads, setDownloads] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Documents")
        .orderBy("date", "desc")
        .onSnapshot(function (data) {
          setDownloads(
            data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
    };
    fetchdata();
  }, []);

  const deleteDocument = async (id, filename) => {
    await db.collection("Documents").doc(id).delete();
    await storage.ref("documents").child(filename).delete();
    history.push("/admin/documents");
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
      <div className="downloadsGrid">
        {downloads.map((item, index) => {
          return (
            <Fade up>
              <div className="singleDownload">
                <div className="left">
                  <h4 className="title">{item.title}</h4>
                  <h5 className="date">
                    <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                    {Moment(item.date).format("DD MMMM YYYY")}
                  </h5>
                </div>
                <div className="right">
                  <a
                    href={`${item.url}`}
                    target="_blank"
                    className="downloadBtn"
                  >
                    Download
                  </a>

                  <Button
                    type="button"
                    onClick={() => deleteDocument(item.id, item.filename)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
