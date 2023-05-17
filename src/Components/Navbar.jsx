import React, { useState, useEffect } from "react";
import sanabilLogo from "../images/sanabilLogo.jpeg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  //const currentPath = window.location.pathname;
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  // let navClass = '';

  // if (currentPath === '/') {
  //   navClass = 'home-page';
  // } else if (currentPath === '/about') {
  //   navClass = 'non-home-page';
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-light fixed-top">
              <div className="container">
                <div className="logonname">
                  <NavLink to="/" className="navbar-brand">
                    <img
                      src={sanabilLogo}
                      className="about-img img-fluid"
                      style={{ width: "50px", height: "50px" }}
                      alt="Logo"
                    />
                  </NavLink>
                  <div className="h-name">
                    <h3>SANABIL</h3>
                    <div className="sub-info">English High School</div>
                    <div className="sub-sub-info sub-sub-info-mrgin">
                      Learners Today, Leaders Tomorrow
                    </div>
                  </div>
                </div>
                {/* <div>
                  <h3>SANABIL</h3>
                  <div className="sub-info">English High School</div>
                  <div className="sub-sub-info sub-sub-info-mrgin">Learners Today, Leaders Tomorrow</div>
                </div> */}

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                  onClick={toggleNavbar}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    collapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto fw-bolder">
                    <li className="nav-item">
                      <NavLink
                        exact="true"
                        to="/"
                        className="nav-link"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className="nav-link"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/services"
                        className="nav-link"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/gallery"
                        className="nav-link"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link btn btn-primary"
                        activeclassname="active"
                        onClick={toggleNavbar}
                      >
                        ENQUIRY
                      </NavLink>
                    </li>
                    <li className="nav-item login-btn">
                      <NavLink
                        to="/login"
                        className="nav-link btn btn-primary"
                        activeclassname="active"
                        onClick={() => {
                          toggleNavbar();
                          navigate("/login");
                        }}
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
