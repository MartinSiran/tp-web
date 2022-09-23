import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import Assignment from "./components/Assignment";
import Home from "./components/Home";
import Offer from "./components/Offer"

function App() {
  return (
    <div className="App">
      <div>
          <nav>
              <ul id="navigation">
                  <li>
                      <Link to="/">Domov</Link>
                  </li>
                  <li>
                      <Link to="/assignment">Zadanie</Link>
                  </li>
                  <li>
                      <Link to="/offer">Ponuka</Link>
                  </li>
              </ul>
          </nav>
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
