import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export const ResetPassword = () => {

  const [pd, pdUpdate] = useState("");
  const [confrimpd, confrimpdUpdate] = useState("");
  //const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const uid = params.uid;

  const handleResetPdSubmit = (event) => {


    event.preventDefault();
    let formData = new FormData();

    formData.append("pd", pd);
    formData.append("confrimpd", confrimpd);

    axios({
      // Endpoint to send files
      //url: "http://localhost:9600/rp",
      url: `https://mbsoftapi.azurewebsites.net/rp` ,
      method: "POST",
      // headers: {

      //   // Add any auth token here
      //   authorization: "your token comes here",
      // },

      // Attaching the form data
      data: { pd: pd, cpd: confrimpd, uid: uid },
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        // toastiy function
        toast.success("Reset Password successfull", {
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
        toast.error("Reset Password failed, Try Again ", {
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
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 col-m-6 col-sm-12 col-xs">
            <form className="container" onSubmit={handleResetPdSubmit}>
              <div className="card">
                <div className="card-header">
                  <h2>Reset Password</h2>
                </div>
                <div className="card-body">
                <div className="form-group" style={{visibility: 'hidden'}}>
                    <label>
                      {uid}
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      New password <span className="required-star">*</span>
                    </label>
                    <input
                      value={pd}
                      onChange={(e) => pdUpdate(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm password  <span className="required-star">*</span>
                    </label>
                    <input
                      type="password"
                      value={confrimpd}
                      onChange={(e) => confrimpdUpdate(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary mx-2">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
