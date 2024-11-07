import React from 'react';
import './VideoBanner.css';

const VideoBanner = ({ title, videoSource }) => {
  return (
    <div className="bannerContainer">
        <div className="textOverlay">
          <h1>FAQ</h1>
        </div>
        <video 
          className="bannerVideo"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSource || "./FAQ.mp4"} type="video/mp4" />
        </video>
    </div>
  );
};

export default VideoBanner;
