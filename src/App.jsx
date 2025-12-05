import "./App.css";
import { FaHome, FaTrophy, FaUsers, FaUserFriends, FaMapMarkerAlt, FaChartBar, FaListOl } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";


/* PAGES */
import { HomePage } from "./components/pages/HomePage";
import { TorneosPage } from "./components/pages/TorneosPage";
import { EquiposPage } from "./components/pages/EquiposPage";
import { JugadoresPage } from "./components/pages/JugadoresPage";
import { SedesPage } from "./components/pages/SedesPage";
import { ResultadosPage } from "./components/pages/ResultadosPage";
import { PosicionesPage } from "./components/pages/PosicionesPage";

function App() {
  return (
    <>
{/* NAVBAR */}
<nav className="w-full bg-blue-900 text-white py-4 px-6 shadow-md fixed top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* LOGO + TÍTULO CLICKABLE */}
    <Link to="/" className="flex items-center gap-3">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_1shWszb9DSX1rw7AzplTLuxvmfqytXB0g&s" 
        alt="Logo Torneos" 
        className="w-10 h-10 object-cover rounded-full"
      />
<h1 className="text-lg font-bold uppercase transition-all duration-300 hover:text-amber-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.7)]">
  GESTIÓN DE TORNEOS - CELENDÍN
</h1>


    </Link>

{/* MENU */}
<div className="flex gap-6 text-sm items-center">
  <Link to="/" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaHome /> Inicio
  </Link>
  <Link to="/torneos" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaTrophy /> Torneos
  </Link>
  <Link to="/equipos" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaUsers /> Equipos
  </Link>
  <Link to="/jugadores" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaUserFriends /> Jugadores
  </Link>
  <Link to="/sedes" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaMapMarkerAlt /> Sedes
  </Link>
  <Link to="/resultados" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaChartBar /> Resultados
  </Link>

  {/* NUEVO: POSICIONES */}
  <Link to="/posiciones" className="hover:text-amber-300 transition flex items-center gap-1">
    <FaListOl /> Posiciones
  </Link>
</div>


  </div>
</nav>


      {/* SEPARACIÓN PARA QUE EL NAVBAR NO TAPE EL CONTENIDO */}
      <div className="h-20"></div>

      {/* RUTAS */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/torneos" element={<TorneosPage />} />
        <Route path="/equipos" element={<EquiposPage />} />
        <Route path="/jugadores" element={<JugadoresPage />} />
        <Route path="/sedes" element={<SedesPage />} />
        <Route path="/resultados" element={<ResultadosPage />} />
        <Route path="/posiciones" element={<PosicionesPage />} />

      </Routes>
    </>
  );
}

export default App;
