import { React, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./journey2Cloud.css";

export const Journey2Cloud = () => {
  const initialValues = {
    user_email: "",
    selectedOption1: "N/A",
    selectedOption2: "N/A",
    selectedOption3: "N/A",
    selectedOption4: "N/A",
    selectedOption5: "N/A",
    selectedOption6: "N/A",
    selectedOption7: "N/A",
    selectedOption8: "N/A",
    selectedOption9: "N/A",
    selectedOption10: "N/A",
  };
  const [zeltondata, setData] = useState();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [shouldSendEmail, setShouldSendEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      const formData = {
        ...formValues,
        selectedOption1: formValues.selectedOption1,
        selectedOption2: formValues.selectedOption2,
        selectedOption3: formValues.selectedOption3,
        selectedOption4: formValues.selectedOption4,
        selectedOption5: formValues.selectedOption5,
        selectedOption6: formValues.selectedOption6,
        selectedOption7: formValues.selectedOption7,
        selectedOption8: formValues.selectedOption8,
        selectedOption9: formValues.selectedOption9,
        selectedOption10: formValues.selectedOption10,
      };
      setShouldSendEmail(true);
    }
  };

  useEffect(() => {
    fetchJson();
    if (shouldSendEmail) {
      const formData = {
        ...formValues,

        selectedOption1: formValues.selectedOption1,
        selectedOption2: formValues.selectedOption2,
        selectedOption3: formValues.selectedOption3,
        selectedOption4: formValues.selectedOption4,
        selectedOption5: formValues.selectedOption5,
        selectedOption6: formValues.selectedOption6,
        selectedOption7: formValues.selectedOption7,
        selectedOption8: formValues.selectedOption8,
        selectedOption9: formValues.selectedOption9,
        selectedOption10: formValues.selectedOption10,
      };
      emailjs
        .sendForm("service_dummy", "template_dummy", form.current, "dummy")
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

    if (!values.user_email) {
      errors.user_email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format!";
    }
    return errors;
  };

  const fetchJson = () => {
    setTimeout(() => setIsLoading(true));
    fetch("data/zelton.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[0]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption1"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption1}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[1]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption2"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption2}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[2]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption3"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption3}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[3]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption4"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption4}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[4]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption5"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption5}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[5]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption6"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption6}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[6]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption7"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption7}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[7]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption8"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption8}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[8]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption9"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption9}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="question-container">
          <label className="question">
            {zeltondata?.contactusPage?.Journey2Cloud[9]}
          </label>
        </div>
        <div className="custom-select ">
          <select
            name="selectedOption10"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.selectedOption10}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
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
