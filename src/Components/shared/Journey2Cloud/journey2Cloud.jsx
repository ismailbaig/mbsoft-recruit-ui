import { React, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./journey2Cloud.css";

export const Journey2Cloud = () => {
  const initialValues = {
    selectedOption: "",
  };

  const [zeltondata, setData] = useState();
  const [formValues, setFormValues] = useState(initialValues);
  const [shouldSendEmail, setShouldSendEmail] = useState(false);
  //   const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const form = useRef();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldSendEmail(true);
  };

  useEffect(() => {
    fetchJson();
    if (shouldSendEmail) {
      emailjs
      .sendForm(
        "service_2cjv0fm",
        "template_415cxtp",
        form.current,
        "skIZjZsLSN0ykRvcu"
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
        {zeltondata?.contactusPage?.Journey2Cloud.map((item) => (
          <div key={item.id}>
            <div class="question-container">
              <label class="question">{item.Question}</label>
            </div>
            <div className="custom-select ">
              <select>
                {item.Answers.map((answer) => (
                  <option value="option1">{answer}</option>
                ))}
              </select>
              <div class="arrow">&#9660;</div>
            </div>
          </div>
        ))}
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
      </form>
      <ToastContainer />
    </div>
  );
};
