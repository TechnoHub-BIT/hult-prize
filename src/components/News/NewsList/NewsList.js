import React,{useState,useEffect} from "react";
import "./NewsList.css";
import PageHeader from "../../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import {db} from "../../../firebase"
import moment from "moment";
import { Link } from "react-router-dom";
const NewsList = () => {

  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("News")
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
            {news.map((item,index) => {
              return (
                <>
            <Fade up>
              <Link to={`/news/`+ `${item.id}`}>
              <div className="singleNews" key={index}>
                <div>
                  <img src={`https://drive.google.com/uc?export=view&id=`+`${item.imageUrl}` } alt={item.title}/>
                </div>
                <div  className="title">
                 {item.title}
                </div>
                <h4 className="date">
                  <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;{moment(item.date).format('DD MMMM YYYY')};
                </h4>
                <p className="description">
                  {item.content}
                </p>
              </div>
              </Link>
            </Fade>
            </>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsList;
