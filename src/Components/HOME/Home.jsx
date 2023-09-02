import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SendEmail } from "../shared/sendemail/sendemail";
import { AboutUS } from "../AboutUS/AboutUS";
import { Services } from "../SERVICES/Services";
import "./Home.css";
import homeTop from "../../images/homePage.jpg";
import ItConsulting from "../../images/it-consultancy-and-stratagy.png";
import DataRecovery from "../../images/software-development-and-customization.png";
import CloudSolutions from "../../images/cloud-solutions-and-migration.png";
import ItConsultancySlide from "../../images/ItConsultancy.jpg";
import CloudComputingSlide from "../../images/CloudComputing.jpg";
import SoftwareDevSlide from "../../images/SoftwareDevelopment.jpg";
import videoHome1 from "../../video/HomePageVideo.mp4";
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
          <p className="fw-bolder"> ZELTON IT SERVICES AND SOLUTIONS</p>

          {/* <div id="nonMobileViewCounts" className="container mt-4">
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
          </div> */}
        </div>
      </div>

      {/* <div id="mobileViewCounts" className="container">
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
      </div> */}

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
                  src={SoftwareDevSlide}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div
                className="carousel-item homeCarouselItem"
                data-bs-interval="500"
              >
                <img
                  src={CloudComputingSlide}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div className="carousel-item homeCarouselItem">
                <img
                  src={ItConsultancySlide}
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
              <img src={DataRecovery} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">IT Consulting</h5>
                <p className="card-text">
                  Our IT consulting services provide expert guidance to help
                  your business leverage technology. We analyze, strategize, and
                  guide you to streamline operations, improve efficiency, and
                  implement solutions for consulting
                </p>
                <Link to="/hpcard/1">
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img src={ItConsulting} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Data Recovery and Backup</h5>
                <p className="card-text">
                  Safeguard your data and ensure business continuity with our
                  recovery and backup services. We prevent data loss due to
                  disasters or system failures. Our experts set up automated
                  backups, implement recovery plans,
                </p>
                <Link to="/hpcard/2">
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img src={CloudSolutions} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cloud Solution</h5>
                <p className="card-text">
                  Embrace cloud power with tailored solutions. Experience
                  flexibility, scalability, and cost-efficiency as we help you
                  migrate to the cloud. Our experts design, implement, and
                  manage solutions aligning with your goals for seamless data
                  and application access.
                </p>
                <Link to="/hpcard/3">
                  <button className="btn btn-primary">See More</button>
                </Link>
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
      {/* <div
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
            <h4> ZELTON's Soaring Success</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fa-solid fa-bar-chart homeMaintainSupporticon"></i>
            <h4>Sales trends and estimates</h4>
          </div>
        </div>
      </div> */}

      {/* PORTFOLIO starts here */}
      <div id="h_portfolio" className="row" style={{ width: "100%" }}>
        <div className="col-md-4">
          <h1 className="dispaly-4">PORTFOLIO</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <p className="fs-4">
            Explore our successful IT solutions and client success stories that
            demonstrate our expertise in driving technology-driven
            transformations.
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
