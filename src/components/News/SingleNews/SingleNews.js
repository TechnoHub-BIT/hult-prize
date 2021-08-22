import React, { useEffect, useState } from "react";
import "./SingleNews.css";
import NewsHeader from "./NewsHeader/NewsHeader";
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
import AlertModal from "../../AlertModal/AlertModal";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const SingleNews = () => {
  const shareUrl = "";
  const shareText = "";

  const { id } = useParams();
  const [news, setNews] = useState("");

  const [modal, showModal] = useState("");
  const closeModal = () => {
    showModal("");
  };

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
            admin="true"
            message="This is not a valid News Link!"
            icon="exclamation.png"
            reload="true"
            close={closeModal}
          />
        );
    });
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{"Hult Prize BITD 2022- " + news.title}</title>
        <meta name="title" content={"Hult Prize BITD 2022- " + news.title} />
        <meta name="description" content={news.content} />
      </Helmet>
      <NewsHeader title={news.title} imageId={news.imageUrl} date={news.date} />
      {modal}
      <div className="singleNewsContainer">
        <div className="section newsSection">
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
