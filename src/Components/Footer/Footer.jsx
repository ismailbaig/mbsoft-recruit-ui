import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <footer>
      <div className="footer" style={{paddingTop: '15px'}}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/sanabil-english-high-school-20a1201b0/"
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              network="youtube"
              url="https://www.youtube.com/@sanabilschool3578"
              target="_blank"
            />
          </div>
          <div>
            {" "}
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/sanabilenglishschool"
              target="_blank"
            />
          </div>
        </div>
        <div style={{paddingTop: '15px'}}>
          Gottigere post, C K palya Road, Bannerghatta Main Rd,
          Hommadevanahalli, Bengaluru, Karnataka 560083
          <br />
          <br />
          <span id="emailId"> <FontAwesomeIcon icon={faEnvelope} /> Email:  <b>info@sanabilenglishschool.com</b></span> 
          <br />
          <br />
          Copyright © 2023 Sanabil English Medium School.
        </div>
      </div>
    </footer>
  );
};
