import React from "react";
import "./Card.css";

export const Card = ({ title, content }) => {
  return (
    <div className="cloudCard">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
