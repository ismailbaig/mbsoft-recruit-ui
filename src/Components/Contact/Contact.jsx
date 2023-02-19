import { React } from 'react';
import contact from '../../images/contact.jpg';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';
import {SendEmail} from '../shared/sendemail/sendemail';


export const Contact = () => {

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
              <SendEmail></SendEmail>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Address</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p> #41/454 SV Complex, 3rd floor,
              <br />
              Opp Kalyana Mandapa, S.T.B.C Road,
              <br />
              Kurnool - 518004</p>
            <br />
            <h5>Online Support</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p>Coming Soon</p>
            <br />
            <h5>Office Hours</h5>
            <svg width="80%" height="20">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="red" strokeWidth="2" />
            </svg>
            <p> 9:00 AM - 6:00 PM (Mon to Sat)</p>
            <SocialIcon network='linkedin' url='https://www.linkedin.com/in/ismail-baig-m' target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
}