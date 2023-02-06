import React from 'react';
import './Services.css';
import services from '../../images/services.jpg';

export const Services = () => {
  return (
    <div>
      
      <div className='container mb-5' style={{marginTop: '4rem'}}>
      <div className="gContainerFluid image">
        <img src={services} style={{ width: '100%' }} />
        <div className="gCentered">
          <h2 style={{ fontSize: '5rem' }}>SERVICES</h2></div>
      </div>
        <div className='row'>
          <div className='col-lg-12' >
            <div>
              <h2 style={{ fontSize: '2.9rem' }}>WEB AND APP DEVELOPMENT</h2>
              <svg width="350" height="20">
                <line x1="0" y1="1" x2="350" y2="1" stroke="red" stroke-width="2" />
              </svg>
              <div className='content-font-family'>
                We design and develop custom application for Android and iOS platforms with complete planning and
                research for domains such as education, health care, transportation, travel, finance, logistics, wellness and fitness, retail, events, etc.
                <br />

                With the use of latest tools we provide unique and creative web applications made from scratch, compatible with all platforms satisfying the needs of our customers.
                We also provide several customised applications for promoting small scale companies in online platform.
              </div>
            </div>
          </div>
        </div>
        <div id='serviceFlashCards' className='row'>
          <div className='col-lg-6' style={{ border: '0px solid red' }} >
            <div className="flip-card" style={{ paddingLeft: '0%' }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ marginTop: '50%' }}>
                    <h5>APPLICATION DEVELOPMENT</h5></div>
                </div>
                <div className="flip-card-back" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div>
                    <div>Desktop Software Development</div>
                    <div>Mobile App Development (Android & iOS)</div>
                    <div>Web and Enterprise portals</div>
                    <div>CMS Development</div>
                    <div>Upgrade and Maintenance</div>
                    <div>Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6' style={{ border: '0px solid red' }} >
            <div className="flip-card" style={{ paddingLeft: '0%' }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ marginTop: '50%' }}>
                    <h5>WEB DESIGN & DEVELOPMENT</h5></div>
                </div>
                <div className="flip-card-back" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div>
                    <div>Website Design</div>
                    <div>Web Development</div>
                    <div>E Commerce</div>
                    <div>CMS Development</div>
                    <div>Word Press Development</div>
                    <div>Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2D & 3D MODELING */}
        <div className='row'>
          <div className='col-lg-12' >
            <div>
              <h2 style={{ fontSize: '2.9rem' }}>2D & 3D MODELING</h2>
              <svg width="350" height="20">
                <line x1="0" y1="1" x2="350" y2="1" stroke="red" stroke-width="2" />
              </svg>
              <div className='content-font-family'>
                <div>
                  <strong>BIM</strong> is a process of converting laser scan survey data into a Building Information Model (BIM) ready model. 
                  Laser-Scan to BIM creates the 3D model of the building, showing its detailed geometry.
                </div>
                <br />
                <div>
                  <strong>Scan2CAD</strong> achieves accurate raster-to-vector conversions using a wide range of technologies. 
                  Most notably these are object recognition (Scan2CAD recognizes elements in your original image and 
                  converts them to the correct objects. Dash-lines become CAD dash-line objects, arcs become CAD arc objects, 
                  and so-on) and OCR (Scan2CAD recognizes text in your original image and converts the text to fully editable 
                  CAD text strings).
                </div>
                <br />
                <div>
                  <strong>Scan2BIM</strong> is the process of 3D Laser Scanning a physical space, site or a construction 
                  in order to create a highly accurate digital representation. The digital model is including all the 
                  information of the surfaces, the constructions, the materials and the colors. The representation can be 
                  used for designing, assessing progress or evaluating options.
                </div>
                <br />
                <div>
                  <strong>LIDAR</strong> is a remote sensing technology. LiDAR technology uses the pulse from a laser to 
                  collect measurements. These are used to create 3D models and maps of objects and environments. 
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12' style={{ border: '0px solid red' }} >
            <div className="flip-card" style={{margin: 'auto'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ marginTop: '50%' }}>
                    <h5>APPLICATION DEVELOPMENT</h5></div>
                </div>
                <div className="flip-card-back" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div>
                    <div>Desktop Software Development</div>
                    <div>Mobile App Development (Android & iOS)</div>
                    <div>Web and Enterprise portals</div>
                    <div>CMS Development</div>
                    <div>Upgrade and Maintenance</div>
                    <div>Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  )
}