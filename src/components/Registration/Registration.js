import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import regImg from '../../img/signup-image.jpg';
import './Registration.css'

const Registration = () => {
    const { setUser, setError, error, setIsLoading, signInUsingGoogle, signInUsingFb, signInUsingEmail, updateUserProfile } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gmi;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gmi;
    // Collect email
    const handleEmail = (event) => {
        if ((event.target.value).match(emailRegExp)) {
            setEmail(event.target.value)
        }
        else {
            setError('Enter Valid Email')
        }
    };

    //Collect Pass
    const handlePassword = (event) => {
        if ((event.target.value).match(passwordRegExp)) {
            setPassword(event.target.value)
        }
        else {
            setError('Enter Valid Password')
        }
    };
    // Collect Name
    const handleName = (event) => {
        setName(event.target.value)
    };
    //Where user want to go or send him to home page
    const redirect_url = location.state?.from || '/home';

    // Google Sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    // Facebook Signin 
    const handleFbSignIn = () => {
        signInUsingFb()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    // Create user with Email and Password
    const handleRegister = (event) => {
        event.preventDefault();
        signInUsingEmail(email, password);
        updateUserProfile(name)

    };
    return (
        <Container className='d-flex sign'>
            <Row className='d-flex justify-content-center align-items-center w-75 mx-auto login-row'>
                <Col xs={12} md={6}>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmailReg">
                                <Form.Label className='requried reg-email'>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload Your Photo</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='requried'>Password</Form.Label>
                                <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                                <Form.Text className="text-muted">
                                    Minimum eight characters, at least one uppercase letter and one lowercase letter and one number
                                </Form.Text>
                            </Form.Group>
                            <Button onClick={handleRegister} variant="info" type="submit" className='py-2 px-3 text-white'>
                                Sign up
                            </Button>
                            <p className='text-danger mt-4'> {error}</p>
                            <div className="d-flex mt-5 align-items-center">
                                <p className='login-with'>Or log in With</p>
                                <i onClick={handleGoogleSignIn} className="fab fa-google-plus-square mx-4 login google"></i>
                                <i onClick={handleFbSignIn} className="fab fa-facebook-square login facebook"></i>
                            </div>
                        </Form>
                    </div>
                </Col>


                <Col xs={12} md={6}>
                    <figure>
                        <img className='img-fluid reg-img' src={regImg} alt="Reg page" />
                    </figure>
                    <div className='mt-5 have-account'>
                        <Link to='/login'> Already have account?</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;