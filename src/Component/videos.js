import React from "react";
import VideoCard from "../Component/videoCard";
import "../Styles/videos.css" 

const videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <VideoCard key={item.image} name={item.name} image={item.image} index={index} />
      ))}
    </div>
  );
};

export default videos;
