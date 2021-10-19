import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='g-4'>
                    <Col sm={6} md={5} lg={5} xl={3}>
                        <div>
                            <Link to='/home' style={{ textDecoration: 'none' }}>  <h2 className='logo'>MEDI<span>CARE</span></h2></Link>
                            <p style={{ margin: '30px 0px' }}>We are ready to give you treatment. Make a appointment with us</p>
                            <div className='d-flex'>
                                <Link className='social-link' to='https://www.facebook.com/aronno.avro/'> <i className="fab fa-facebook"></i> </Link>
                                <Link className='social-link' to='https://www.linkedin.com/in/md-rakib-istiak-82243b1ba/'> <i className="fab fa-linkedin-in"></i> </Link>
                                <Link className='social-link' to='https://github.com/rakibemon'> <i className="fab fa-github"></i> </Link>
                            </div>
                        </div>
                    </Col>

                    <Col sm={6} md={5} lg={5} xl={3}>
                        <div>
                            <h4> Contact </h4>
                            <ul className='list-unstyled'>
                                <li><i className="fas fa-map-marker-alt lh-lg me-2  fs-5"></i>House#1062, Banani Model Town, Dhaka</li>
                                <li><i className="fas fa-envelope me-3 lh-lg fs-5"></i>rakibemon03@gmail.com</li>
                                <li> <i className="fas fa-phone-alt me-3 lh-lg fs-5"></i>01521248316</li>
                            </ul>
                        </div>
                    </Col>

                    <Col sm={6} md={5} lg={5} xl={3}>
                        <div>
                            <h4> Links </h4>
                            <ul className='list-unstyled thin-letter'>
                                <Link className='link lh-lg' to='/home'> <li> Home </li> </Link>
                                <Link className='link lh-lg' to='/about'> <li> About </li> </Link>
                                <Link className='link lh-lg' to='/services'> <li> Services </li> </Link>
                                <Link className='link lh-lg' to='/contact'> <li> Contact </li> </Link>
                            </ul>
                        </div>
                    </Col>

                    <Col sm={6} md={5} lg={5} xl={3}>
                        <div>
                            <h4 style={{ fontWeight: '500' }}> Newsletter</h4>
                            <p className='thin-letter'>Subscribe our newsletter to get updates.</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form>
                            <br /> <br />
                            <Button variant="success">Subscribe</Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <p className="text-center mt-4"> Copyright &copy; 2021 All rights reserved | This website is made with React by <b>Emon</b></p>
                </Row>
            </Container>

        </footer>
    );
};

export default Footer;