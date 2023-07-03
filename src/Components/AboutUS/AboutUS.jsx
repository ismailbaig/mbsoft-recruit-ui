import React from "react";
import "./AboutUS.css";
import aboutUs from "../../images/aboutUs.jpg";
import aboutTop from "../../images/about-us-top.jpg";
import newchaiminardata from "../../data/newchaiminar.json";

export const AboutUS = () => {
  return (
    <section id="aboutus">
      <div className="container mb-5">
        <div className="gContainerFluid image">
          <img src={aboutTop} className="img-fluid" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-8">
            <div>
              <h2>{newchaiminardata.aboutusPage.header}</h2>
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
                {newchaiminardata.aboutusPage.headerContent}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <div className="about-img-shdw">
                <img src={aboutUs} className="about-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-3" style={{ paddingBottom: "10%" }}>
        <div className="row">
          <div className="col-lg-6">
            <div id="about-about-us">
              <h2>{newchaiminardata.aboutusPage.belowHeader}</h2>
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
                {newchaiminardata.aboutusPage.belowHeaderContent}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="about-why-us">
              <h2>{newchaiminardata.aboutusPage.sideHeader}</h2>
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
              <div id="why-us-items" className="content-font-family">
                <div>
                  <svg width="10" height="20">
                    <line
                      x1="0"
                      y1="10"
                      x2="10"
                      y2="10"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    {newchaiminardata.aboutusPage.sideHeaderContent[0]}
                  </span>
                </div>
                <div>
                  <svg width="10" height="20">
                    <line
                      x1="0"
                      y1="10"
                      x2="10"
                      y2="10"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    {newchaiminardata.aboutusPage.sideHeaderContent[1]}
                  </span>
                </div>
                <div>
                  <svg width="10" height="20">
                    <line
                      x1="0"
                      y1="10"
                      x2="10"
                      y2="10"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    {newchaiminardata.aboutusPage.sideHeaderContent[2]}
                  </span>
                </div>
                <div>
                  <svg width="10" height="20">
                    <line
                      x1="0"
                      y1="10"
                      x2="10"
                      y2="10"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    {newchaiminardata.aboutusPage.sideHeaderContent[3]}
                  </span>
                </div>
                <div>
                  <svg width="10" height="20">
                    <line
                      x1="0"
                      y1="10"
                      x2="10"
                      y2="10"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    {newchaiminardata.aboutusPage.sideHeaderContent[4]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
