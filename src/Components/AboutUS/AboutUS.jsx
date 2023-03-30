import React from "react";
import "./AboutUS.css";
import aboutUs from "../../images/aboutUs.jpg";
import aboutTop from "../../images/about-us-top.jpg";

export const AboutUS = () => {
  return (
    <div>
      <div className="container mb-5 mt-5 ">
        <div className="gContainerFluid image">
          <img src={aboutTop} className="img-fluid" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-8">
            <div>
              <h2>OUR MISSION</h2>
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
                We <strong>@ Sanabil English High School</strong> have a
                mission, To promote culture of education excellence from with in
                a caring and secure islamic environment enriched with the value
                of discipline, mutual care and respect which extend beyond the
                school into wider community
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
              <h2>ABOUT US</h2>
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
                <strong>Sanabil English High School</strong> is the platform
                that not only provides modern education, but take cares in
                instil religious values and life skills. There is nothing better
                you can give your Child than good education.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="about-why-us">
              <h2>WHY CHOOSE SANABIL</h2>
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
                  <span>Interactive Learning</span>
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
                  <span>Individual Development</span>
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
                  <span>Group Activities</span>
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
                  <span>Fun Learning Environment</span>
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
                  <span>Interactive and Emerging Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
