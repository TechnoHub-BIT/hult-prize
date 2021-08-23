import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import Moment from "moment";
import { Link, useHistory } from "react-router-dom";
import { Fade } from "react-reveal";

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
  };

  return (
    <div>
      <PageHeader title="Manage News" />
      <div className="adminListContainer">
        <div className="section adminListSection">
          <Fade up>
            <h2 className="sectionTitle">
              Manage <span>News</span>
            </h2>
          </Fade>
          <Fade up>
            <Link to="/admin/create-news" className="createBtn">
              <i className="fas fa-plus"></i>&nbsp;&nbsp;Create new News
            </Link>
          </Fade>
          <div className="adminList">
            {news.map((item, index) => {
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
                      onClick={() => deleteNews(item.id)}
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
