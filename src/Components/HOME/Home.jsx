import React from 'react';
import './Home.css';
import homeTop from '../../images/homePage.jpg';
import ph1 from '../../images/ph1.avif';
import ph2 from '../../images/ph2c.avif';
import ph3 from '../../images/ph3avif.avif';

export const Home = () => {
  return (
    <div>
      <div className="gContainerFluid">
        <img src={homeTop} alt="Snow" style={{ width: '100%' }} />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCentered ">
          <p className='display-1 fw-bolder'>MBsoft Technolgies </p>
          <p className='diaplay-3 fw-semibold'>Pvt Ltd</p>
        </div>



      </div>
      <div className="container">
        <div className="row">
          <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner homeCarouselItem">
              <div className="carousel-item active" data-bs-interval="500">
                <img src={ph1} className="d-block w-100 homeCarouselImage" alt="..." />
              </div>
              <div className="carousel-item homeCarouselItem" data-bs-interval="500">
                <img src={ph2} className="d-block w-100 homeCarouselImage" alt="..." />
              </div>
              <div className="carousel-item homeCarouselItem" >
                <img src={ph3} className="d-block w-100 homeCarouselImage" alt="..." />
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='display-3 fw-semibold'>SERVICES</h1>
            <svg width="400" height="20">
              <line x1="0" y1="1" x2="600" y2="1" stroke="red" stroke-width="2" />
            </svg>
          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">WEB & APP DEVELOPMENT</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>

          </div>
        </div>
      </div>



    </div>


  )
}
