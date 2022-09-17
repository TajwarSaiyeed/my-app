import React from "react";
import { ReactDOM } from "react-dom/client";
const date = new Date();
const fulldate = date.getDate();
const fullmounth = date.getMonth();
const fullYear = date.getFullYear();

const Card = (props) => {
  const { title, desc } = props;
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{fulldate + "/" + fullmounth + "/" + fullYear}</p>
    </div>
  );
};

export default Card;
