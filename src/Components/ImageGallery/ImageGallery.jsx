import React, { useEffect } from "react";
import "./ImageGallery.css";

export const ImageGallery = ({ images }) => {
  useEffect(() => {
  }, []);

  return (
    <section>
      <div className="image-container">
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
