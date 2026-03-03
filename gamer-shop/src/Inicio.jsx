import "./Inicio.css";
import logo from "./assets/logo.png";
import { FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Inicio = () => {
  return (
    <div className="inicio">
      <section className="hero">
        <h1>Bienvenido a Fakestore</h1>

        <img src={logo} alt="Logo" className="logo" />

        <p>Los mejores productos gamer al mejor precio.</p>
        <button className="btn-principal">Explorar Tienda</button>
      </section>

      <section className="info">
        <div className="card-inicio">
          <h2> Envíos Rápidos</h2>
          <p>Entrega segura a todo México.</p>
        </div>

        <div className="card-inicio">
          <h2> Ofertas Exclusivas</h2>
          <p>Descuentos especiales cada semana.</p>
        </div>

        <div className="card-inicio">
          <h2> Pago Seguro</h2>
          <p>Protección garantizada en cada compra.</p>
        </div>
      </section>

      <section className="redes">
        <h3>Síguenos en:</h3>
        <div className="iconos">
          <a href="#" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;