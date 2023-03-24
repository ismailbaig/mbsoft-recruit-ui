import React, {useEffect } from "react";
import logoMBsoft from "../images/logoMBsoft.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-light fixed-top">
              <div className="container">
                <div>
                  <NavLink to="/" className="navbar-brand">
                    <img
                      src={logoMBsoft}
                      className="about-img img-fluid"
                      style={{ width: "50px", height: "50px" }}
                      alt="Logo"
                    />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/" className="navbar-brand fw-bold">
                    Sanabil English School
                  </NavLink>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto fw-bolder">
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className="nav-link"
                        activeClassName="active"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/services"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link btn btn-primary"
                        activeClassName="active"
                      >
                        ENQUIRY
                      </NavLink>
                    </li>
                    <li className="nav-item login-btn">
                      <NavLink
                        to="/login"
                        className="nav-link btn btn-primary"
                        activeClassName="active"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
