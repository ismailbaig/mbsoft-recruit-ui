import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SendEmail } from "../shared/sendemail/sendemail";
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

export const Home = () => {
  const [zeltondata, setData] = useState();

  const fetchJson = () => {
    fetch("data/zelton.json")
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
          <p className="display-1 fw-bolder">
            {" "}
            ZELTON IT SERVICES AND SOLUTIONS
          </p>
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

      <div className="container mt-4">
        <h1 className="display-3 fw-semibold">OUR DEVELOPMENT METHODOLOGY</h1>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <div
          className="row mb-5 mt-5"
          style={{ justifyContent: "space-around", width: "100%" }}
        >
          <div className="col-md-2">
            <div>
              <i className="fa-sharp fa-solid fa-comments homePlanAnalyicon"></i>

              <h4>Planning and Analysis</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-solid fa-object-ungroup homeDesignDevelopicon"></i>

              <h4>Design and Development</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-sharp fa-solid fa-laptop homeTestModifyicon"></i>

              <h4>Testing & Modification</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-brands fa-slack homeMaintainSupporticon"></i>
              <h4>Maintenance And Support</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="gContainerFluid gVideo mt-5 mb-5">
        <video src={videoHome1} autoPlay muted playsInline loop />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCenteredVideo">
          <p className="display-1 fw-bolder">MISSION</p>
          <p>{zeltondata?.aboutusPage?.headerContent}</p>
        </div>
      </div>
      <div
        className="row mb-5 mt-5"
        style={{ justifyContent: "space-around", width: "100%" }}
      >
        <div className="col-md-1">
          <div>
            <i className="fas fa-file-alt homePlanAnalyicon"></i>
            <h4>Planning and Analysis</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-database homeDesignDevelopicon"></i>
            <h4>Design and Development</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-thumbs-up homeTestModifyicon"></i>
            <h4>Testing & Modification</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-building homeMaintainSupporticon"></i>
            <h4>Maintenance And Support</h4>
          </div>
        </div>

        <div className="col-md-1">
          <div>
            <i className="fas fa-archway home1MaintainSupporticon"></i>
            <h4>Data Analytics</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-file-contract home2MaintainSupporticon"></i>
            <h4>Recruitment Support</h4>
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
