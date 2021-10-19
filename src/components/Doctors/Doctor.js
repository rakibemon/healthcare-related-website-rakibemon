import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Doctors.css'
const Doctor = ({ doctor }) => {
    const history = useHistory();
    const takingInfo = () => {
        history.push(`/info/${name}`)
    }
    // Got this info from Doctors Component
    const { name, designation, img } = doctor || {};
    return (
        <Col xs={12} md={6} lg={3}>
            <div className='doctor-card border p-3 text-center'>
                <img className='img-fluid' src={img} alt="" />
                <h3 className='doctor-name'>{name}</h3>
                <p className='doctor-designation'>{designation}</p>
                <Button onClick={() => takingInfo(name)} variant='success' className='p-2'>Make an Appoinment</Button>
            </div>
        </Col>
    );
};

export default Doctor;