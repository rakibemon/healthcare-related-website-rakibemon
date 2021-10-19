import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/home"> <h2 className='logo'>MEDI<span>CARE</span></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="link" style={{ padding: '8px' }} to='/'> Home</NavLink>
                            <HashLink className="link" style={{ padding: '8px' }} to='/home#service'> Service</HashLink>
                            <HashLink className="link" style={{ padding: '8px' }} to='/home#doctors'> Doctors</HashLink>
                            <HashLink className="link" style={{ padding: '8px' }} to='/home#package'> Package</HashLink>
                            {/* When User logged in "Logout button" when not Login & SignUp button */}
                            {user.displayName || user.email ?
                                <Button onClick={logOut}> Log out</Button>
                                :
                                <div style={{ padding: '8px' }}>
                                    <NavLink className="link" to='/login'> <Button>Log in</Button></NavLink>
                                    <span className='text-white mx-2'> or </span>
                                    <NavLink className="link" to='/reg'> <Button>SignUp</Button></NavLink>
                                </div>
                            }
                        </Nav>
                        {/* display logged user info */}
                        <Nav className="ms-auto">
                            {
                                (user.displayName || user.email) &&
                                <div className='d-flex'>
                                    <p className='me-3 logged-user-name'>{user.displayName}</p>
                                    <img className='user-img' src={user.photoURL} alt={user.displayName + " Image"} />
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