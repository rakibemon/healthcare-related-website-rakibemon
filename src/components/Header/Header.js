import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink style={{ padding: '8px' }} to='/'> Home</NavLink>
                            {user.displayName || user.email?
                                <Button> Log out</Button>
                                :
                                <NavLink style={{ padding: '8px' }} to='/login'> Login</NavLink>
                            }
                        </Nav>
                        <Nav className="ms-auto">
                            {
                                (user.displayName || user.email) &&
                                <div className='d-flex'>
                                    <p className='me-3 logged-user-name'>{user.displayName}</p>
                                    <img className='user-img img-fluid' src={user.photoURL} alt={user.displayName +" Image"}/>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;