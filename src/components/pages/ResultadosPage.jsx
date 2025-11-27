import { FaFutbol, FaEdit, FaTrash, FaCalendarAlt, FaClock } from "react-icons/fa";

function ResultadosPage() {
  // Datos de ejemplo de resultados
  const resultados = [
    { 
      id: 1, 
      torneo: "Torneo Comunales 2025", 
      equipoA: "Los Celendinos", 
      equipoB: "Juveniles Unidos", 
      golesA: 3, 
      golesB: 1, 
      fecha: "2025-03-15", 
      hora: "16:00"
    },
    { 
      id: 2, 
      torneo: "Copa Interbarrial 2025", 
      equipoA: "Escolares FC", 
      equipoB: "Los Celendinos", 
      golesA: 2, 
      golesB: 2, 
      fecha: "2025-03-18", 
      hora: "18:00"
    },
    { 
      id: 3, 
      torneo: "Torneo Escolar 2025", 
      equipoA: "Juveniles Unidos", 
      equipoB: "Escolares FC", 
      golesA: 0, 
      golesB: 1, 
      fecha: "2025-03-20", 
      hora: "15:00"
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Resultados de Partidos</h2>

      {/* BOTÓN NUEVO RESULTADO */}
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2">
          <FaFutbol /> Nuevo Resultado
        </button>
      </div>

      {/* LISTA DE RESULTADOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resultados.map((resultado) => (
          <div
            key={resultado.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaFutbol className="text-green-500" /> {resultado.torneo}
            </h3>
            <p className="text-gray-600 mb-1">
              {resultado.equipoA} <strong>{resultado.golesA}</strong> - <strong>{resultado.golesB}</strong> {resultado.equipoB}
            </p>
            <p className="text-gray-600 mb-1 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" /> {resultado.fecha}
            </p>
            <p className="text-gray-600 mb-2 flex items-center gap-2">
              <FaClock className="text-yellow-500" /> {resultado.hora}
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

export { ResultadosPage };
