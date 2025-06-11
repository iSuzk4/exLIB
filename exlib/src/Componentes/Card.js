import React from "react";

import { useNavigate } from "react-router-dom";

export default function Card({ pelicula }) {
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const actualizado = [...carrito, pelicula];
    localStorage.setItem("carrito", JSON.stringify(actualizado));
    navigate("/carrito");
  };

  return (
    <div className="card">
      <img src={pelicula.imagen} alt={pelicula.titulo} />
      <h4>{pelicula.titulo}</h4>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
}
