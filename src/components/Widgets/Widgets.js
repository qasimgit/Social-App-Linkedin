import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const NewsArticle = ({ heading, subTitle }) => {
    return (
      <div className="widgets__article">
        <div className="article__left">
          <FiberManualRecordIcon />
        </div>
        <div className="article__right">
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked In News</h2>
        <InfoIcon />
      </div>
      <NewsArticle
        heading="React Js 2020"
        subTitle="react is smashig the industry"
      />
      <NewsArticle heading="Highly Paid Jobs" subTitle="Industry is changing" />
      <NewsArticle
        heading="Programming Languages"
        subTitle="best programming languages"
      />
    </div>
  );
};

export default Widgets;
