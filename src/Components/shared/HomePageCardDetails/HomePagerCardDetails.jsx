import React, { useState, useEffect } from "react";
import { TeaLoading } from "../TeaLoading/TeaLoading";
import ph1 from "../../../images/slide1.jpg";
import "./HomePageCard.css";
import { useParams } from "react-router-dom";

export const HomePagerCardDetails = () => {
  /* currently not using fetchdata, but adding only becuase for teaLoading Logic,
      May be we use it in future.
    */
  const [newchaiminardata, setData] = useState();
  const [hpCardImageURL, sethpImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const serviceid = params.serviceid;

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch(`${process.env.REACT_APP_LOCAL_URL}/data/newchaiminar.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        sethpImageURL(process.env.REACT_APP_LOCAL_URL + data.services[serviceid - 1].imgaeURL);
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
    <section id="card1">
      {isLoading ? (
        <TeaLoading></TeaLoading>
      ) : (
        <div>
          <div className="container mb-5">
            <div className="gContainerFluid image homePageCard_img">
              <img src= {hpCardImageURL} style={{ maxWidth: "100%" }} />
              <div className="gCentered">
                <h2 style={{ fontSize: "2.5rem" }}>
                  {newchaiminardata?.services[serviceid - 1].heading}
                </h2>
              </div>
            </div>

            <h1>{newchaiminardata?.services[serviceid - 1].subHeading}</h1>
            <br />

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
              <span
                dangerouslySetInnerHTML={{
                  __html: newchaiminardata?.services[serviceid - 1].content.join(" "),
                }}
              ></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePagerCardDetails;
