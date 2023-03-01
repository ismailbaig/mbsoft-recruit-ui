import { React } from "react";
import contact from "../../images/contact.jpg";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";
import { SendEmail } from "../shared/sendemail/sendemail";
import axios from "axios";

export const Contact = () => {

  return (
    <div>
      <div className="container mb-5" style={{ marginTop: "4rem" }}>
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
            <h1>DROP AN ENQUIRY</h1>
          </div>
          <div className="col-md-6">
            <h1 className="dispaly-4">FIND US ON </h1>
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
              {" "}
              #41/454 SV Complex, 3rd floor,
              <br />
              Opp Kalyana Mandapa, S.T.B.C Road,
              <br />
              Kurnool - 518004
            </p>
            <br />
            <h5>Online Support</h5>
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
            <p>Coming Soon</p>
            <br />
            <h5>Office Hours</h5>
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
            <p> 9:00 AM - 6:00 PM (Mon to Sat)</p>
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/"
              target="_blank"
            />
          </div>
        </div>
      </div>
      {/* Google maps for location */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h1 className="dispaly-4">OUR LOCATION</h1>
          <iframe className="gmaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.439764343499!2d78.03726581477477!3d15.833467689026987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e75c54c9676d%3A0xe09265605f8e2312!2sSV%20Complex%2C%20STBC%20College%20Rd%2C%20Prakash%20Nagar%2C%20Kurnool%2C%20Andhra%20Pradesh%20518004!5e0!3m2!1sen!2sin!4v1677689944685!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
