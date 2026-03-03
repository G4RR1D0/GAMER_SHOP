import { useState } from "react";
import "./Carrito.css";

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

 
  const agregarProducto = (e) => {
    e.preventDefault();

    if (!nombre || !precio) return;

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      precio: Number(precio)
    };

    setCarrito([...carrito, nuevoProducto]);
    setNombre("");
    setPrecio("");
  };

  
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <div className="carrito-container">
      <h2> Carrito Gamer</h2>

      {}
      <form onSubmit={agregarProducto} className="form-carrito">
        <input
          type="text"
          placeholder="Nombre del juego"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío </p>
      ) : (
        <>
          <ul>
            {carrito.map(producto => (
              <li key={producto.id}>
                <span>{producto.nombre}</span>
                <span>${producto.precio}</span>
                <button onClick={() => eliminarProducto(producto.id)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Carrito;