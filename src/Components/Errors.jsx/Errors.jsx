import React from "react";
import "./Errors.css";

export const Errors = () => {
  return (
    <section>
      <div className="container errorpage">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div style={{ float: "left" }}>
                <span>
                  <b>Error :</b>
                </span>
                <br />
                You do not have permission to View this page, Contact
                Administrator !!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
