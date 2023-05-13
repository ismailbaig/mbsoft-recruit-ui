import React from "react";
import { SendEmail } from "../shared/sendemail/sendemail";
import { AboutUS } from "../AboutUS/AboutUS";
import { Services } from "../SERVICES/Services";
import "./Home.css";
import homeTop from "../../images/homePage.jpg";
import ph1 from "../../images/ph1.avif";
import ph2 from "../../images/ph2c.avif";
import ph3 from "../../images/ph3avif.avif";
import videoHome from "../../video/videoHome.mp4";
import homep1 from "../../images/photo1.jpg";
import IndustrialAutomation from "../../images/IndustrialAutomation.jpg";
import rabasa from "../../images/rabasa.jpg";

export const Home = () => {
  return (
    <section>
      <div className="gContainerFluid">
        <img src={homeTop} alt="Snow" style={{ width: "100%" }} />
        <div className="gCentered ">
          <p className="display-1 fw-bolder">Sanabil English Medium School</p>
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
                  src={ph1}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div
                className="carousel-item homeCarouselItem"
                data-bs-interval="500"
              >
                <img
                  src={ph2}
                  className="d-block w-100 homeCarouselImage"
                  alt="..."
                />
              </div>
              <div className="carousel-item homeCarouselItem">
                <img
                  src={ph3}
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
                <h5 className="card-title">WEB & APP DEVELOPMENT</h5>
                <p className="card-text">
                  We provide best WEB and APP developement with best solution
                  and Architecture. We have one of the best team in providing
                  these services.
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
                <h5 className="card-title">Software Services</h5>
                <p className="card-text">
                  We provide Software Services with best solution and
                  Architecture. We have one of the best team in providing these
                  services.
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
                <h5 className="card-title">Data Analytics</h5>
                <p className="card-text">
                  We provide best Data Analytics by using Data science. We have
                  one of the best team in providing these services.
                </p>
                <a href="#" className="btn btn-primary">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h3 className="display-4 fw-semibold" style={{ padding: "18px" }}>
          OUR DEVELOPMENT METHODOLOGY
        </h3>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <div
          className="row mb-5 mt-5"
          style={{ justifyContent: "space-around" }}
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
              <h4>Testing & Modification </h4>
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
        <video src={videoHome} autoPlay muted playsInline loop />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCenteredVideo">
          <p className="display-1 fw-bolder">MISSION</p>
          <p>
            We @ Sanabil English Medium School have mission, To promote culture
            of education excellence from with in a caring and secure islamic
            environment enriched with the value of discipline, mutual care and
            respect which extend beyond the school into wider community
          </p>
        </div>
      </div>
      <div className="row mb-5 mt-5" style={{ justifyContent: "space-around" }}>
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
            <h4>Testing & Modification </h4>
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
        <div className="col-md-1">
          <div>
            <i className="fas fa-cubes home3MaintainSupporticon"></i>
            <h4>Interview Support</h4>
          </div>
        </div>
      </div>

      {/* PORTFOLIO starts here */}
      <div className="row">
        <div className="col-md-4">
          <h1 className="dispaly-4">PORTFOLIO</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <p className="fs-4">
            The following is a very small representative sample of our vast
            portfolio of our services with 900+ happy clients.
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
        <div className="col-md-4 rabasaClient">
          {/* <img
            className="img-responsive"
            src={homep4}
            alt=""
            style={{ width: "100%", height: "30%" }}
          /> */}
          <img className="img-responsive" src={rabasa} alt="" />
        </div>
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
      <div className="row">
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
