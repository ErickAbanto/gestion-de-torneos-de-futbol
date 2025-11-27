import { FaTrophy, FaCalendarAlt, FaUsers } from "react-icons/fa";

function TorneosPage() {
  // Datos de ejemplo de torneos
  const torneos = [
    { id: 1, nombre: "Torneo Comunales 2025", categoria: "Adultos", año: 2025 },
    { id: 2, nombre: "Copa Interbarrial 2025", categoria: "Juveniles", año: 2025 },
    { id: 3, nombre: "Torneo Escolar 2025", categoria: "Escolares", año: 2025 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Torneos Registrados
      </h2>

      {/* BOTÓN NUEVO TORNEO */}
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2">
          <FaTrophy /> Nuevo Torneo
        </button>
      </div>

      {/* LISTA DE TORNEOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {torneos.map((torneo) => (
          <div
            key={torneo.id}
            className="bg-blue-100 p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaTrophy className="text-yellow-500" /> {torneo.nombre}
            </h3>
            <p className="text-gray-600 mb-1 flex items-center gap-2">
              <FaUsers className="text-green-500" /> Categoría: {torneo.categoria}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" /> Año: {torneo.año}
            </p>
            <div className="mt-4 flex gap-2">
              <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition flex items-center gap-1">
                <FaTrophy /> Editar
              </button>
              <button className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition flex items-center gap-1">
                <FaTrophy /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TorneosPage };
