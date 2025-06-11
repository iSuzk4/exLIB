import React from "react";
import "../styles.css";

import Card from "../Componentes/Card";

const recientes = [
  { titulo: "Peli 1", imagen: "/imagenes/p1.jpg" },
  { titulo: "Peli 2", imagen: "/imagenes/p2.jpg" },
];

export default function MasRecientes() {
  return (
    <div>
      <h2>Más Reciente</h2>
      <div className="grid">
        {recientes.map((p, i) => (
          <Card key={i} pelicula={p} />
        ))}
      </div>
    </div>
  );
}
