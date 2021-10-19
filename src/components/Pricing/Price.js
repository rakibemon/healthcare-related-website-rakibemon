import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Pricing.css'
const Price = ({ prise }) => {
    //Got thsi data from Pricing components
    const { name, price, facility1, facility2, facility3 } = prise || {};
    const history = useHistory()
    const takingInfo = () => {
        history.push(`/info/${name}`)
    }
    return (
        <Col xs={12} md={6} lg={3}>
            <div className='price-card text-center p-4 mb-4'>
                <h3 className='mb-4'>{name}</h3>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}> <span className='only-price'>${price}</span> / season </p>
                <ul className="list-unstyled price-list">
                    <li>{facility1}</li>
                    <li>{facility2}</li>
                    <li>{facility3}</li>
                </ul>
                <Button onClick={takingInfo} className='price-button rounded-pill py-2 px-4'>Get Offer</Button>
            </div>
        </Col>
    );
};

export default Price;