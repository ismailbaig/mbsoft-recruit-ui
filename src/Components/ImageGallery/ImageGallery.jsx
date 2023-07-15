import React, { useEffect } from "react";
import "./ImageGallery.css";
import ChaiMinar1 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto3.jpeg";
import ChaiMinar2 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto4.jpeg";
import ChaiMinar3 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto5.jpeg";
import ChaiMinar5 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto7.jpeg";
import ChaiMinar6 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto8.jpeg";
import ChaiMinar7 from "../../images/ChaiMinarHotelphotos/ChaiMinarPhoto11.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageGallery = ({ images }) => {
  useEffect(() => {}, []);
  return (
    <section>
      <div className="image-container">
        <h1 className="display-3 fw-semibold">IMAGE GALLERY</h1>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <div className="carousel-container">
        <Carousel>
          <div>
            <img src={ChaiMinar1} alt="Image 1" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
          </div>
          <div>
            <img src={ChaiMinar2} alt="Image 2" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
          </div>
          <div>
            <img src={ChaiMinar3} alt="Image 3" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
          </div>
          <div>
            <img src={ChaiMinar6} alt="Image 2" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
      </div>
          <div>
            <img src={ChaiMinar5} alt="Image 3" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
        </div>
        <div>
            <img src={ChaiMinar7} alt="Image 1" />
            <p className="legend">CHAI MINAR TEA HOTEL</p>
          </div>
        </Carousel>
        </div>
        <div className="video-gallery">
          <h1 className="display-3 fw-semibold">VIDEO GALLERY</h1>
          <div className="horizontal-line"></div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/o_GlHYooWnU"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-gallery">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/210uRdm2QrA"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
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
