import React from "react";
import "./Belowheader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Belowheader = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12 bhInfo bh-address-margin-top">
            Gottigere post, C K palya Road, Bannerghatta Main Rd,
            Hommadevanahalli, Bengaluru, Karnataka 560083
          </div> */}
          <div className="col-lg-12 bh-contact bh-info-margin-top bh-contact-font-size">
              <span id="emailId"> <FontAwesomeIcon icon={faEnvelope} /> info@sanabilenglishschool.com</span> 
              <span id="telId"> <FontAwesomeIcon icon={faPhone} /> (+91) 80503-69047</span>  
          </div>
        </div>
      </div>
    </section>
  );
};
