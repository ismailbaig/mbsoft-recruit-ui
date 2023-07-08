import React, { useState, useEffect } from "react";
import "./Belowheader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Belowheader = () => {
  const [newchaiminardata, setData] = useState();

  const fetchJson = () => {
    fetch("data/newchaiminar.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 bhInfo bh-address-margin-top">
            Gottigere post, C K palya Road, Bannerghatta Main Rd,
            Hommadevanahalli, Bengaluru, Karnataka 560083
          </div>
          <div className="col-lg-12 bh-contact bh-info-margin-top bh-contact-font-size">
            <span id="emailId">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              {newchaiminardata?.webdata?.emailid}
            </span>
            <span id="telId">
              {" "}
              <FontAwesomeIcon icon={faPhone} />{" "}
              {newchaiminardata?.webdata?.mobilenumber}{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
