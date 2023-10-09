import React from "react";
import "./FullCard.css";
import laptop from "../../../images/laptop.png";

export const FullCard = ({ title, imageUrl, content }) => {
  return (
    <div className="fullCard">
      <div className="cardContent">
        <div className="textContent">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="imageContainer">
          <img src={imageUrl} alt="Image Description" />
        </div>
      </div>
    </div>
  );
};
