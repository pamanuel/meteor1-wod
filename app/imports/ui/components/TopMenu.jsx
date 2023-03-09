import React from 'react';
import { Container, Navbar, Nav, Image, Button } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="secondary" expand="lg">

    <Container>
      <Nav className="justify-content-start">
        <Nav.Link style={{ color: 'white' }}><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-center">
        <Image src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png" width="70px" />
      </Nav>
      <Nav className="justify-content-end">
        <Button variant="dark">Menu</Button>
      </Nav>
    </Container>
  </Navbar>
);
export default TopMenu;
