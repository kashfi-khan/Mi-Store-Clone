import React from "react";
import "../Styles/starProducts.css";

const starProducts = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProduct[0].url}>
          {" "}
          <img src={starProduct[0].image} alt="" />
        </a>
      </div>
      <div>
        <a href={starProduct[1].url}>
          {" "}
          <img src={starProduct[1].image} alt="" />
        </a>
        <a href={starProduct[2].url}>
          {" "}
          <img src={starProduct[2].image} alt="" />
        </a>
        <a href={starProduct[3].url}>
          {" "}
          <img src={starProduct[3].image} alt="" />
        </a>
      </div>
    </div>
  );
};

export default starProducts;
