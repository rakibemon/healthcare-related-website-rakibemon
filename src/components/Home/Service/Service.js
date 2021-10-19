import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const history = useHistory();
    // got this info from Services component
    const { id, name, img, description } = props.service || {};
    // Go to service Details
    const goServices = () => {
        history.push(`services/${id}`)
    }
    return (
        <Col xs={12} md={6} lg={4} >
            <div className='p-3 rounded service-card'>
                <img className='img-fluid rounded' src={img} alt={name + " Image"} />
                <h3>{name}</h3>
                <p>{description.slice(0, 120)}</p>
                <div className='text-center'>
                    <Button onClick={goServices}> See Details </Button>
                </div>
            </div>
        </Col>
    );
};

export default Service;