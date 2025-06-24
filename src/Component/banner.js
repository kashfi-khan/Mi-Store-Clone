import React from 'react'
import { Carousel } from 'react-bootstrap'

const banner = ({banner}) => {
  return (
    <Carousel fade>
        {banner.end.map((item,index)=>(
            <Carousel.Item key={item.image} >
                <img src={item.image} alt={index} />
                <Carousel.Caption>
          <h3> {item.name}</h3>
          <p> {item.description}</p>
          <p>{item.source}</p>
          <p>Read More</p>        
        </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    
  )
}

export default banner