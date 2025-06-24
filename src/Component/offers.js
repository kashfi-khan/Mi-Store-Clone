import React from 'react';
import Offer from './offer';
import "../Styles/offers.css"

const offers = ({offer}) => {
  return (
    <div className='offerSection'>
        {offer.map((item,index)=>(
            <Offer key={item.image}  index={index} src={item.image} link={item.url} />
        ))}
    </div>
  )
}

export default offers;