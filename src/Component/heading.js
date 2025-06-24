import React from 'react'
import "../Styles/heading.css";

const heading = ({text}) => {
  return (
    <div className='heading'>
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default heading