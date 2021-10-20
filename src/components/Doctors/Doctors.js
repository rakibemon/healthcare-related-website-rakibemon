import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor';
import './Doctors.css'

const Doctors = () => {
    //store fetched data
    const [doctors, setDoctors] = useState([]);
    //fatching data
    useEffect(() => {
        fetch('/doctorData.json')
            .then(response => response.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <Container id="doctors">
            <Row className='g-3'>
                <h2 className="text-center doctor-title">WELL EXPERIENCED DOCTORS</h2>
                <p className="text-center doctor-subtitle">A small river named Duden flows by their place and supplies it with <br /> the necessary regelialia.</p>
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}> </Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;