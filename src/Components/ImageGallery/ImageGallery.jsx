import React, { useEffect } from "react";
import "./ImageGallery.css";
import videoSanabil1 from "../../images/sanabilvideos/sanabil-video-1.mp4";
import Sanabil1 from "../../images/sanabilschoolphotos/SanabilPhoto3.jpeg";
import Sanabil2 from "../../images/sanabilschoolphotos/SanabilPhoto4.jpeg";
import Sanabil3 from "../../images/sanabilschoolphotos/SanabilPhoto5.jpeg";
import Sanabil5 from "../../images/sanabilschoolphotos/SanabilPhoto7.jpeg";
import Sanabil6 from "../../images/sanabilschoolphotos/SanabilPhoto8.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YouTube from "react-youtube";

export const ImageGallery = ({ images }) => {
  useEffect(() => {}, []);
  const videoId = "o_GlHYooWnU";

  const videoOptions = {
    width: "1200",
    height: "800",
  };
  const videoOptions2 = {
    width: "80%",
    height: "300",
  };

  const handleVideoReady = (event) => {
    const player = event.target;

    player.pauseVideo();

    const videoTitle = player.getVideoData().title;
    console.log("Video title:", videoTitle);
  };
  return (
    <section>
      <div className="image-container g-mrg-top">
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

        <div>
          <h1 className="display-3 fw-semibold">VIDEO GALLERY</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <YouTube
            videoId={"o_GlHYooWnU"}
            opts={videoOptions}
            onReady={handleVideoReady}
          />
          <h5 className="display-3 fw-semibold">
            Sanabil English high School at a Glance
          </h5>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <YouTube
              videoId={"210uRdm2QrA"}
              opts={videoOptions2}
              onReady={handleVideoReady}
            />
            <YouTube
              videoId={"0mcBJHhoqUQ"}
              opts={videoOptions2}
              onReady={handleVideoReady}
            />
          </div>
        </div>
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
