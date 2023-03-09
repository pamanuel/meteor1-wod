import React from 'react';
import { Container, Image } from 'react-bootstrap';

const CenterImage = () => (
  <Container className="d-flex align-self-center justify-content-center">
    <Image src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png" width="500px" style={{ marginTop: '125px' }} />
  </Container>
);

export default CenterImage;
