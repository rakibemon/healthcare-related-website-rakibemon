import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../img/signin-image.jpg';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle,setUser,setError,setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const handleSignIn = () =>{
        signInUsingGoogle()
        .then(result =>{
            setUser(result.user);
            history.push(redirect_url)
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    return (
        <Container className='d-flex'>
            <Row className='d-flex justify-content-center align-items-center w-75 mx-auto login-row'>
                <Col xs={12} md={6}>
                    <figure>
                        <img src={img} alt="Login page" />
                    </figure>
                    <div className='mt-5'>
                        <Link to='/register'> Create an account</Link>
                    </div>
                </Col>


                <Col xs={12} md={6}>
                    <div>
                        <Form className='w-75'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="info" type="submit" className='py-2 px-3 text-white'>
                                Login
                            </Button>
                            <div className="d-flex mt-5 align-items-center">
                                <p className='login-with'>Or log in With</p>
                                <i onClick={handleSignIn} className="fab fa-google-plus-square mx-4 login google"></i>
                                <i className="fab fa-facebook-square login facebook"></i>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;