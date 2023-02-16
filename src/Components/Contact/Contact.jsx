import { React, useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contact from '../../images/contact.jpg';
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';


export const Contact = () => {

  const initialValues = { firstName: "", lastName: "", emailId: "", phoneNo: "", services: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5b0pc3', 'template_etl0567', form.current, 'pdwbAeCG1HvkYOFHB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    console.log(setFormValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
    }
  }

  useEffect(() => {

  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.firstName) {
      errors.firstName = "Username is required!";
    }
    if (!values.emailId) {
      errors.emailId = "Email is required!";
    }
    else if (!regex.test(values.emailId)) {
      errors.emailId = "This is not a valid email format!";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "Phone Number is required";
    } else if (values.phoneNo.length < 10) {
      errors.phoneNo = "Phone Number must be 10 characters";
    } else if (values.phoneNo.length > 10) {
      errors.phoneNo = "Phone Number cannot exceed more than 10 characters";
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
      <div className='container mb-5' style={{ marginTop: '4rem' }}>
        <div className="gContainerFluid image">
          <img src={contact} style={{ width: '100%' }} />
          <div className="gCentered">
            <h2 style={{ fontSize: '5rem' }}>Contact us</h2></div>
        </div>
      </div>

      <div className="container mb-5">
        <div className='row'>
          <div className='col-md-6'>
            <h1>DROP AN ENQUIRY</h1>
          </div>
          <div className="col-md-6">
            <h1 className='dispaly-4'>FIND US ON </h1>
          </div>
        </div>
        <div className="row mx-4" >
          <div className="col-md-6">
            <div className="row">
              <form onSubmit={handleSubmit && sendEmail}>
                <div className="col-md-6 form-group mb-3 ">
                  <label htmlFor="name" style={{ float: 'left' }}>Name</label>
                  <input name="firstName" type="text" className="form-control " id="exampleInputName" value={formValues.firstName} onChange={handleChange} />
                </div>
                <div className="errorMessage"><p>{formErrors.firstName}</p></div>
                <div className="col-md-6 form-group mb-3">
                  <label htmlFor="exampleInputName" style={{ float: 'left' }}>Last Name</label>
                  <input name="lastName" type="text" className="form-control " id="exampleInputName" value={formValues.lastName} onChange={handleChange} />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="emailId" style={{ float: 'left' }}>Email address</label>
                  <input name="emailId" className="form-control" id="emailId" value={formValues.emailId} onChange={handleChange} />
                </div>
                <div className="errorMessage"><p>{formErrors.emailId}</p></div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputPhone" style={{ float: 'left' }}>Phone</label>
                  <input name="phoneNo" type="tel" className="form-control" id="exampleInputPhone" value={formValues.phoneNo} onChange={handleChange} />
                </div>
                <div className="errorMessage"><p>{formErrors.phoneNo}</p></div>
                <div className="form-group mb-3">
                  <div>
                    <label htmlFor="exampleInputPhone" style={{ float: 'left' }}>Services</label>
                  </div>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle"
                      style={{ textAlign: 'left', width: '100%', border: '1px solid lightgray' }}
                      name="services" type="button" data-bs-toggle="dropdown" aria-expanded="false" value={formValues.services} onChange={handleChange}>
                      Select Services
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className="form-group mb-3 mt-3">
                  <label htmlFor="exampleFormControlTextarea1" style={{ float: 'left' }}>Message</label>
                  <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" value={formValues.message} onChange={handleChange}></textarea>
                </div>
                <div className="errorMessage"><p>{formErrors.message}</p></div>
                <button type="submit" className="btn btn-primary mb-5">Submit</button>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="success">MESSAGE SENT SUCCESSFULLY </div>
                ) : (
                  <h5> Fill the Details</h5>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Address</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
            </svg>
            <p> #41/454 SV Complex, 3rd floor,
              <br />
              Opp Kalyana Mandapa, S.T.B.C Road,
              <br />
              Kurnool - 518004</p>
            <br />
            <h5>Online Support</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
            </svg>
            <p>Coming Soon</p>
            <br />
            <h5>Office Hours</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" stroke-width="2" />
            </svg>
            <p> 9:00 AM - 6:00 PM (Mon to Sat)</p>
            <SocialIcon network='linkedin' url='https://www.linkedin.com/in/ismail-baig-m' target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
}