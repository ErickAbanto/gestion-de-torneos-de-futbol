import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { Navbar } from "./components/organisms/Navbar";

import { HomePage } from "./components/pages/HomePage";
import { TorneosPage } from "./components/pages/TorneosPage";
import { EquiposPage } from "./components/pages/EquiposPage";
import { JugadoresPage } from "./components/pages/JugadoresPage";
import { SedesPage } from "./components/pages/SedesPage";
import { ResultadosPage } from "./components/pages/ResultadosPage";
import { PosicionesPage } from "./components/pages/PosicionesPage";
import { IniciarSesionPage } from "./components/pages/IniciarSesionPage";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="h-20"></div>

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* SOLO ADMIN */}
        <Route
          path="/torneos"
          element={
            <ProtectedRoute>
              <TorneosPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/equipos"
          element={
            <ProtectedRoute>
              <EquiposPage />
            </ProtectedRoute>
          }
        />

        {/* LIBRE PARA INVITADOS */}
        <Route path="/jugadores" element={<JugadoresPage />} />
        <Route path="/sedes" element={<SedesPage />} />
        <Route path="/resultados" element={<ResultadosPage />} />
        <Route path="/posiciones" element={<PosicionesPage />} />

        {/* LOGIN */}
        <Route path="/login" element={<IniciarSesionPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
