import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const initialValues = {
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    gender: "",
  };
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);

  const handleClear = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Registeration failed, Try Again!! ", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Registration successful ", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      errors.password = "Password must include at least one lowercase letter, one uppercase letter, and one number";
    }    
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = "Invalid mobile number";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    return errors;
  };

  return (
    <section id="register">
      <div className="row login-page">
        <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
          <form className="container" onSubmit={handleSubmit}>
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
                      <input
                        className="form-control"
                        value={formValues.username}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            username: e.target.value,
                          })
                        }
                      />
                      {errors.username && (
                        <div className="errorMessage">{errors.username}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={formValues.fullName}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            fullName: e.target.value,
                          })
                        }
                      />
                      {errors.fullName && (
                        <div className="errorMessage">{errors.fullName}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        password <span className="required-star">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={formValues.password}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            password: e.target.value,
                          })
                        }
                      />
                      {errors.password && (
                        <div className="errorMessage">{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Confirm Password{" "}
                        <span className="required-star">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={formValues.confirmPassword}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                      {errors.confirmPassword && (
                        <div className="errorMessage">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Email <span className="required-star">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            email: e.target.value,
                          })
                        }
                      />
                      {errors.email && (
                        <div className="errorMessage">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Mobile <span className="required-star">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={formValues.mobile}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            mobile: e.target.value,
                          })
                        }
                      />
                      {errors.mobile && (
                        <div className="errorMessage">{errors.mobile}</div>
                      )}
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
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            gender: e.target.value,
                          })
                        }
                      ></input>
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="app-check"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            gender: e.target.value,
                          })
                        }
                      ></input>
                      <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ float: "right" }}>
                <a className="btn btn-danger mx-3" onClick={handleClear}>
                  {" "}
                  Clear
                </a>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
