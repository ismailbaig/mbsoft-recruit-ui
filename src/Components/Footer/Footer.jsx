import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import newchaiminardata from "../../data/newchaiminar.json";

export const Footer = () => {
  return (
    <footer>
      <div className="footer" style={{ paddingTop: "15px" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <SocialIcon
              network="linkedin"
              url={newchaiminardata.contactUsLinks.LinkedIn}
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              network="youtube"
              url={newchaiminardata.contactUsLinks.youtube}
              target="_blank"
            />
          </div>
          <div>
            {" "}
            <SocialIcon
              network="facebook"
              url={newchaiminardata.contactUsLinks.facebook}
              target="_blank"
            />
          </div>
        </div>
        <div style={{ paddingTop: "15px" }}>
          {newchaiminardata.contactusPage.AddressContent}
          <br />
          <br />
          <span id="emailId">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
            <b>{newchaiminardata.webdata.emailid}</b>
          </span>
          <br />
          <br />
          <span id="telId">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
            <b>{newchaiminardata.webdata.mobilenumber}</b>
          </span>
          <br />
          <br />
          {newchaiminardata.footer.footerContent} 
          <span dangerouslySetInnerHTML={{ __html: newchaiminardata.footer.copyright }}></span>
        </div>
      </div>
    </footer>
  );
};
