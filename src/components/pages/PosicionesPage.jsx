import { useState } from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";

function PosicionesPage() {
  // Lista de torneos con sus posiciones
  const posiciones = [
    {
      id: 1,
      torneo: "Torneo Comunales 2025",
      equipos: [
        { nombre: "Los Celendinos", pj: 5, pg: 4, pe: 1, pp: 0, gf: 12, gc: 3, pts: 13 },
        { nombre: "Escolares FC", pj: 5, pg: 3, pe: 1, pp: 1, gf: 9, gc: 5, pts: 10 },
        { nombre: "Juveniles Unidos", pj: 5, pg: 2, pe: 0, pp: 3, gf: 7, gc: 10, pts: 6 },
        { nombre: "Barrio Centro", pj: 5, pg: 0, pe: 0, pp: 5, gf: 2, gc: 12, pts: 0 },
      ]
    },
    {
      id: 2,
      torneo: "Copa Interbarrial 2025",
      equipos: [
        { nombre: "Barrio Norte", pj: 4, pg: 3, pe: 1, pp: 0, gf: 8, gc: 2, pts: 10 },
        { nombre: "Los Guerreros", pj: 4, pg: 2, pe: 1, pp: 1, gf: 6, gc: 3, pts: 7 },
        { nombre: "Juventud 2000", pj: 4, pg: 1, pe: 0, pp: 3, gf: 4, gc: 7, pts: 3 },
      ]
    }
  ];

  // Estado: torneo seleccionado
  const [torneoSeleccionado, setTorneoSeleccionado] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
        <FaTrophy className="text-yellow-500" /> Tabla de Posiciones
      </h2>

      {/* SI NO HAY TORNEO SELECCIONADO → MOSTRAR LISTA */}
      {!torneoSeleccionado && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posiciones.map((torneo) => (
            <div 
              key={torneo.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-3">
                <FaTrophy className="text-yellow-500" /> {torneo.torneo}
              </h3>

              <button
                onClick={() => setTorneoSeleccionado(torneo)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center gap-2"
              >
                Ver posiciones
              </button>
            </div>
          ))}
        </div>
      )}

      {/* SI HAY TORNEO SELECCIONADO → MOSTRAR TABLA */}
      {torneoSeleccionado && (
        <div className="mt-10">
          <button
            onClick={() => setTorneoSeleccionado(null)}
            className="mb-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          >
            ← Volver
          </button>

          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-800">
            <FaTrophy className="text-yellow-500" /> {torneoSeleccionado.torneo}
          </h3>

          <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-blue-900 text-white text-sm uppercase">
                <tr>
                  <th className="py-3 px-4">Equipo</th>
                  <th className="py-3 px-4 text-center">PJ</th>
                  <th className="py-3 px-4 text-center">PG</th>
                  <th className="py-3 px-4 text-center">PE</th>
                  <th className="py-3 px-4 text-center">PP</th>
                  <th className="py-3 px-4 text-center">GF</th>
                  <th className="py-3 px-4 text-center">GC</th>
                  <th className="py-3 px-4 text-center font-bold">PTS</th>
                </tr>
              </thead>

              <tbody>
                {torneoSeleccionado.equipos
                  .sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc))
                  .map((equipo, index) => (
                    <tr
                      key={index}
                      className={`border-b hover:bg-gray-100 transition 
                        ${index === 0 ? "bg-yellow-100" : ""} 
                        ${index === 1 ? "bg-gray-100" : ""} 
                        ${index === 2 ? "bg-orange-100" : ""}`}
                    >
                      <td className="py-3 px-4 font-semibold flex items-center gap-2">
                        {index === 0 && <FaMedal className="text-yellow-500" />}
                        {index === 1 && <FaMedal className="text-gray-400" />}
                        {index === 2 && <FaMedal className="text-orange-500" />}
                        {equipo.nombre}
                      </td>

                      <td className="py-3 px-4 text-center">{equipo.pj}</td>
                      <td className="py-3 px-4 text-center">{equipo.pg}</td>
                      <td className="py-3 px-4 text-center">{equipo.pe}</td>
                      <td className="py-3 px-4 text-center">{equipo.pp}</td>
                      <td className="py-3 px-4 text-center">{equipo.gf}</td>
                      <td className="py-3 px-4 text-center">{equipo.gc}</td>
                      <td className="py-3 px-4 text-center font-bold text-blue-900">
                        {equipo.pts}
                      </td>
                    </tr>
                  ))}
              </tbody>

            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export { PosicionesPage };