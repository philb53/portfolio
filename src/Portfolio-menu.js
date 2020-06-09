import React from "react";

import "./portfolio-menu.styles.scss";

const PortfolioItem = ({ imageUrl, size, summary, subtitle }) => (
  <div className={`${size} portfolio-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">
        <span styles={{ marginLeft: "40px" }}>{summary}</span>
        <br></br>
      </h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  </div>
);

export default PortfolioItem;
