import { FaTrophy, FaMedal } from "react-icons/fa";

function PosicionesPage() {
  // Ejemplo de tabla de posiciones
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
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* TÍTULO PRINCIPAL */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-3">
        <FaTrophy className="text-yellow-500" /> Tabla de Posiciones
      </h2>

      {posiciones.map((torneo) => (
        <div key={torneo.id} className="mb-10">

          {/* NOMBRE DEL TORNEO */}
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-800">
            <FaTrophy className="text-yellow-500" /> {torneo.torneo}
          </h3>

          {/* TABLA */}
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
                {torneo.equipos.map((equipo, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-gray-100 transition 
                      ${index === 0 ? "bg-yellow-100" : ""} 
                      ${index === 1 ? "bg-gray-100" : ""} 
                      ${index === 2 ? "bg-orange-100" : ""}`}
                  >
                    <td className="py-3 px-4 font-semibold flex items-center gap-2">
                      {/* MEDALLAS PARA LOS 3 PRIMEROS */}
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
      ))}
    </div>
  );
}

export { PosicionesPage };
