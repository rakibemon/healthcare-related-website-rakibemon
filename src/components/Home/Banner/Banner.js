import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='home-bg' id='banner'>
            <Container>
                <Row className='hero-section'>
                    <Col xs={12} md={12}>
                        <h1 className='hero-title'>Have an Access to a Health <br /> <b>Professional at any time</b></h1>
                        <p>Separated they live in Bookmarksgrove right at the coast of the <br /> Semantics, a large language ocean.</p>
                        <Button variant='success rounded-lg py-3 px-4'>Make an Appoinment</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;