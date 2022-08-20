import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth)
  const handleLogout = () =>{
    signOut(auth);
  }
    return (
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{fontWeight: "bold"}}>Skill Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Courses</Nav.Link>            
          </Nav>
          <Nav>
            
            {
              user ? 
              <button className='btn btn-link text-secondary text-decoration-none' onClick={handleLogout}>Log Out</button>
              :
              <Nav.Link eventKey={2} as={Link} to="login">
              Log In
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;