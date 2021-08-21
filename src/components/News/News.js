import React from "react";
import "./News.css";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const News = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Latest Event News</title>
        <meta name="title" content="Hult Prize BITD 2022- Latest Event News" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Latest News" />
      <div className="newsContainer"></div>
    </React.Fragment>
  );
};

export default News;
