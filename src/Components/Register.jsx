import React from "react";

const Register = () => {
  return (
    <section>
      <div className="row login-page">
        <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
          <form className="container">
            <div className="card">
              <div className="card-header">
                <h1>User Registration</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        User Name <span className="required-star">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        password <span className="required-star">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Confirm Password{" "}
                        <span className="required-star">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Email <span className="required-star">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Mobile <span className="required-star">*</span>
                      </label>
                      <input className="form-control" />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className='required-star'>*</span></label>
                                        <select className='form-control' >
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="africa">Africa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ROLES <span className='required-star'>*</span></label>
                                        <select className='form-control' >
                                            <option value="india">ADMIN</option>
                                            <option value="usa">CUSTOMER</option>
                                            <option value="africa">CLIENT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Gender</label>
                      <br></br>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="app-check"
                      ></input>
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        className="app-check"
                      ></input>
                      <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ float: 'right' }}>
                <a className="btn btn-danger mx-3">Clear</a>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
