import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../img/signin-image.jpg';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle, setUser, error, setError, setIsLoading, signInUsingFb, handleLoginUsingEmail } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //collect email
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };

    //collect password
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    //where user wanted to go or send user to homepage
    const redirect_url = location.state?.from || '/home';

    //Google Sign in
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

    // Facebook Sign in
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

    // Login using Email & Password
    const handleLogin = (event) => {
        event.preventDefault();
        handleLoginUsingEmail(email, password);
        if (!error.length) {
            history.push(redirect_url)
        }
    };
    return (
        <Container className='d-flex sign'>
            <Row className='d-flex justify-content-center align-items-center w-75 mx-auto login-row'>
                <Col xs={12} md={6}>
                    <figure>
                        <img src={img} alt="Login page" />
                    </figure>
                    <div className='mt-5'>
                        <Link to='/reg'> Create an account</Link>
                    </div>
                </Col>


                <Col xs={12} md={6}>
                    <div>
                        <Form className='w-75'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button onClick={handleLogin} variant="info" type="submit" className='py-2 px-3 text-white'>
                                Login
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
            </Row>
        </Container>
    );
};

export default Login;