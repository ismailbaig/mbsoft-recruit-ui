import React, {useEffect, useState} from "react";
import "./Services.css";
import services from "../../images/services.jpg";
import PDFFile from "../shared/PDFFile/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "react-bootstrap";
import ChaiMinar from "../../images/pexels-olia-danilevich-5760206.jpg";
import ChaiMinar1 from "../../images/pexels-cottonbro-studio-6150658.jpg";
import ChaiMinar2 from "../../images/pexels-johnmark-smith-41135.jpg";
import { TeaLoading } from "../shared/TeaLoading/TeaLoading";

export const Services = () => {
  /* currently not using fetchdata, but adding only becuase for teaLoading Logic,
    May be we use it in future.
  */
  const [notusingData, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch("data/newchaiminar.json")
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
            <div className="gCentered">
              <h2 style={{ fontSize: "5rem" }}>SERVICES</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h2 style={{ fontSize: "2.9rem" }}>
                  TEA TASTINGS AT CHAI MINAR
                </h2>
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
                  We believe in sharing our passion for tea and empowering tea
                  enthusiasts with knowledge. Join our tea workshops and
                  educational sessions led by our tea experts. Learn about the
                  origins and processing methods of different teas, the art of
                  tea blending, and the proper brewing techniques.
                  <br />
                  Discover how to create your own unique tea blends and explore
                  the health benefits associated with various teas. Our
                  interactive workshops are designed to deepen your
                  understanding of tea and foster a community of tea lovers.
                </div>
              </div>
            </div>
          </div>
          <div id="serviceFlashCards" className="row">
            <div className="col-lg-6" style={{ border: "0px solid red" }}>
              <div className="flip-card" style={{ paddingLeft: "0%" }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      className="ImageFlip"
                      style={{
                        backgroundImage: `url(${ChaiMinar})`,
                      }}
                    ></div>
                    <div className="gCentered">
                      <h2 style={{ fontSize: "2rem", color: "white" }}>
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
                    <div>
                      <div>Private Events and Catering</div>
                      <div>Unparalleled Quality</div>
                      <div>Tea Retail Shop</div>
                      <div>Tea Consultations</div>
                      <div>Tea Mastery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{ border: "0px solid red" }}>
              <div className="flip-card" style={{ paddingLeft: "0%" }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      className="ImageFlip"
                      style={{
                        backgroundImage: `url(${ChaiMinar2})`,
                      }}
                    ></div>
                    <div className="gCentered">
                      <h2 style={{ fontSize: "2rem", color: "white" }}>
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
                    <div>
                      <div>Private Events and Catering</div>
                      <div>Unparalleled Quality</div>
                      <div>Tea Retail Shop</div>
                      <div>Tea Consultations</div>
                      <div>Tea Mastery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2D & 3D MODELING */}
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h2 style={{ fontSize: "2.9rem" }}>CHAI MINAR SERVICES</h2>
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
                    <h2>Tea Retail Shop</h2>
                    Explore our tea retail shop and bring the flavors of our tea
                    hotel home with you. Browse through our carefully curated
                    selection of premium loose-leaf teas, tea accessories, and
                    tea-related gifts. From rare and exotic teas to popular
                    blends, we have something to suit every taste and
                    preference. Elevate your tea-drinking experience by
                    purchasing our high-quality teas and accessories, and enjoy
                    the convenience of preparing exceptional tea in the comfort
                    of your own home.
                  </div>
                  <br />
                  <div>
                    <h2>Private Events and Catering</h2>
                    Host your private events and celebrations in the serene
                    ambiance of our tea hotel. Whether it's a bridal shower,
                    birthday party, or corporate gathering, our dedicated team
                    will work closely with you to create a memorable and
                    personalized experience. From elegant tea parties to
                    customized catering menus, we ensure that every detail is
                    taken care of. Immerse yourself in the world of tea while
                    enjoying exceptional service and delectable food in a
                    setting that exudes sophistication and charm.
                  </div>
                  <br />
                  <div>
                    <h2>Tea Consultations</h2>
                    Experience personalized tea consultations with our tea
                    experts to discover the perfect teas for your taste and
                    preferences. Whether you're looking for teas to support your
                    well-being, enhance relaxation, or simply indulge in
                    delightful flavors, our knowledgeable staff will guide you
                    through our extensive collection. Gain insights into the
                    various tea profiles, brewing methods, and health benefits
                    as we curate a selection of teas tailored specifically to
                    your needs. Elevate your tea journey with our customized tea
                    consultations and unlock the full potential of this ancient
                    beverage.
                  </div>
                  <br />
                  <div>
                    <h2>Tea Pairing Experiences</h2>
                    Discover the art of tea pairing through our unique tea
                    pairing experiences. Immerse yourself in the world of
                    flavors as we guide you through the harmonious combinations
                    of tea and food. Our expertly curated pairings will delight
                    your taste buds and showcase the versatility of tea as a
                    beverage that complements various cuisines and dishes. From
                    light and floral teas that enhance delicate flavors to
                    robust and earthy teas that balance rich and savory dishes,
                    our tea pairing experiences are designed to elevate your
                    dining experience and introduce you to new taste sensations.
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ border: "0px solid red" }}>
              <div className="flip-card" style={{ margin: "auto" }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      className="ImageFlip"
                      style={{
                        backgroundImage: `url(${ChaiMinar1})`,
                      }}
                    ></div>
                    <div className="gCentered">
                      <h2 style={{ fontSize: "2rem", color: "white" }}>
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
                    <div>
                      <div>Private Events and Catering</div>
                      <div>Unparalleled Quality</div>
                      <div>Tea Retail Shop</div>
                      <div>Tea Consultations</div>
                      <div>Tea Mastery</div>
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
