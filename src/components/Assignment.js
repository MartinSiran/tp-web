import React from "react";
import Container from 'react-bootstrap/Container';

const Assignment = () => {
  return (
    <Container>
      <h2 className="mt-3">Decentralizovaná aplikácia pre vedecké projekty</h2>
      <p>Analyzujte, navrhnite, implementujte a otestujte decetralizovanú aplikáciu pre vedecké projekty. Aplikácia by v prostredí P2P mala umožňovať jednak zdieľanie dokumentov, tiež podporu kolaboratívnej vedeckej práce, prípadne inú vhodnú funkcionalitu. Mala by byť založená napr. (nie však nutne) na princípe kryptograficky zreťazených blokov (blockchain), smart kontraktov, alebo na inom príbuznom koncepte.</p>
    </Container>
  );
}

export default Assignment;
