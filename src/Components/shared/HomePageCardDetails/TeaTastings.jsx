import React, { useState, useEffect } from "react";
import { TeaLoading } from "../TeaLoading/TeaLoading";
import ph2 from "../../../images/slide2.jpg";
import "./HomePageCard.css";

export const TeaTastings = () => {
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
    <section id="card1">
      {isLoading ? (
        <TeaLoading></TeaLoading>
      ) : (
        <div>
          <div className="container mb-5">
            <div className="gContainerFluid image">
              <img src={ph2} style={{ width: "100%" }} />
              <div className="gCentered">
                <h2 style={{ fontSize: "3rem" }}>TEA TASTINGS</h2>
              </div>
            </div>

            <h1>
              Welcome to Chaiminar - Unravel the Exquisite World of Tea Tastings
            </h1>

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
              At Chaiminar, we take great pride in offering an unparalleled
              tea-tasting experience that transcends the ordinary. Step into our
              serene tea haven, where the aroma of carefully curated tea leaves
              beckons you to embark on a captivating journey through the vast
              and diverse world of teas. Our tea tastings are a sensory
              adventure, meticulously designed to tantalize your taste buds and
              elevate your appreciation for this ancient and cherished beverage.
              <br /> Indulge in the art of tea appreciation as our expert tea
              sommeliers guide you through an array of handpicked teas sourced
              from the most renowned tea estates across the globe. Whether you
              are a seasoned connoisseur or a tea enthusiast exploring the
              complexities of tea for the first time, our tea tastings cater to
              all palates and preferences. With each sip, you'll uncover the
              unique characteristics, terroir, and brewing techniques that make
              each tea varietal extraordinary.
              <br /> At Chaiminar, we believe that tea is more than just a
              beverage; it's an expression of culture and tradition. Our tea
              tastings delve deep into the rich history and cultural
              significance of teas, allowing you to immerse yourself in the
              fascinating stories behind each cup. Whether you savor the
              elegance of delicate white teas, the robustness of black teas, the
              freshness of green teas, or the aromatic blends of herbal
              infusions, our tea tastings are an enlightening journey that will
              leave you with a profound appreciation for the leaves in your cup.
              Join us at Chaiminar, and unlock the hidden treasures of tea as we
              celebrate the timeless allure of this remarkable elixir. Let our
              tea tastings awaken your senses and transport you to a realm of
              pure bliss, where every sip is a moment to cherish and remember.
              Discover the art, history, and craftsmanship behind tea, and let
              your taste buds dance in delight as you embark on an extraordinary
              tea-tasting experience like no other.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeaTastings;
