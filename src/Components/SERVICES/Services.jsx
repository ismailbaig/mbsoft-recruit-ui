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
import { Card } from "../shared/CardInServices/Card";
import { FullCard } from "../shared/FullCard/FullCard";

export const Services = () => {
  /* currently not using fetchdata, but adding only becuase for teaLoading Logic,
    May be we use it in future.
  */
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
                    Welcome to our Cloud Solutions. We are dedicated to
                    providing cutting-edge cloud services and solutions tailored
                    to meet the unique needs of businesses in the digital age.
                    Our team of experts brings years of experience to help you
                    navigate the complexities of cloud technology. Whether
                    you're looking to migrate to the cloud, optimize your
                    existing cloud infrastructure, or develop cloud-native
                    applications, we have you covered.Let us be your trusted
                    partner on the path to cloud success.
                  </div>

                  <div className="card-container">
                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[0]}
                      content={zeltondata?.Card?.CloudHeaderContent[0]}
                    />
                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[1]}
                      content={zeltondata?.Card?.CloudHeaderContent[1]}
                    />
                  </div>
                  <div className="card-container">
                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[2]}
                      content={zeltondata?.Card?.CloudHeaderContent[2]}
                    />

                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[3]}
                      content={zeltondata?.Card?.CloudHeaderContent[3]}
                    />
                  </div>
                  <div className="card-container">
                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[4]}
                      content={zeltondata?.Card?.CloudHeaderContent[4]}
                    />
                    <Card
                      title={zeltondata?.Card?.CloudCardHeader[5]}
                      content={zeltondata?.Card?.CloudHeaderContent[5]}
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
                              <li>{zeltondata?.Card?.CloudCardHeader[0]}</li>
                              <li>{zeltondata?.Card?.CloudCardHeader[1]}</li>
                              <li>{zeltondata?.Card?.CloudCardHeader[2]}</li>
                              <li>{zeltondata?.Card?.CloudCardHeader[3]}</li>
                              <li>{zeltondata?.Card?.CloudCardHeader[4]}</li>
                              <li>{zeltondata?.Card?.CloudCardHeader[5]}</li>
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
                    Our Software Development Services are designed to bring your
                    ideas to life. We excel in crafting custom software
                    solutions tailored to your unique business requirements. Our
                    experienced team of developers uses cutting-edge
                    technologies to build reliable, scalable, and user-friendly
                    applications.
                  </div>
                  <FullCard
                    title={zeltondata?.Card?.FullCardHeader[0]}
                    content={zeltondata?.Card?.FullCardContent[0]}
                    imageUrl={zeltondata?.Card?.FullCardImages[0]}
                  />
                  <FullCard
                    title={zeltondata?.Card?.FullCardHeader[1]}
                    content={zeltondata?.Card?.FullCardContent[1]}
                    imageUrl={zeltondata?.Card?.FullCardImages[1]}
                  />
                  <FullCard
                    title={zeltondata?.Card?.FullCardHeader[2]}
                    content={zeltondata?.Card?.FullCardContent[2]}
                    imageUrl={zeltondata?.Card?.FullCardImages[2]}
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
                          <li>{zeltondata?.Card?.FullCardHeader[0]}</li>
                          <li>{zeltondata?.Card?.FullCardHeader[1]}</li>
                          <li>{zeltondata?.Card?.FullCardHeader[2]}</li>
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
                    Mobile Application Development is our forte. We specialize
                    in crafting cutting-edge mobile apps for both iOS and
                    Android platforms. Our team combines expertise with the
                    latest technologies to create intuitive and user-friendly
                    apps. From concept to deployment, we're dedicated to
                    delivering mobile solutions that captivate users and drive
                    success.
                  </div>
                  <FullCard
                    title={zeltondata?.Card?.MobileAppCardHeader[0]}
                    content={zeltondata?.Card?.MobileAppCardContent[0]}
                    imageUrl={zeltondata?.Card?.MobileAppCardImages[0]}
                  />
                  <FullCard
                    title={zeltondata?.Card?.MobileAppCardHeader[1]}
                    content={zeltondata?.Card?.MobileAppCardContent[1]}
                    imageUrl={zeltondata?.Card?.MobileAppCardImages[1]}
                  />
                  <FullCard
                    title={zeltondata?.Card?.MobileAppCardHeader[2]}
                    content={zeltondata?.Card?.MobileAppCardContent[2]}
                    imageUrl={zeltondata?.Card?.MobileAppCardImages[2]}
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
                          <li>{zeltondata?.Card?.MobileAppCardHeader[0]}</li>
                          <li>{zeltondata?.Card?.MobileAppCardHeader[1]}</li>
                          <li>{zeltondata?.Card?.MobileAppCardHeader[2]}</li>
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
                    The combination of our innovative and digital know-how,
                    world-class technology and years of experience allows us to
                    provide you with a modern and refined solution that focuses
                    on both the front-end and back-end user. As a design agency,
                    we can create unique user experiences and user interfaces
                    and develop strategies and concepts for your very own
                    digital application. Our focus is always on user interfaces
                    that are precisely tailored to your requirements and
                    corporate identity. Through adept information design and
                    logical information architecture, we ensure that your users
                    quickly find their way around and experience all content
                    with unrestricted enthusiasm.
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
                          From IT consulting and system integration to managed
                          services and cybersecurity solutions, we offer a
                          comprehensive suite of services to cater to your IT
                          needs. Our services include
                          <br />
                          Our Solution is a 24x7 service located inside India
                          and backed by an SI with top level accreditation by
                          Cisco, VMware, EMC, HP, NetApp Microsoft, ITIL
                          compliant, includes a Service Desk, a NOC, Field
                          engineers and Remote Monitoring Software & Monthly
                          Reports
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
                          ZELTON Assist provides companies with a centralized
                          helpdesk and call center for End User and Network
                          support. Our Helpdesk is available by:
                          <br />
                          <ul style={{ textAlign: "left" }}>
                            <li>Calling</li>
                            <li>Email</li>
                            <li>Online</li>
                          </ul>
                          <br />
                          We can use agents on client PC’s to remotely monitor
                          and trouble fix issues quickly and cost effectively.
                          When our agents need to dial into a customer’s PC all
                          the sessions are recorded insuring compliance. Our
                          helpdesk operates 24x7x365 and currently supports in
                          excess of 10,000.00 users. The solution also provides
                          our customers with an online portal which allows them
                          to see in real time, trouble tickets, escalations,
                          statistics and fixes. Our team can report back to a
                          customer’s IT team or go ahead and implement a fix or
                          an escalation themselves. The ZELTON Assist Portal.
                          Allowing our team to integrate with your seamlessly.
                          ZELTON Assist also comes with a service management
                          portal allowing customers a single view of their
                          service and the ability to run their own expedient
                          reporting and export service level data. Our portal
                          allows for complete access and control over real-time
                          updates on all incidents and changes. The simple
                          interface gives customers access to a range of key
                          functionalities at their fingertips. With the ZELTON
                          Assist portal customers can easily view, add and
                          update all incidents and changes within their IT
                          system from any device 24x7 This Portal has been
                          developed and driven by the individual requirements of
                          each of our customers. It is pivotal for us be able to
                          understand our customer’s business needs and as a
                          result it was designed in complete conjunction with
                          this customer feedback in mind. If you would like to
                          see how your business can benefit form ZELTON Assist,
                          please fill in your contact details below to arrange a
                          demo.
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
