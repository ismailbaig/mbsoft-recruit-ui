import React from "react";
import "./SmallCard.css";

export const SmallCard = ({ title, content }) => {
  return (
    <div className="cloudCard">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
