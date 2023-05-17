import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gym Buddy</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={'/'}>Home</Link>
          <Link to={'/history'}>History</Link>
          <Link to={'/calendar'}> Calendar</Link>
        </Nav>
        <Link to={'/login'}><Button variant="outline-success">Logout</Button></Link>
      </Container>
    </Navbar>
  );
}