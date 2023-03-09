import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="fixed-bottom">
    <Container>
      <Row className="pt-4">
        <Col>
          <h3>Hours</h3>
          <div className="mt-3">Wednesday - Thursday 5pm – 10pm</div>
          <div>Friday - Saturday 5pm – 11pm</div>
          <div>Sunday Brunch 10am - 2pm</div>
        </Col>
        <Col>
          <h3>Stay Connected</h3>
          <div className="mt-3"><a href="#s" style={{ color: 'black' }}>Instagram</a></div>
          <div><a href="#s" style={{ color: 'black' }}>Contact Us</a></div>
          <div><a href="#s" style={{ color: 'black' }}>Gift Cards</a></div>
          <div><a href="#s" style={{ color: 'black' }}>Reservations</a></div>
        </Col>
        <Col />
        <Col>
          <h3>THE BOARDROOM</h3>
          <div className="mt-3">44 Kainehe St.</div>
          <div>Kailua, HI 96734</div>
          <br />
          <div>(808)807-5640</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
