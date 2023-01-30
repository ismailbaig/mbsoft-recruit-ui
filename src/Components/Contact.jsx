import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Contact = () => {
    return ( 
     <div>
        <div className="mb-5 mt-3">
          <div lg="8">
            <h1 className="display-4 mb-4">Contact us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </div>
          <div className='row'>
          <div className='col-md-4'>
            <h5>Address</h5>
            <p> Kurnool,India</p>
            </div>

            <div className='col-md-4'>
            <h5>Online Support</h5>
            <p> Coming soon</p>
            </div>

            <div className='col-md-4'>
            <h5>Contact info</h5>
            <p> Mon-Fri 9AM-6PM</p>
            </div>
          </div>
    </div>
    
<div className="container">
<div className="row-justify-content-md-center">
    <h3>Discuss your Project</h3><br />
   <Form>     
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
		</Form.Group>
		<Form.Group  controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" />
		</Form.Group>
        <Form.Group  controlId="subject">
			<Form.Label>Subject</Form.Label>
			<Form.Control as="textarea" placeholder="Subject" rows="3"/>
		</Form.Group>
		<Button variant="primary" type="submit">
			Submit
		</Button>
    </Form>
    </div>
    </div>
  </div>            
  );
}