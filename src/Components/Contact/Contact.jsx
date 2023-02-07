import { React, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contact from '../../images/contact.jpg';
import emailjs from '@emailjs/browser';


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

      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
            <h1>DROP AN ENQUIRY</h1><br />
            <form ref={form} onSubmit={sendEmail} className=''>
              <input type="text" placeholder='Full Name' name='user_name' required />
              <input type="email" placeholder='Email' name='user_email' required />
              <input type="text" placeholder='Subject' name='subject' required />
              <textarea name='message' cols='30' rows='10'></textarea>
              <button type='submit' className='--btn --btn-primay' >Send Message</button>
            </form>
            {/* <Form onSubmit={this.sendEmail}>
              <Form.Control type="email" placeholder="Enter email" />
              <br />
              <Form.Control type="text" placeholder="Subject" />
              <br />
              <Form.Control type="text" placeholder="Phone Number" />
              <br />
              <Form.Control as="textarea" placeholder="Message" rows="3" />
              <br />
              <Button className="Submit" variant="primary" type="submit">
                SEND MESSAGE
              </Button>
            </Form> */}
          </div>
          <div className='col-md-6'>
            <h1>FIND US ON </h1><br />
            <h5>Address</h5>
            <svg width="200" height="20">
              <line x1="0" y1="1" x2="200" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p> #41/454 SV Complex, 3rd floor,
              <br />
              Opp Kalyana Mandapa, S.T.B.C Road,
              <br />
              Kurnool - 518004</p>
            <br />
            <h5>Online Support</h5>
            <svg width="200" height="20">
              <line x1="0" y1="1" x2="200" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p>Coming Soon</p>
            <br />
            <h5>Contact info</h5>
            <svg width="200" height="20">
              <line x1="0" y1="1" x2="200" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p> Mon-Fri 9AM-6PM</p>

          </div>
        </div>
      </div>
    </div>
  );
}