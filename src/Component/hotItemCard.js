import React from "react";
import "../Styles/itemcard.css"

const hotItemCard = ({ name, price, image, index }) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default hotItemCard;
