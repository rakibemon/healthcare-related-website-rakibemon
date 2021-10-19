import React from 'react';
import { Col } from 'react-bootstrap';
import './Contact.css'
const Contact = ({ contact }) => {
    const { logo, name, description } = contact || {};
    return (
        <Col xs={12} md={6} lg={3}>
            <div className='contact  p-4'>
                   <figure className='text-center'>
                   <img className='text-center' src={logo} alt="" />
                   </figure>
                    <h5 className="text-center py-4">{name}</h5>
                    <h6 className="text-center text-muted">{description}</h6>
            </div>
        </Col>
    );
};

export default Contact;