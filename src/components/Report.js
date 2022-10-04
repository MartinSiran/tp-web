import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import offer from '../TP1_Ponuka.pdf'

const Report = () => {
  return (
    <Container>
      <h1 class="mt-3">Ponuka</h1>
      <Button variant='primary' href={offer}>Zobraziť</Button>
    </Container>
  );
}

export default Report;
