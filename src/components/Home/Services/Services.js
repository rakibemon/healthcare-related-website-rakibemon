import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    //fetch data
    const { services } = useData();
    return (
        <Container id='services'>
            <h2 className='service-title mb-4 text-center'>Our Services</h2>
            <Row className='g-4'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;