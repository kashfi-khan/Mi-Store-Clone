import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/hotAccessoriesMenu.css";


const hotAccessoriesMenu = () => {
     return (
    <div className='hotAccessoriesMenu'>
        
        <Link className="hotAccessoriesLink" to="/music">Music Store</Link>
        <Link className="hotAccessoriesLink" to="/home">Home</Link>
        <Link className="hotAccessoriesLink" to="/smartDevice">Smart Device</Link>
        <Link className="hotAccessoriesLink" to="/lifeStyle">Life Style</Link>
        <Link className="hotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
              
     </div>
  )
}

export default hotAccessoriesMenu