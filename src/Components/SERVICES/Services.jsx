import React, { useEffect, useState } from "react";
import "./Services.css";
import services from "../../images/services.jpg";
import PDFFile from "../shared/PDFFile/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "react-bootstrap";
import Service from "../../images/pexels-yan-krukau-8867435.jpg";
import ItConsultationAndStrategy from "../../images/it-consultancy-and-stratagy.png";
import ServiceImage from "../../images/network-design-and-implementation.png";
import CloudSolutionsAndMigration from "../../images/cloud-solutions-and-migration.png";
import softwareDevelopmentAndCustomization from "../../images/software-development-and-customization.png";
import { TeaLoading } from "../shared/TeaLoading/TeaLoading";
import { SmallCard } from "../shared/CardInServices/SmallCard";
import { FullCard } from "../shared/FullCard/FullCard";

export const Services = () => {
  const [zeltondata, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch("data/zelton.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <section id="services">
      {isLoading ? (
        <TeaLoading></TeaLoading>
      ) : (
        <div className="container mb-5">
          <div className="gContainerFluid image">
            <img src={services} style={{ width: "100%" }} />
            <div className="gCentered" style={{ top: "15%" }}>
              <h2 style={{ fontSize: "5rem" }}>SERVICES</h2>
            </div>
          </div>
          {/* 2D & 3D MODELING */}
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h2 style={{ fontSize: "2.9rem" }}> ZELTON SERVICES</h2>
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
                <div className="content-font-family">
                  <div>
                    <h2>CLOUD SERVICES</h2>
                    {zeltondata?.ServicePage?.CloudServiceContent}
                  </div>

                  <div className="card-container">
                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[0]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[0]
                      }
                    />
                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[1]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[1]
                      }
                    />
                  </div>
                  <div className="card-container">
                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[2]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[2]
                      }
                    />

                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[3]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[3]
                      }
                    />
                  </div>
                  <div className="card-container">
                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[4]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[4]
                      }
                    />
                    <SmallCard
                      title={zeltondata?.ServicePage?.Card?.CloudCardHeader[5]}
                      content={
                        zeltondata?.ServicePage?.Card?.CloudHeaderContent[5]
                      }
                    />
                  </div>
                  <br />
                  <div className="row">
                    <div
                      className="col-lg-12"
                      style={{ border: "0px solid red" }}
                    >
                      <div className="flip-card" style={{ margin: "auto" }}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div
                              className="ImageFlip"
                              style={{
                                backgroundImage: `url(${ItConsultationAndStrategy})`,
                              }}
                            ></div>
                            <div className="gCentered" style={{ top: "15%" }}>
                              <h2
                                style={{
                                  fontSize: "2rem",
                                  color: "black",
                                  background: "white",
                                }}
                              >
                                Flip to see the details
                              </h2>
                            </div>
                          </div>
                          <div
                            className="flip-card-back"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textAlign: "left",
                            }}
                          >
                            <ul>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[0]
                                }
                              </li>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[1]
                                }
                              </li>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[2]
                                }
                              </li>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[3]
                                }
                              </li>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[4]
                                }
                              </li>
                              <li>
                                {
                                  zeltondata?.ServicePage?.Card
                                    ?.CloudCardHeader[5]
                                }
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2>SOFTWARE DEVELOPMENT SERVICES</h2>
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
                    <br />
                    {zeltondata?.ServicePage?.SoftwareDevelpmentServiceContent}
                  </div>
                  <FullCard
                    title={zeltondata?.ServicePage?.Card?.FullCardHeader[0]}
                    content={zeltondata?.ServicePage?.Card?.FullCardContent[0]}
                    imageUrl={zeltondata?.ServicePage?.Card?.FullCardImages[0]}
                  />
                  <FullCard
                    title={zeltondata?.ServicePage?.Card?.FullCardHeader[1]}
                    content={zeltondata?.ServicePage?.Card?.FullCardContent[1]}
                    imageUrl={zeltondata?.ServicePage?.Card?.FullCardImages[1]}
                  />
                  <FullCard
                    title={zeltondata?.ServicePage?.Card?.FullCardHeader[2]}
                    content={zeltondata?.ServicePage?.Card?.FullCardContent[2]}
                    imageUrl={zeltondata?.ServicePage?.Card?.FullCardImages[2]}
                  />
                  <br />
                  <div className="flip-card" style={{ margin: "auto" }}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div
                          className="ImageFlip"
                          style={{
                            backgroundImage: `url(${Service})`,
                          }}
                        ></div>
                        <div className="gCentered" style={{ top: "15%" }}>
                          <h2
                            style={{
                              fontSize: "2rem",
                              color: "black",
                              background: "white",
                            }}
                          >
                            Flip to see the details
                          </h2>
                        </div>
                      </div>
                      <div
                        className="flip-card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "left",
                        }}
                      >
                        <ul>
                          <li>
                            {zeltondata?.ServicePage?.Card?.FullCardHeader[0]}
                          </li>
                          <li>
                            {zeltondata?.ServicePage?.Card?.FullCardHeader[1]}
                          </li>
                          <li>
                            {zeltondata?.ServicePage?.Card?.FullCardHeader[2]}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2>Mobile Application Development</h2>
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
                    <br />
                    {zeltondata?.ServicePage?.MobileAppDevelopmentContent}
                  </div>
                  <FullCard
                    title={
                      zeltondata?.ServicePage?.Card?.MobileAppCardHeader[0]
                    }
                    content={
                      zeltondata?.ServicePage?.Card?.MobileAppCardContent[0]
                    }
                    imageUrl={
                      zeltondata?.ServicePage?.Card?.MobileAppCardImages[0]
                    }
                  />
                  <FullCard
                    title={
                      zeltondata?.ServicePage?.Card?.MobileAppCardHeader[1]
                    }
                    content={
                      zeltondata?.ServicePage?.Card?.MobileAppCardContent[1]
                    }
                    imageUrl={
                      zeltondata?.ServicePage?.Card?.MobileAppCardImages[1]
                    }
                  />
                  <FullCard
                    title={
                      zeltondata?.ServicePage?.Card?.MobileAppCardHeader[2]
                    }
                    content={
                      zeltondata?.ServicePage?.Card?.MobileAppCardContent[2]
                    }
                    imageUrl={
                      zeltondata?.ServicePage?.Card?.MobileAppCardImages[2]
                    }
                  />
                  <br />
                  <div className="flip-card" style={{ margin: "auto" }}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div
                          className="ImageFlip"
                          style={{
                            backgroundImage: `url(${CloudSolutionsAndMigration})`,
                          }}
                        ></div>
                        <div className="gCentered" style={{ top: "15%" }}>
                          <h2
                            style={{
                              fontSize: "2rem",
                              color: "black",
                              background: "white",
                            }}
                          >
                            Flip to see the details
                          </h2>
                        </div>
                      </div>
                      <div
                        className="flip-card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "left",
                        }}
                      >
                        <ul>
                          <li>
                            {
                              zeltondata?.ServicePage?.Card
                                ?.MobileAppCardHeader[0]
                            }
                          </li>
                          <li>
                            {
                              zeltondata?.ServicePage?.Card
                                ?.MobileAppCardHeader[1]
                            }
                          </li>
                          <li>
                            {
                              zeltondata?.ServicePage?.Card
                                ?.MobileAppCardHeader[2]
                            }
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2>UI / UX Design & Branding</h2>
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
                    <br />
                    {zeltondata?.ServicePage?.UiUxDesignServiceContent}
                  </div>
                  <br />
                  <div className="flip-card" style={{ margin: "auto" }}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div
                          className="ImageFlip"
                          style={{
                            backgroundImage: `url(${softwareDevelopmentAndCustomization})`,
                          }}
                        ></div>
                        <div className="gCentered" style={{ top: "15%" }}>
                          <h2
                            style={{
                              fontSize: "2rem",
                              color: "black",
                              background: "white",
                            }}
                          >
                            Flip to see the details
                          </h2>
                        </div>
                      </div>
                      <div
                        className="flip-card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "left",
                        }}
                      >
                        <ul>
                          <li>DISCOVERY</li>
                          <li>DEFINITION</li>
                          <li>DESIGN</li>
                          <li>PROTOTYPING & TESTING</li>
                          <li>IMPLEMENTATION</li>
                          <li>IMPROVEMENT</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div>
                        <h2 style={{ fontSize: "2.9rem" }}>SERVICES @ZELTON</h2>
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
                        <div className="content-font-family">
                          {zeltondata?.ServicePage?.ServicesZeltonContent}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="serviceFlashCards" className="row">
                    <div
                      className="col-lg-6"
                      style={{ border: "0px solid red" }}
                    >
                      <div className="flip-card" style={{ paddingLeft: "0%" }}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div
                              className="ImageFlip"
                              style={{
                                backgroundImage: `url(${Service})`,
                              }}
                            ></div>
                            <div className="gCentered" style={{ top: "15%" }}>
                              <h2
                                style={{
                                  fontSize: "2rem",
                                  color: "black",
                                  background: "white",
                                }}
                              >
                                Flip to see the details
                              </h2>
                            </div>
                          </div>
                          <div
                            className="flip-card-back"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <ul style={{ textAlign: "left" }}>
                              <li>Technology Assessment and Audit</li>
                              <li>Strategic IT Roadmapping</li>
                              <li>Business Process Optimization</li>
                              <li>Vendor and Solution Evaluation</li>
                              <li>Risk Management and Compliance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ border: "0px solid red" }}
                    >
                      <div className="flip-card" style={{ paddingLeft: "0%" }}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div
                              className="ImageFlip"
                              style={{
                                backgroundImage: `url(${ServiceImage})`,
                              }}
                            ></div>
                            <div className="gCentered" style={{ top: "15%" }}>
                              <h2
                                style={{
                                  fontSize: "2rem",
                                  color: "black",
                                  background: "white",
                                }}
                              >
                                Flip to see the details
                              </h2>
                            </div>
                          </div>
                          <div
                            className="flip-card-back"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <ul style={{ textAlign: "left" }}>
                              <li>Technology Assessment and Audit</li>
                              <li>Strategic IT Roadmapping</li>
                              <li>Business Process Optimization</li>
                              <li>Vendor and Solution Evaluation</li>
                              <li>Risk Management and Compliance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div>
                        <h2 style={{ fontSize: "2.9rem" }}> ZELTON ASSIST</h2>
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
                        <div className="content-font-family">
                          {
                            zeltondata?.ServicePage?.ZeltonAssistContent
                              ?.ZeltonContentBeforePoints
                          }
                          <br />
                          <ul style={{ textAlign: "left" }}>
                            <li>
                              {
                                zeltondata?.ServicePage?.ZeltonAssistContent
                                  ?.points[0]
                              }
                            </li>
                            <li>
                              {
                                zeltondata?.ServicePage?.ZeltonAssistContent
                                  ?.points[1]
                              }
                            </li>
                            <li>
                              {
                                zeltondata?.ServicePage?.ZeltonAssistContent
                                  ?.points[2]
                              }
                            </li>
                          </ul>
                          <br />
                          {
                            zeltondata?.ServicePage?.ZeltonAssistContent
                              ?.ZeltonContentAfterPoints
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <PDFDownloadLink document={<PDFFile />} fileName="FORM">
              {({ loading }) =>
                loading ? (
                  <button>Loading document </button>
                ) : (
                  <Button variant="primary">Download</Button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
      )}
    </section>
  );
};
