import React, { useEffect } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TakingInfo.css';
const TakingInfo = () => {

    //change the title when change the route
    useEffect(()=>{
        document.title='User info';
      },[]);



    const { name } = useParams();
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
            <Form>
                <h1 className='text-center mb-4 info-title'> Fill up this form </h1>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                        <Form.Control style={{ fontWeight: '700', color: 'cadetblue' }} plaintext readOnly defaultValue={name} />
                    </Col>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Time</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>10am</option>
                            <option>2pm</option>
                            <option>8pm</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Mirpur</option>
                            <option>Dhanmondi</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default TakingInfo;