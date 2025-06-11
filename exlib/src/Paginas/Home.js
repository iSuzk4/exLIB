import React from "react";
import "../styles.css";

import Card from "../Componentes/Card";

const peliculas = [
  {
    titulo: "Pelicula de Culto ",
    imagen:
      "https://media.posterlounge.com/img/products/710000/705266/705266_poster_l.jpg",
  },
  {
    titulo: "Pelicula Anotm",
    imagen:
      "https://media.posterlounge.com/img/products/710000/705266/705266_poster_l.jpg",
  },

  {
    titulo: "Pelicula Contn",
    imagen:
      "https://media.posterlounge.com/img/products/710000/705266/705266_poster_l.jpg",
  },
  {
    titulo: "Pelicula Contn",
    imagen:
      "https://media.posterlounge.com/img/products/710000/705266/705266_poster_l.jpg",
  },
  {
    titulo: "Pelicula Contn",
    imagen:
      "https://media.posterlounge.com/img/products/710000/705266/705266_poster_l.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <h2>NETFLIX</h2>
      <p>Peliculas y series de antes...</p>
      <h2></h2>
      <div></div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {peliculas.map((peli, index) => (
          <Card key={index} pelicula={peli} />
        ))}
      </div>
    </div>
  );
}
