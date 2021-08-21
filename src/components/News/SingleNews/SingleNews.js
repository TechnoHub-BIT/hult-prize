import React from "react";
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

const SingleNews = () => {
  const shareUrl = "";
  const shareText = "";

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
      <NewsHeader title="Whatever the news title be" />
      <div className="singleNewsContainer">
        <div className="section newsSection">
          <div className="content"></div>
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
