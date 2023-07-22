import React, { useState, useEffect } from "react";
import { TeaLoading } from "../TeaLoading/TeaLoading";
import ph3 from "../../../images/slide3.jpg";
import "./HomePageCard.css";

export const TeaWorkshops = () => {
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
              <img src={ph3} style={{ width: "100%" }} />
              <div className="gCentered">
                <h2 style={{ fontSize: "3rem" }}>TEA WORKSHOPS</h2>
              </div>
            </div>

            <h1>
              Indulge in the Art of Tea at Chaiminar's Enchanting Tea Workshops
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
              Welcome to Chaiminar, where we take great pleasure in presenting
              our enchanting tea workshops, crafted to immerse you in the
              fascinating world of tea. Nestled in the heart of our tranquil
              haven, these workshops offer an unforgettable experience that will
              awaken your senses and deepen your connection with tea, the elixir
              of serenity.
              <br /> Led by our team of passionate tea enthusiasts and seasoned
              tea sommeliers, our tea workshops cater to everyone, from novice
              tea drinkers to seasoned connoisseurs. Through these immersive
              sessions, you will journey through the diverse landscapes of tea,
              exploring the unique flavor profiles of delicate whites, bold
              blacks, soothing greens, and aromatic herbal infusions.
              <br /> At Chaiminar, we believe that tea is not just a beverage,
              but a cultural treasure to be cherished. Our tea workshops go
              beyond tasting, inviting you to indulge in the rich history and
              traditions surrounding tea. Discover the ancient art of tea
              ceremonies, learn the delicate art of tea blending, and gain
              insights into the artful craftsmanship that goes into producing
              each tea leaf.
              <br />
              In our serene ambiance, surrounded by fellow tea enthusiasts,
              you'll find a welcoming space to delve into the depths of tea
              knowledge. Our workshops foster a sense of camaraderie, allowing
              you to share your passion for tea with like-minded souls and forge
              unforgettable memories.
              <br />
              Unwind and rejuvenate your spirit as you embark on a delightful
              journey of discovery and mindfulness. Join us at Chaiminar's tea
              workshops, where every sip carries the essence of tradition,
              culture, and tranquility. Reserve your spot today, and let the
              enchanting world of tea unfold before your eyes, leaving you with
              a newfound appreciation for the timeless art of tea.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeaWorkshops;
