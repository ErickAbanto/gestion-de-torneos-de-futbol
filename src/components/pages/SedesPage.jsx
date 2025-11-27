import { FaMapMarkerAlt, FaEdit, FaTrash } from "react-icons/fa";

function SedesPage() {
  // Datos de ejemplo de sedes
  const sedes = [
    { id: 1, nombre: "Estadio Municipal Celendín", direccion: "Av. Principal 123", capacidad: 5000 },
    { id: 2, nombre: "Cancha Comunal La Floresta", direccion: "Calle Los Pinos 45", capacidad: 500 },
    { id: 3, nombre: "Coliseo Escolar", direccion: "Jr. Educación 789", capacidad: 300 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Sedes Registradas</h2>

      {/* BOTÓN NUEVA SEDE */}
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2">
          <FaMapMarkerAlt /> Nueva Sede
        </button>
      </div>

      {/* LISTA DE SEDES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sedes.map((sede) => (
          <div
            key={sede.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> {sede.nombre}
            </h3>
            <p className="text-gray-600 mb-1">Dirección: {sede.direccion}</p>
            <p className="text-gray-600 mb-2">Capacidad: {sede.capacidad} personas</p>
            <div className="mt-4 flex gap-2">
              <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1">
                <FaEdit /> Editar
              </button>
              <button className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1">
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SedesPage };
