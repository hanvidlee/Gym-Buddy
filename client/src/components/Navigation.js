import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gym Buddy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
          <Nav.Link href="#calendar">Calendar</Nav.Link>
        </Nav>
        <Button variant="outline-success">Logout</Button>
      </Container>
    </Navbar>
  )
  }