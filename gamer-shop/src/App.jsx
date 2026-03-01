import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Launches from "./pages/Launches";
import Branches from "./pages/Branches";
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/lanzamientos" element={<Launches />} />
        <Route path="/sucursales" element={<Branches />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </>
  );
}

export default App;