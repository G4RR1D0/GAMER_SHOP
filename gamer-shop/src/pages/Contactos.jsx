import { useState } from "react";
import "./Contactos.css";

function Contactos() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
    }, 3000);

    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="contacto-wrapper">
      <div className="contacto-card">
        <h2>FakeStore</h2>
        <p className="contacto-sub">
          ¿Necesitas ayuda con un juego, compra o recomendación?
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <select
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un asunto</option>
              <option>Consulta de juego</option>
              <option>Problema con pedido</option>
              <option>Recomendación</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="input-group">
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Mensaje 
          </button>
        </form>

        {enviado && <div className="mensaje-ok">Mensaje enviado correctamente</div>}
      </div>
    </div>
  );
}

export default Contactos;
