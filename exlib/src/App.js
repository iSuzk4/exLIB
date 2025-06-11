import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Home from "./Paginas/Home";
import Login from "./Paginas/Login";
import MasRecientes from "./Paginas/MasRecientes";
import Colecciones from "./Paginas/Colecciones";
import Carrito from "./Paginas/Carrito";
import "./styles.css"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mas-reciente" element={<MasRecientes />} />
          <Route path="/colecciones" element={<Colecciones />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
