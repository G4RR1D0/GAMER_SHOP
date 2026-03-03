import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./Inicio";
import Store from "./pages/Store";
import Launches from "./pages/Launches";
import Branches from "./pages/Branches";
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";
import Carrito from "./pages/Carrito";
import Contactos from "./pages/Contactos";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/lanzamientos" element={<Launches />} />
        <Route path="/sucursales" element={<Branches />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contactos />} />
      </Routes>
    </>
  );
}

export default App;