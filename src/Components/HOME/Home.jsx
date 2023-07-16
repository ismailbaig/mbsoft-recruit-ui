import React, { useState, useEffect } from "react";
import { SendEmail } from "../shared/sendemail/sendemail";
import { AboutUS } from "../AboutUS/AboutUS";
import { Services } from "../SERVICES/Services";
import "./Home.css";
import homeTop from "../../images/homePage.jpg";
import ph1 from "../../images/pexels-olia-danilevich-5760206.jpg";
import ph2 from "../../images/pexels-charlotte-may-5947096.jpg";
import ph3 from "../../images/pexels-tima-miroshnichenko-5974071.jpg";
import ph4 from "../../images/slide1.jpg";
import ph5 from "../../images/slide2.jpg";
import ph6 from "../../images/slide3.jpg";
import videoHome1 from "../../video/videoHome1.mp4";
import homep1 from "../../images/Portfolio2.jpg";
import IndustrialAutomation from "../../images/Portfolio1.jpg";
// import rabasa from "../../images/rabasa.jpg";
import CountUp from "react-countup";

export const Home = () => {
  const [newchaiminardata, setData] = useState();

  const fetchJson = () => {
    fetch("data/newchaiminar.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);
  return (
    <section>
      <div className="gContainerFluid image">
        <img src={homeTop} alt="Snow" style={{ width: "100%" }} />
        <div className="homeTopCentered">
          <p className="fw-bolder">CHAI MINAR TEA HOTEL</p>

          <div id="nonMobileViewCounts" className="container mt-4">
            <svg width="80%" height="20">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
            <div
              className="row mb-5 mt-5"
              style={{ justifyContent: "space-around", width: "100%" }}
            >
              <div className="col-md-2">
                <div>
                  <i className="fa-solid fa-mug-hot homeDesignDevelopicon"></i>
                  <h4>
                    <CountUp start={0} end={1000} suffix="+" duration={8.5} />
                  </h4>
                  <h4>Tea cups/ Day</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <i className="fa-sharp fa-solid fa-store homePlanAnalyicon"></i>
                  <h4>
                    <CountUp start={0} end={10} suffix="+" duration={2.5} />
                  </h4>
                  <h4>Outlets</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <i className="fa-sharp fa-solid fa-glass-whiskey homeTestModifyicon"></i>
                  <h4>
                    <CountUp
                      start={0}
                      end={200}
                      suffix="+ litres"
                      duration={8.5}
                    />
                  </h4>
                  <h4>Milk used / Day</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <i className="fa-solid fa-city homeMaintainSupporticon"></i>
                  <h4>
                    <CountUp start={0} end={2} suffix="+" duration={1.5} />
                  </h4>
                  <h4>Cities</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobileViewCounts" className="container">
        <div
          className="row"
          style={{ justifyContent: "space-around", width: "100%" }}
        >
          <div className="col-md-2">
            <div>
              <i className="fa-solid fa-mug-hot homeDesignDevelopicon"></i>
              <h4>
                <CountUp start={0} end={1000} suffix="+" duration={8.5} />
              </h4>
              <h4>Tea cups/ Day</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-sharp fa-solid fa-store homePlanAnalyicon"></i>
              <h4>
                <CountUp start={0} end={10} suffix="+" duration={2.5} />
              </h4>
              <h4>Outlets</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-sharp fa-solid fa-glass-whiskey homeTestModifyicon"></i>
              <h4>
                <CountUp start={0} end={200} suffix="+ litres" duration={8.5} />
              </h4>
              <h4>Milk used / Day</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-solid fa-city homeMaintainSupporticon"></i>
              <h4>
                <CountUp start={0} end={2} suffix="+" duration={1.5} />
              </h4>
              <h4>Cities</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            id="carouselExample"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner homeCarouselItem">
              <div className="carousel-item active" data-bs-interval="500">
                <img
                  src={ph6}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div
                className="carousel-item homeCarouselItem"
                data-bs-interval="500"
              >
                <img
                  src={ph5}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div className="carousel-item homeCarouselItem">
                <img
                  src={ph4}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-3 fw-semibold">SERVICES</h1>
            <svg width="80%" height="20">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img src={ph2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tea Tastings</h5>
                <p className="card-text">
                  Immerse yourself in the world of tea with our expert-led tea
                  tastings. Discover the nuances and flavors of different tea
                  varieties, from delicate white teas to robust black teas.
                  Learn about the art of tea preparation, brewing techniques,
                  and tea pairing suggestions. Our knowledgeable staff will
                  guide you through a sensory journey, making every sip a
                  delightful experience.
                </p>
                <a href="#" className="btn btn-primary">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img src={ph1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tea Workshops</h5>
                <p className="card-text">
                  Enhance your tea knowledge and skills with our engaging tea
                  workshops. Led by tea experts, these interactive sessions
                  delve into various aspects of tea cultivation, processing, and
                  appreciation. Learn about tea origins, tea ceremonies, and the
                  health benefits associated with different types of tea. Get
                  hands-on experience in tea blending and create your
                  personalized tea blend to take home
                </p>
                <a href="#" className="btn btn-primary">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img src={ph3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tea Accommodations</h5>
                <p className="card-text">
                  Enjoy a tea-themed getaway in our specially designed
                  tea-themed rooms or suites. Immerse yourself in a serene
                  ambiance inspired by the art of tea. Each room features
                  elegant tea-inspired decor, a selection of fine teas for your
                  enjoyment, and amenities that ensure a comfortable and
                  relaxing stay. Wake up to the aroma of freshly brewed tea and
                  start your day with a rejuvenating cuppa.
                </p>
                <a href="#" className="btn btn-primary">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gContainerFluid gVideo mt-5 mb-5">
        <video src={videoHome1} autoPlay muted playsInline loop />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCenteredVideo">
          <p className="display-1 fw-bolder">MISSION</p>
          <p>{newchaiminardata?.aboutusPage?.headerContent}</p>
        </div>
      </div>
      <div
        className="row mb-5 mt-5"
        style={{ justifyContent: "space-around", width: "100%" }}
      >
        <div className="col-md-1">
          <div>
            <i className="fa-sharp fa-solid fa-store homePlanAnalyicon"></i>
            <h4>Outlets of our Franchise</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fa-solid fa-mug-hot homeDesignDevelopicon"></i>
            <h4>1k+ Tea cups sold per Day</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fa-sharp fa-solid fa-glass-whiskey homeTestModifyicon"></i>
            <h4>200 litres of Milk used per day</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fa-solid fa-city homeMaintainSupporticon"></i>
            <h4>We have outlets in two Cities</h4>
          </div>
        </div>

        <div className="col-md-1">
          <div>
            <i className="fa-sharp fa-solid fa-rocket homeTestModifyicon"></i>
            <h4>Chai Minar's Soaring Success</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fa-solid fa-bar-chart homeMaintainSupporticon"></i>
            <h4>Sales trends and estimates</h4>
          </div>
        </div>
      </div>

      {/* PORTFOLIO starts here */}
      <div id="h_portfolio" className="row" style={{ width: "100%" }}>
        <div className="col-md-4">
          <h1 className="dispaly-4">PORTFOLIO</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <p className="fs-4">
            "Discover the essence of tea hospitality at our exquisite tea hotel
            !!"
          </p>
        </div>
        <div className="col-md-4">
          <div>
            <img
              className="img-responsive"
              src={homep1}
              alt=""
              style={{ width: "100%", height: "50%" }}
            />
          </div>
          <div className="mt-5">
            <img
              className="img-responsive"
              src={IndustrialAutomation}
              alt=""
              style={{ width: "100%", height: "50%" }}
            />
          </div>
        </div>
        {/* <div className="col-md-4 rabasaClient"> */}
        {/* <img
            className="img-responsive"
            src={homep4}
            alt=""
            style={{ width: "100%", height: "30%" }}
          /> */}
        {/* <img className="img-responsive" src={rabasa} alt="" />
        </div> */}
      </div>
      {/* PORTFOLIO ends  here */}

      <div id="about">
        <h3 className="display-4 fw-semibold" style={{ padding: "18px" }}>
          ABOUT US
        </h3>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <AboutUS></AboutUS>
      </div>
      <div id="services">
        <h3 className="display-4 fw-semibold" style={{ padding: "18px" }}>
          SERVICES
        </h3>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <Services></Services>
      </div>
      {/* ENQUIRY starts here */}
      <div id="h_enqiry" className="row" style={{ width: "95%" }}>
        <div
          className="col-md-5 homeenquiry mx-3 img-fluid"
          style={{ background: "url{homep5})" }}
        >
          <h1 className="dispaly-4">ENQUIRY</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
        </div>
        <div className="row mx-4">
          <div className="col-md-6">
            <div className="row">
              <SendEmail></SendEmail>
            </div>
          </div>
        </div>
      </div>
      {/* ENQUIRY ends here */}
    </section>
  );
};
