import React from "react";
import ProductReviewsCard from "../Component/productReviewsCard";
import "../Styles/productReviews.css"
const productReviews = ({ productReviews }) => {
  return (
    <div className="productReviews">
      {productReviews.map((item,index) => (
        
        <ProductReviewsCard
          key={item.image}
          name={item.name}
          review={item.review}
          image={item.image}
          price={item.price}
          index={index}
        />
      ))}
      
    </div>
  );
};

export default productReviews;
