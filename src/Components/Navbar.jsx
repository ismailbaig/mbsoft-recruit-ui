import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-light ">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">MBsoft</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 h4 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" href="contact">ENQUIRY</a>
                            </li>
                        </ul>
                        {/* <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart (0)</a>
                        </div> */}

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar