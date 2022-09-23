import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import Assignment from "./components/Assignment";
import Home from "./components/Home";
import Offer from "./components/Offer"

function App() {
  return (
    <div className="App">
      <div>
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Domov</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/assignment">
              <Nav.Link>Zadanie</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
          <LinkContainer to="/offer">
              <Nav.Link>Ponuka</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;
