import { FaUsers, FaEdit, FaTrash } from "react-icons/fa";

function EquiposPage() {
  // Datos de ejemplo de equipos
  const equipos = [
    { id: 1, nombre: "Celendinos FC", representante: "Juan Pérez", categoria: "Adultos" },
    { id: 2, nombre: "Juveniles FC", representante: "María Gómez", categoria: "Juveniles" },
    { id: 3, nombre: "Escolares FC", representante: "Carlos Díaz", categoria: "Escolares" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Equipos Registrados</h2>

      {/* BOTÓN NUEVO EQUIPO */}
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2">
          <FaUsers /> Nuevo Equipo
        </button>
      </div>

      {/* LISTA DE EQUIPOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {equipos.map((equipo) => (
          <div
            key={equipo.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaUsers className="text-green-500" /> {equipo.nombre}
            </h3>
            <p className="text-gray-600 mb-1">Representante: {equipo.representante}</p>
            <p className="text-gray-600 mb-2">Categoría: {equipo.categoria}</p>
            <div className="mt-4 flex gap-2">
              <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition flex items-center gap-1">
                <FaEdit /> Editar
              </button>
              <button className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition flex items-center gap-1">
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { EquiposPage };
