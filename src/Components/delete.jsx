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
    //    fetch("data/newchaiminar.json")
    fetch(`${process.env.PUBLIC_URL}/data/newchaiminar.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
       
        console.log("env is = " + process.env.PUBLIC_URL);
        sethpImageURL(process.env.PUBLIC_URL + data.services[serviceid - 1].imgaeURL);
        
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

        <div>

            <h2>{hpCardImageURL} 123</h2>
            <br />
            <div>env is = <b> {process.env.PUBLIC_URL}   </b></div>

          </div>
    </section>
};

export default HomePagerCardDetails;
