import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/organisms/Navbar";

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
      <Navbar />

      {/*SEPARACION*/}
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
