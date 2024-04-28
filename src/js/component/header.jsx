//import react into the bundle
import React from "react";

// include your styles into the webpack bundle


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    //style={{ position:'fixed'}}
    <Navbar collapseOnSelect expand="lg" bg="dark"  sticky="top"  variant="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#about">
              about
            </Nav.Link>
            <Nav.Link eventKey={2} href="#services">
              Services
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;