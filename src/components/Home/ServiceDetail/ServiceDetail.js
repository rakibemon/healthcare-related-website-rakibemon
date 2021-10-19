import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    const { services } = useData();
    const [singleService, setSingleService] = useState({});
    const history = useHistory()
    const goBack = () => {
        history.push('/home#service')
    };
    //find clicked data by id
    useEffect(() => {
        if (services.length) {
            const foundService = services.find(service => service.id === parseInt(serviceId));
            setSingleService(foundService)
        }
    }, [services, serviceId]);
    //got matched data
    const { name, description, img } = singleService || {};
    return (
        <div className='service-details text-center mx-auto'>
            <figure>
                <img className='img-fluid' src={img} alt="" />
            </figure>
            <h3>{name}</h3>
            <p>{description}</p>
            <Button onClick={goBack} variant='info' className='text-white py-2 px-4'> Go Back</Button>
        </div>
    );
};

export default ServiceDetail;