import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

// copia y pega de mi proyectoxd
const productosEjemplo = {
  c1: { imagen: "/imagenes/c1.jpg", precio: 19.99 },
  c2: { imagen: "/imagenes/c2.jpg", precio: 24.99 },
};

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  useEffect(() => {
    const nuevoTotal = carrito.reduce((sum, item) => {
      return (
        sum + (productosEjemplo[item.id]?.precio || 0) * (item.cantidad || 1)
      );
    }, 0);
    setTotal(nuevoTotal);
  }, [carrito]);

  const actualizarCantidad = (index, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;

    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad = nuevaCantidad;
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const eliminarItem = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío</p>
          <Link to="/" className="btn btn-seguir-comprando">
            Ver colecciones
          </Link>
        </div>
      ) : (
        <div>
          <div className="carrito-items">
            {carrito.map((item, index) => (
              <div key={index} className="carrito-item">
                <div className="item-imagen">
                  <img
                    src={
                      productosEjemplo[item.id]?.imagen ||
                      "/imagenes/default.jpg"
                    }
                    alt={item.titulo}
                  />
                </div>
                <div className="item-info">
                  <h3>{item.titulo}</h3>
                  <p className="item-id">ID: {item.id}</p>
                  <p className="item-precio">
                    Precio: $
                    {(productosEjemplo[item.id]?.precio || 0).toFixed(2)}
                  </p>
                </div>
                <div className="item-cantidad">
                  <button
                    onClick={() =>
                      actualizarCantidad(index, (item.cantidad || 1) - 1)
                    }
                    disabled={(item.cantidad || 1) <= 1}
                  >
                    -
                  </button>
                  <span>{item.cantidad || 1}</span>
                  <button
                    onClick={() =>
                      actualizarCantidad(index, (item.cantidad || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="item-subtotal">
                  $
                  {(
                    (productosEjemplo[item.id]?.precio || 0) *
                    (item.cantidad || 1)
                  ).toFixed(2)}
                </div>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarItem(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          <div className="carrito-acciones">
            <button className="btn btn-vaciar" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}
