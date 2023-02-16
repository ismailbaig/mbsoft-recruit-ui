import React, { useState, useEffect } from 'react';
import './Home.css';
import homeTop from '../../images/homePage.jpg';
import ph1 from '../../images/ph1.avif';
import ph2 from '../../images/ph2c.avif';
import ph3 from '../../images/ph3avif.avif';
import videoHome from '../../video/videoHome.mp4';
import homep1 from '../../images/photo1.png'
import homep2 from '../../images/photo2.png'
import homep3 from '../../images/photo3.png'
import homep4 from '../../images/photo4.png'
import homep5 from '../../images/Enquirybackgroundimage.jpg'


export const Home = () => {
  const initialValues = { firstName: "", lastName: "", emailId: "", phoneNo: "", services: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
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
      <div className="gContainerFluid">
        <img src={homeTop} alt="Snow" style={{ width: '100%' }} />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCentered ">
          <p className='display-1 fw-bolder'>MBsoft Technologies </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner homeCarouselItem">
              <div className="carousel-item active" data-bs-interval="500">
                <img src={ph1} className="d-block w-100 homeCarouselImage" alt="..." />
              </div>
              <div className="carousel-item homeCarouselItem" data-bs-interval="500">
                <img src={ph2} className="d-block w-100 homeCarouselImage" alt="..." />
              </div>
              <div className="carousel-item homeCarouselItem" >
                <img src={ph3} className="d-block w-100 homeCarouselImage" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='display-3 fw-semibold'>SERVICES</h1>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
            </svg>
          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">WEB & APP DEVELOPMENT</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More</a>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More</a>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card mt-3" >
              <img src={ph3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h3 className='display-4 fw-semibold' style={{ padding: '18px' }}>OUR DEVELOPMENT METHODOLOGY</h3>
        <svg width="80%" height="20">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
        </svg>
        <div className="row mb-5 mt-5" style={{ justifyContent: 'space-around' }}>
          <div className="col-md-2">
            <div >
              <i className="fa-sharp fa-solid fa-laptop homePlanAnalyicon"></i>
              <h4>Planning and Analysis</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div >
              <i className="fa-solid fa-object-ungroup homeDesignDevelopicon"></i>
              <h4>Design and Development</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-sharp fa-solid fa-comments homeTestModifyicon"></i>
              <h4>
                Testing & Modification </h4>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <i className="fa-brands fa-slack homeMaintainSupporticon"></i>
              <h4>Maintenance And Support</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="gContainerFluid gVideo mt-5 mb-5">
        <video src={videoHome} autoPlay muted playsInline loop />
        {/* <div className="centered display-4">Recruitment made simple !!</div> */}
        <div className="gCenteredVideo">
          <p className='display-1 fw-bolder'>About us </p>
          <p >
            We @ MBsoft Technolgies provide variety of services which
            includes web design and development, Android and iOS apps, desktop application, 2D &  3D Modeling and digital marketing.
            Our team has a wide range of skills and
            expertise and we always put our client’s satisfaction first…..
          </p>
        </div>
      </div>
      <div className="row mb-5 mt-5" style={{ justifyContent: 'space-around' }}>
        <div className="col-md-1">
          <div >
            <i className="fas fa-file-alt homePlanAnalyicon"></i>
            <h4>Planning and Analysis</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div >
            <i className="fas fa-database homeDesignDevelopicon"></i>
            <h4>Design and Development</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-thumbs-up homeTestModifyicon"></i>
            <h4>
              Testing & Modification </h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-building homeMaintainSupporticon"></i>
            <h4>Maintenance And Support</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-archway home1MaintainSupporticon"></i>
            <h4>Maintenance And Support</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-file-contract home2MaintainSupporticon"></i>
            <h4>Maintenance And Support</h4>
          </div>
        </div>
        <div className="col-md-1">
          <div>
            <i className="fas fa-cubes home3MaintainSupporticon"></i>
            <h4>Maintenance And Support</h4>
          </div>
        </div>

      </div>


      {/* PORTFOLIO starts here */}
      <div className="row">
        <div className="col-md-4">
          <h1 className='dispaly-4'>PORTFOLIO</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
          <p className='fs-4'>The following is a very small representative
            sample of our vast portfolio of our services with  900+ happy clients.
          </p>
        </div>
        <div className="col-md-4">
          <img className="img-responsive" src={homep1} alt="" style={{ width: '100%', height: '50%' }} />
          <img className="img-responsive" src={homep2} alt="" style={{ width: '100%', height: '50%' }} />
        </div>
        <div className="col-md-4">
          <img className="img-responsive" src={homep4} alt="" style={{ width: '100%', height: '30%' }} />
          <img className="img-responsive" src={homep3} alt="" style={{ width: '100%', height: '40%' }} />
        </div>
      </div>
      {/* PORTFOLIO ends  here */}

      {/* ENQUIRY starts here */}



      {/* ENQUIRY ends here */}
      <div className="row">
        <div className="col-md-5 homeenquiry mx-3 img-fluid" style={{ background: 'url{homep5})' }}>
          <h1 className='dispaly-4'>ENQUIRY</h1>
          <svg width="80%" height="20">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="row mx-4" >
        <div className="col-md-6">
          <div className="row">
            <form onSubmit={handleSubmit}>
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
      </div>


    </div>



  )
}
