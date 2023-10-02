import React, { useState, useEffect } from "react";
import contact from "../../images/contact.jpg";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";
import { SendEmail } from "../shared/sendemail/sendemail";
import { TeaLoading } from "../shared/TeaLoading/TeaLoading";
import { Journey2Cloud } from "../shared/Journey2Cloud/journey2Cloud";

export const Contact = () => {
  const [zeltondata, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch("data/zelton.json")
      .then((response) => {
        console.log(response);
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
    <section id="contact">
      {isLoading ? (
        <TeaLoading></TeaLoading>
      ) : (
        <div>
          <div className="container mb-5">
            <div className="gContainerFluid image">
              <img src={contact} style={{ width: "100%" }} />
              <div className="gCentered">
                <h2 style={{ fontSize: "5rem" }}>Contact us</h2>
              </div>
            </div>
          </div>

          <div className="container mb-5">
            <div className="row">
              <div>
                <h1>{zeltondata?.contactusPage?.franchise}</h1>
              </div>
            </div>
          </div>
          <div className="row mx-4">
            <div>
              <div className="row">
                <Journey2Cloud></Journey2Cloud>
              </div>
            </div>
            <div style={{marginTop:"5rem"}}>
              <h1 className="dispaly-4">
                {zeltondata?.contactusPage?.header}{" "}
              </h1>

              <div>
                <h5>Address</h5>
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
                <p>
                  {zeltondata?.contactusPage?.AddressContent[0]}
                  <br />
                  {zeltondata?.contactusPage?.AddressContent[1]}
                  <br />
                  {zeltondata?.contactusPage?.AddressContent[2]}
                </p>
                <br />
                <h5>{zeltondata?.contactusPage?.OnlineSupport}</h5>
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
                <p>{zeltondata?.contactusPage?.OnlineSupportContent}</p>
                <br />
                <h5>{zeltondata?.contactusPage?.OfficeHours}</h5>
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
                <p> {zeltondata?.contactusPage?.OfficeHoursContent}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" , marginBottom:"5rem" }}
                >
                  <div>
                    <SocialIcon
                      network="linkedin"
                      url={zeltondata?.contactUsLinks?.LinkedIn}
                      target="_blank"
                    />
                  </div>
                  <div>
                    <SocialIcon
                      network="youtube"
                      url={zeltondata?.contactUsLinks?.youtube}
                      target="_blank"
                    />
                  </div>
                  <div>
                    {" "}
                    <SocialIcon
                      network="facebook"
                      url={zeltondata?.contactUsLinks?.facebook}
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
