import React from 'react'
import "../Styles/productReviewsCard.css"

const productReviewsCard = ({image,index,name,review,price}) => {
  return (
    <div className='productReviewsCard'>
        <img src={image} alt={`${index} Review`} />        
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>

        

    </div>
  )
}

export default productReviewsCard