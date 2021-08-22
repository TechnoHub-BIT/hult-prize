import React, { useEffect, useState } from "react";
import "./SingleNews.css";
import NewsHeader from "./NewsHeader/NewsHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";

const SingleNews = () => {
  const shareUrl = "";
  const shareText = "";

  const { id } = useParams();
  const [news, setNews] = useState("");

  useEffect(() => {
    const ref = db.collection("News").doc(id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const news = doc.data();
        setNews({
          id: doc.id,
          title: news.title,
          imageUrl: news.imageUrl,
          content: news.content,
          date: news.date,
          source: news.source,
        });
      } else
        showModal(
          <AlertModal
            message="This is not a Valid Test Link!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other News"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/news");
            }}
          />
        );
    });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Whatever the news title be</title>
        <meta
          name="title"
          content="Hult Prize BITD 2022- Whatever the news title be"
        />
        <meta name="description" content="" />
      </Helmet>
      <NewsHeader title={news.title} />
      <div className="singleNewsContainer">
        {news.date}
        <div className="section newsSection">
          <img
            src={
              `https://drive.google.com/uc?export=view&id=` + `${news.imageUrl}`
            }
            alt={news.title}
          />
          <div className="content">{news.content}</div>
          source : {news.source}
          <div className="shareButtons">
            <h6>Share on:</h6>
            <FacebookShareButton url={shareUrl} quote={shareText}>
              <FacebookIcon size="32" round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareText}>
              <TwitterIcon size="32" round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={shareText}>
              <WhatsappIcon size="32" round={true} />
            </WhatsappShareButton>
            <TelegramShareButton url={shareUrl} title={shareText}>
              <TelegramIcon size="32" round={true} />
            </TelegramShareButton>
            <LinkedinShareButton url={shareUrl} title={shareText}>
              <LinkedinIcon size="32" round={true} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleNews;
