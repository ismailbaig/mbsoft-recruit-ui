import React from "react";
import { Outlet } from "react-router-dom";

export const ResetPasswordHome = () => {
  return (
    <section>
      <div className="container mt-5" >
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-lg-12">Reset Your Password</div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
