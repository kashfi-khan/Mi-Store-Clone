import React from 'react';
import HotItemCard from "./hotItemCard";
import "../Styles/hotAccessories.css";

const hotAccessories = ({music, musicCover, home, homeCover, smartDevice,smartDeviceCover,mobileAccessories,mobileAccessoriesCover,lifeStyle,lifeStyleCover,}) => {
  return (
    <div className='hotAccessories'>
        <div> <img src={musicCover || smartDeviceCover || homeCover || mobileAccessoriesCover || lifeStyleCover} alt="Cover" /></div>

      {/*-----------------@ musicCover---------------*/}

      <div>
        {music && music.map((item, index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
      )) } 
      {smartDevice && smartDevice.map((item, index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
      )) }
      {home && home.map((item, index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
      )) }
      {mobileAccessories&& mobileAccessories.map((item, index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
      )) }
      {lifeStyle && lifeStyle.map((item, index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
      )) }

      <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />   
      
      </div>
      
    </div>
  )
}

export default hotAccessories