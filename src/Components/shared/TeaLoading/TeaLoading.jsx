import React from "react";
import teaLoader from "../../../images/teaLoading.gif";
import "./TeaLoading.css";

export const TeaLoading = () => {
  return (
    <section id="teaLoading">
      <div className="row">
        <div className="col-lg-12">
          <div>
            <div>
              <div className="gContainerFluid image tealoadingImg">
                <img src={teaLoader} />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
