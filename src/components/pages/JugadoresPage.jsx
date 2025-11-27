import { FaUser, FaEdit, FaTrash, FaTshirt, FaUsers } from "react-icons/fa";

function JugadoresPage() {
  // Datos de ejemplo
  const jugadores = [
    { id: 1, nombre: "Pedro López", equipo: "Los Celendinos", posicion: "Delantero", camiseta: 9 },
    { id: 2, nombre: "Luis Ramírez", equipo: "Juveniles Unidos", posicion: "Portero", camiseta: 1 },
    { id: 3, nombre: "Ana Gómez", equipo: "Escolares FC", posicion: "Defensa", camiseta: 5 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Jugadores Registrados</h2>
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2">
          <FaUser /> Nuevo Jugador
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jugadores.map(jugador => (
          <div key={jugador.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaUser className="text-green-500" /> {jugador.nombre}
            </h3>
            <p className="text-gray-600 mb-1 flex items-center gap-1">
              <FaUsers className="text-blue-500" /> Equipo: {jugador.equipo}
            </p>
            <p className="text-gray-600 mb-1 flex items-center gap-1">
              <FaTshirt className="text-yellow-500" /> Posición: {jugador.posicion}
            </p>
            <p className="text-gray-600 mb-2 flex items-center gap-1">
              <FaTshirt className="text-red-500" /> N° Camiseta: {jugador.camiseta}
            </p>
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

export { JugadoresPage };
