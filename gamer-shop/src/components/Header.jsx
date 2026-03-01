import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">FakeStore</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/lanzamientos">Lanzamientos</Link>
        <Link to="/sucursales">Sucursales</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/carrito" className="cart-link">Carrito</Link>
        <Link to="/contacto" className="contact-link">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;