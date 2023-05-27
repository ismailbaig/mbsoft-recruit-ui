import React, { useEffect } from "react";
import "./ImageGallery.css";
import videoSanabil1 from "../../images/sanabilvideos/sanabil-video-1.mp4";

export const ImageGallery = ({ images }) => {
  useEffect(() => {}, []);

  return (
    <section>
      <div className="image-container g-mrg-top">
        <div className="image-wrapper">
          <video src={videoSanabil1} controls />
        </div>
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <div className="text">{image.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
