import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import services from '../../images/contact1.jpg';


export const Contact = () => {
    return ( 
    <div>
      <div className='container mb-5' style={{marginTop: '4rem'}}>
      <div className="gContainerFluid image">
     <img src={services} style={{ width: '100%' }} />
     <div className="gCentered">
       <h2 style={{ fontSize: '5rem' }}>Contact us</h2></div>
   </div>
    </div>
    
<div className="container">
<div className='row'>
<div className='col-md-6'>
    <h1>DROP AN ENQUIRY</h1><br />
   <Form>     
			<Form.Control type="email" placeholder="Enter email" />
    <br />
			<Form.Control type="password" placeholder="Password" />
    <br />
			<Form.Control as="textarea" placeholder="Message" rows="3"/>
    <br />
		<Button className="Submit" variant="primary" type="submit">
			SEND MESSAGE
		</Button>
    </Form>
    </div>
    <div className='col-md-6'>
      <h1>FIND US ON </h1><br />
            <h5>Address</h5>
            <svg width="200" height="20">
                <line x1="0" y1="1" x2="200" y2="1" stroke="red" stroke-width="2" />
              </svg>
            <p> Kurnool,India</p>
            <br />
            <h5>Online Support</h5>
            <svg width="200" height="20">
                <line x1="0" y1="1" x2="200" y2="1" stroke="red" stroke-width="2" />
              </svg>
            <p>Coming Soon</p>
            <br />
            <h5>Contact info</h5>
            <svg width="200" height="20">
                <line x1="0" y1="1" x2="200" y2="1" stroke="red" stroke-width="2" />
              </svg>
            <p> Mon-Fri 9AM-6PM</p>
           
            </div>
          </div>
           </div>
  </div>            
  );
}