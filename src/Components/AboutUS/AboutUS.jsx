import React from 'react';
import './AboutUS.css';
import aboutUs from '../../images/aboutUs.jpg';
import aboutTop from '../../images/about-us-top.jpg';


export const AboutUS = () => {
  return (
    <div>

      <div className='container mb-5 mt-5 '>

        <div className='gContainerFluid image'>
          <img src={aboutTop} className='img-fluid' />
        </div>

        <div className='row mt-5'>
          <div className='col-lg-8' >
            <div>
              <h2>OUR MISSION</h2>
              <svg width="80%" height="20">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
              </svg>
              <div className='content-font-family'>
                Our mission is to always put our clients first in everything we do – we seek to create web and application designs which make our clients proud! Our websites are easy to find, stylish, visually appealing, quick loading, mobile responsive and very easy to use.
                <br />

                Our aim is to push boundaries of design with likeminded teams within the industry and BIM enhances this,
                whether it’s old or new, large or small, we aim to make every project we work on as collaborative as possible and adopt BIM Stage 2 processes as a default.
              </div>
            </div>
          </div>
          <div className='col-lg-4' >
            <div>
              <div className='about-img-shdw'>
                <img src={aboutUs} className="about-img img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='container mb-5 mt-3' style={{ paddingBottom: '10%' }}>
        <div className='row'>
          <div className='col-lg-6' >
            <div id="about-about-us">
              <h2>ABOUT US</h2>
              <svg width="80%" height="20">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
              </svg>
              <div className='content-font-family'>
                We <strong>@ MBsoft Technologies pvt ltd</strong> provide variety of services which includes web design and development,
                Android and iOS apps, desktop application, 2D & 3D Modeling and digital marketing.
                Our team has a wide range of skills and expertise and we always put our client’s satisfaction first.
                <br />

                Our aim is to push boundaries of design with likeminded teams within the industry and BIM enhances this,
                whether it’s old or new, large or small, we aim to make every project we work on as collaborative as possible and adopt BIM Stage 2 processes as a default.
              </div>
            </div>
          </div>
          <div className='col-lg-6' >
            <div id="about-why-us">
              <h2>WHY US</h2>
              <svg width="80%" height="20">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
              </svg>
              <div id="why-us-items" className='content-font-family'>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>Exceptional services</span>
                </div>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>High quality development</span>
                </div>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>Extensive experience</span>
                </div>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>Good branding</span>
                </div>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>Strategic process</span>
                </div>
                <div>
                  <svg width="80%" height="20">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
                  </svg>
                  <span>On time delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}