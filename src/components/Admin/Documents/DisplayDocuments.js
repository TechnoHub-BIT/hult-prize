import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import Moment from "moment";
import { useHistory, Link } from "react-router-dom";
import { Fade } from "react-reveal";

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
  };

  return (
    <div>
      <PageHeader title="Manage Documents" />
      <div className="adminListContainer">
        <div className="section adminListSection">
          <Fade up>
            <h2 className="sectionTitle">
              Manage <span>Documents</span>
            </h2>
          </Fade>
          <Fade up>
            <Link to="/admin/create-document" className="createBtn">
              <i className="fas fa-upload"></i>&nbsp;&nbsp;Upload new Document
            </Link>
          </Fade>
          <div className="adminList">
            {downloads.map((item, index) => {
              return (
                <Fade up>
                  <div className="singleItem" key={index}>
                    <h3 className="title">
                      {item.title}
                      <br />
                      <span className="date">
                        <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                        {Moment(item.date).format("DD MMMM YYYY")}
                      </span>
                    </h3>
                    <button
                      type="button"
                      className="actionBtn"
                      onClick={() => deleteDocument(item.id, item.filename)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;&nbsp;Delete
                    </button>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
