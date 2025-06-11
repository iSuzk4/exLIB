import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const coleccion = [
  { titulo: "Colección 1", id: "c1" },
  { titulo: "Colección 2", id: "c2" },
];

export default function Colecciones() {
  const navigate = useNavigate();

  const handleAddToCart = (coleccion) => {
    // Guardar la colección en el localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({
      titulo: coleccion.titulo,
      id: coleccion.id,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    navigate("/carrito");
  };

  return (
    <div>
      <h2>Colecciones</h2>
      <div className="grid">
        {coleccion.map((p, i) => (
          <div
            key={i}
            className="card"
            onClick={() => handleAddToCart(p)}
            style={{ cursor: "pointer" }}
          >
            <h3>{p.titulo}</h3>
            <p>Haz clic para añadir al carrito</p>
          </div>
        ))}
      </div>
    </div>
  );
}
