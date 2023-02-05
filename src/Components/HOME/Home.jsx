import React from 'react';
import './Home.css';
import homeTop from '../../images/homePage.jpg';
import ph1 from '../../images/ph1.avif';
import ph2 from '../../images/ph2c.avif';
import ph3 from '../../images/ph3avif.avif';

export const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <img src={homeTop} alt="Snow" style={{ width: '100%' }} />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="centered ">
          <p className='display-1 fw-bolder'>MBsoft Technolgies </p>
          <p className='diaplay-3 fw-semibold'>Pvt Ltd</p>
        </div>



      </div>
      <div className="container">
        <div className="row">
          <div id="carouselExample" class="carousel slide mt-4" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner c-item">
              <div class="carousel-item active" data-bs-interval="500">
                <img src={ph1} class="d-block w-100 c-img" alt="..." />
              </div>
              <div class="carousel-item c-item" data-bs-interval="500">
                <img src={ph2} class="d-block w-100 c-img" alt="..." />
              </div>
              <div class="carousel-item c-item" >
                <img src={ph3} class="d-block w-100 c-img" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>



    </div>


  )
}
