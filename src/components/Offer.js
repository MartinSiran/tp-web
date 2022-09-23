import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import offer from '../TP1_Ponuka.pdf'

const Offer = () => {
  return (
    <div className="App">
      <Container>
        <h1 class="mt-3">Ponuka</h1>
        <Button variant='primary' href={offer}>Zobraziť</Button>
      </Container>
    </div>
  );
}

export default Offer;
