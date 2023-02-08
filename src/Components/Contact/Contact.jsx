import { React, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contact from '../../images/contact.jpg';
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dummy', 'template_dummy', form.current, 'dummy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
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
            <h1>DROP AN ENQUIRY</h1><br />
            <form ref={form} onSubmit={sendEmail} className=''>
              <div class="form-group">
                <input type="text" class="form-control" placeholder='Full Name' name='user_name' required /><br />
                <input type="email" class="form-control" placeholder='Email' name='user_email' required /><br />
                <input type="text" class="form-control" placeholder='Subject' name='subject' required /><br />
                <textarea name='message' class="form-control" placeholder='Message' cols='30' rows='10'></textarea><br />
                <button type="submit" color="#fb2056" class="btn btn-primary" style={{float: 'right'}}>SEND MESSAGE</button>
              </div>
            </form>
          </div>
          <div className='col-md-6 mt-5'>
            <h1>FIND US ON </h1><br />
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