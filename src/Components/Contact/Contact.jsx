import React, { useState, useEffect } from "react";
import contact from "../../images/contact.jpg";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";
import { SendEmail } from "../shared/sendemail/sendemail";
import { TeaLoading } from "../shared/TeaLoading/TeaLoading";

export const Contact = () => {
  const [newchaiminardata, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch("data/newchaiminar.json")
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
          <div className="col-md-6">
            <h1>{newchaiminardata?.contactusPage?.franchise}</h1>
          </div>
          <div className="col-md-6">
            <h1 className="dispaly-4">
              {newchaiminardata?.contactusPage?.header}{" "}
            </h1>
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-md-6">
            <div className="row">
              <SendEmail></SendEmail>
            </div>
          </div>
          <div className="col-md-6">
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
              {newchaiminardata?.contactusPage?.AddressContent[0]}
              <br />
              {newchaiminardata?.contactusPage?.AddressContent[1]}
              <br />
              {newchaiminardata?.contactusPage?.AddressContent[2]}
            </p>
            <br />
            <h5>{newchaiminardata?.contactusPage?.OnlineSupport}</h5>
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
            <p>{newchaiminardata?.contactusPage?.OnlineSupportContent}</p>
            <br />
            <h5>{newchaiminardata?.contactusPage?.OfficeHours}</h5>
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
            <p> {newchaiminardata?.contactusPage?.OfficeHoursContent}</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <SocialIcon
                  network="linkedin"
                  url={newchaiminardata?.contactUsLinks?.LinkedIn}
                  target="_blank"
                />
              </div>
              <div>
                <SocialIcon
                  network="youtube"
                  url={newchaiminardata?.contactUsLinks?.youtube}
                  target="_blank"
                />
              </div>
              <div>
                {" "}
                <SocialIcon
                  network="facebook"
                  url={newchaiminardata?.contactUsLinks?.facebook}
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
