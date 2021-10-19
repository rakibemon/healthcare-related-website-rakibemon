import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Contact from './Contact';
import mapImg from '../../img/map.jpg'
import './Contact.css'
const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch('/contactData.json')
            .then(response => response.json())
            .then(data => setContacts(data))
    }, []);
    return (
        <Container>
            <Row className='g-4 d-flex justify-content-start align-items-center' style={{ marginTop: '140px' }}>
                <h1 className="text-center">Contact Us</h1>
                <h6 className="text-center text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h6>
                {
                    contacts.map(contact => <Contact key={contact.id} contact={contact}></Contact>)
                }
            </Row>
            <Row className='d-flex justify-content-start align-items-center mt-5'>
                <Col xs={12} md={6}>
                    <figure>
                        <img className='img-fluid' src={mapImg} alt="" />
                    </figure>
                </Col>
                <Col xs={12} md={6}>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className='py-2 px-4 contact-button' variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;