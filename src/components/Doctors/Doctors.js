import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Doctor from './Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctorData.json')
        .then(response=> response.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <Container id="doctors">
                <Row className=''>
                    <h2 className="text-center doctor-title">WELL EXPERIENCED DOCTORS</h2>
                    <p className="text-center doctor-subtitle">A small river named Duden flows by their place and supplies it with <br /> the necessary regelialia.</p>
                    {
                        doctors.map(doctor=> <Doctor key={doctor.id} doctor={doctor}> </Doctor>)
                    }
                </Row>
        </Container>
    );
};

export default Doctors;