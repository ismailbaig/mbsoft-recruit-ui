import { React, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendEmail = () => {
  const initialValues = {
    user_name: "",
    lastName: "",
    user_email: "",
    phoneNo: "",
    services: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [shouldSendEmail, setShouldSendEmail] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(setFormValues);
    const errors = validate({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: errors[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShouldSendEmail(true);
    }
  };

  useEffect(() => {
    if (shouldSendEmail) {
      emailjs
        .sendForm(
          "sdummy",
          "tdummy",
          form.current,
          "dummy"
        )
        .then(
          (result) => {
            console.log(result.text);
            // toastiy function
            toast.success("Email sent successfully ", {
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
          },
          (error) => {
            console.log(error.text);
            // toastiy function
            toast.error("Email not sent, Try Again ", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        )
        .finally(() => {
          setShouldSendEmail(false);
        });
    }
  }, [shouldSendEmail]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "Username is required!";
    }
    if (!values.user_email) {
      errors.user_email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format!";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "Phone Number is required";
    } else if (!/^\d+$/.test(values.phoneNo)) {
      errors.phoneNo = "Phone Number must be a number";
    } else if (values.phoneNo.length < 8 || values.phoneNo.length > 13) {
      errors.phoneNo = "Phone Number cannot should be between 8 to 13 numbers!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }
    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.length < 30) {
      errors.message = "Message must be more than 30 characters";
    } else if (values.message.length > 1000) {
      errors.message = "Message  cannot exceed more than 1000 characters";
    }
    return errors;
  };
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="col-md-6 form-group mb-3 ">
          <label htmlFor="name" style={{ float: "left" }}>
            First Name
          </label>
          <input
            name="user_name"
            type="text"
            className="form-control "
            id="exampleInputName"
            value={formValues.user_name}
            onChange={handleChange}
          />
        </div>
        <div className="errorMessage">
          <p>{formErrors.user_name}</p>
        </div>
        <div className="col-md-6 form-group mb-3">
          <label htmlFor="exampleInputName" style={{ float: "left" }}>
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            className="form-control "
            id="exampleInputName"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="user_email" style={{ float: "left" }}>
            Email address
          </label>
          <input
            name="user_email"
            className="form-control"
            id="user_email"
            value={formValues.user_email}
            onChange={handleChange}
          />
        </div>
        <div className="errorMessage">
          <p>{formErrors.user_email}</p>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputPhone" style={{ float: "left" }}>
            Phone
          </label>
          <input
            name="phoneNo"
            type="tel"
            className="form-control"
            id="exampleInputPhone"
            value={formValues.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="errorMessage">
          <p>{formErrors.phoneNo}</p>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="subjectFor" style={{ float: "left" }}>
            Subject
          </label>
          <input
            name="subject"
            type="text"
            className="form-control"
            id="subjectId"
            value={formValues.subject}
            onChange={handleChange}
          />
        </div>
        <div className="errorMessage">
          <p>{formErrors.subject}</p>
        </div>

        <div className="form-group mb-3 mt-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            style={{ float: "left" }}
          >
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="errorMessage">
          <p>{formErrors.message}</p>
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-5"
          style={{ float: "right" }}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
