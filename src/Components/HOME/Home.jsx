import React from 'react';
import './Home.css';
import homeTop from '../../images/homePage.jpg';
import html from '../../images/html.png';
import html2 from '../../images/html2.png';
import facebook from '../../images/facebook.png';

export const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <img src={homeTop} alt="Snow" style={{ width: '100%' }} />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="centered">
          <h2>MBsoft Technolgies Pvt Ltd</h2></div>
      </div>

      <h1>Welcome to Home page</h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img src={html} className="d-block " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={html2} className="d-block " alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={facebook} className="d-block" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
