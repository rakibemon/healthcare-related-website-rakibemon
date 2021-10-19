import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Price from './Price';
import './Pricing.css'
const Pricing = () => {

    //Store data
    const [pricing, setPricing] = useState([]);

    //Load data
    useEffect(() => {
        fetch('/priceData.json')
            .then(response => response.json())
            .then(data => setPricing(data))
    }, []);
    return (
        <Container id='package'>
            <Row>
                <h2 className="price-title text-center">Our Pricing</h2>
                <p className="price-subtitle text-center">See out exaiting price package with exaiting facilities, We are ready to care of your healt <br /> Grab this Offer </p>
                {
                    pricing.map(price => <Price key={price.id} prise={price}></Price>)
                }
            </Row>
        </Container>
    );
};

export default Pricing;