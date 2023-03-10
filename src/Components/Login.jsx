import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("proceeded");
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("please enter username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("please enter password");
    }
    return result;
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    //let newfiles = this.state.newfiles;

    let formData = new FormData();

    // Adding files to the formdata
    formData.append("uid", username);
    formData.append("pd", password);

    axios({
      // Endpoint to send files
      //url: "http://localhost:9600/login",
      url: "https://mbsoftapi.azurewebsites.net/login",
      method: "POST",
      // headers: {

      //   // Add any auth token here
      //   authorization: "your token comes here",
      // },

      // Attaching the form data
      data: { uid: username, pd: password },
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        // toastiy function
        toast.success("Login successfully ", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        // toastiy function
        toast.error("Login failed, Try Again ", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <section>
      <div className="row login-page">
        <div className="offset-lg-3 col-lg-5" style={{ marginTop: "100px" }}>
          <form className="container" onSubmit={handleLoginSubmit}>
            <div className="card">
              <div className="card-header">
                <h2>User Login</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>
                    User Name <span className="required-star">*</span>
                  </label>
                  <input
                    value={username}
                    onChange={(e) => usernameUpdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="required-star">*</span>
                  </label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => passwordUpdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-2">
                  Login
                </button>

                <Link className="btn btn-success" to={"/register"}>
                  New User
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
