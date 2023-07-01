import React, { useEffect } from "react";
import "./ImageGallery.css";
import Sanabil1 from "../../images/sanabilschoolphotos/SanabilPhoto3.jpeg";
import Sanabil2 from "../../images/sanabilschoolphotos/SanabilPhoto4.jpeg";
import Sanabil3 from "../../images/sanabilschoolphotos/SanabilPhoto5.jpeg";
import Sanabil5 from "../../images/sanabilschoolphotos/SanabilPhoto7.jpeg";
import Sanabil6 from "../../images/sanabilschoolphotos/SanabilPhoto8.jpeg";
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
        <Carousel>
          <div>
            <img src={Sanabil1} alt="Image 1" />
            <p className="legend">SANABIL ENGLISH HIGH SCHOOL</p>
          </div>
          <div>
            <img src={Sanabil2} alt="Image 2" />
            <p className="legend">SANABIL ENGLISH HIGH SCHOOL</p>
          </div>
          <div>
            <img src={Sanabil3} alt="Image 3" />
            <p className="legend">SANABIL ENGLISH HIGH SCHOOL</p>
          </div>
          <div>
            <img src={Sanabil6} alt="Image 2" />
            <p className="legend">SANABIL ENGLISH HIGH SCHOOL</p>
          </div>
          <div>
            <img src={Sanabil5} alt="Image 3" />
            <p className="legend">SANABIL ENGLISH HIGH SCHOOL</p>
          </div>
        </Carousel>
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