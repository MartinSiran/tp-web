import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import Assignment from "./components/Assignment";
import Home from "./components/Home";
import Offer from "./components/Offer"
import Reports from "./components/Reports";

function App() {
  return (
    <div className="App">
      <Nav variant="tabs" justify="true" defaultActiveKey="/">
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
        <Nav.Item>
          <LinkContainer to="/reports">
            <Nav.Link>Zápisnice</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
