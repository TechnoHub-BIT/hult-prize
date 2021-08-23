import React, { useState, useEffect } from "react";
import "./NewsList.css";
import PageHeader from "../../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { db } from "../../../firebase";
import Moment from "moment";
import { Link } from "react-router-dom";
const NewsList = () => {
  const [news, setNews] = useState([]);
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

  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Latest Event News</title>
        <meta name="title" content="Hult Prize BITD 2022- Latest Event News" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Latest News" />
      <div className="newsListContainer">
        <div className="section latestNewsSection">
          <Fade up>
            <h3 className="sectionTitle">
              <span>Latest</span> News & Updates
            </h3>
          </Fade>
          <div className="newsGrid">
            {news.map((item, index) => {
              return (
                <Fade up>
                  <div className="singleNews" key={index}>
                    <Link to={`/news/` + `${item.id}`}>
                      <img
                        src={
                          `https://drive.google.com/uc?export=view&id=` +
                          `${item.imageUrl}`
                        }
                        alt={item.title}
                      />
                    </Link>
                    <Link to={`/news/` + `${item.id}`} className="title">
                      {item.title.length < 50
                        ? item.title
                        : item.title.substring(0, 50) + "..."}
                    </Link>
                    <h4 className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;
                      {Moment(item.date).format("DD MMMM YYYY")}
                    </h4>
                    <p className="description">
                      {item.shortDescription.length < 300
                        ? item.shortDescription
                        : item.shortDescription.substring(0, 300) + "..."}
                    </p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsList;
