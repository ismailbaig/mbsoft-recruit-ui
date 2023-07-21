import React, { useState, useEffect } from "react";
import { TeaLoading } from "../TeaLoading/TeaLoading";
import ph1 from "../../../images/slide1.jpg";
import "./HomePageCard.css";

export const TeaAccomodations = () => {
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
              <img src={ph1} style={{ maxWidth: "100%" }} />
              <div className="gCentered">
                <h2 style={{ fontSize: "2.5rem" }}>TEA ACCOMODATIONS</h2>
              </div>
            </div>

            <h1>Relish Unparalleled Tea Accommodations at Chaiminar</h1>

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
              At Chaiminar, we offer tea aficionados a truly exceptional
              experience with our thoughtfully designed tea accommodations.
              Nestled amidst the serene beauty of our surroundings, our
              tea-themed rooms provide a haven for those seeking to immerse
              themselves in the world of tea while enjoying the comforts of a
              luxurious stay.
              <br /> Each of our tea accommodations is uniquely curated,
              reflecting the essence of different tea varieties from around the
              globe. Whether you choose the delicate charm of our Jasmine Suite,
              the bold and robust ambiance of our Assam Retreat, or the Zen-like
              tranquility of our Matcha Hideaway, each room is a homage to the
              diverse and enchanting flavors of tea.
              <br /> Indulge in the art of tea within the comforts of your room,
              as we provide a wide selection of premium teas and modern
              tea-making facilities. Savor the ritual of brewing your favorite
              blend as you bask in the warm embrace of the aroma that fills the
              air. To enhance your experience, our knowledgeable staff is always
              on hand to offer expert advice and recommendations, ensuring that
              every cup is a moment of bliss.
              <br />
              As you retire for the day, sink into the plushness of tea-infused
              linens and experience the soothing properties of this remarkable
              fabric. Each detail in our tea accommodations is carefully curated
              to provide a sense of tranquility and relaxation, taking you on a
              sensory journey that extends beyond the palate.
              <br />
              In addition to the delightful tea-themed ambiance, our
              accommodations boast modern amenities and impeccable service to
              ensure your stay is nothing short of extraordinary. Whether you're
              here for a rejuvenating tea retreat or to explore the wonders of
              our surroundings, our tea accommodations are designed to be your
              sanctuary, offering a unique blend of luxury and tea-infused
              bliss.
              <br />
              Come, experience the harmony of tea and hospitality at Chaiminar's
              Tea Accommodations. Discover a world where every moment is an
              invitation to savor the essence of tea and create cherished
              memories that will linger long after your stay with us.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeaAccomodations;
