import { useState } from "react";
import { FaMapMarkerAlt, FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";

function SedesPage() {
  // ----- Datos de ejemplo -----
  const sedesData = [
    { id: 1, nombre: "Estadio Municipal Celendín", direccion: "Av. Principal 123", capacidad: 5000 },
    { id: 2, nombre: "Cancha Comunal La Floresta", direccion: "Calle Los Pinos 45", capacidad: 500 },
    { id: 3, nombre: "Coliseo Escolar", direccion: "Jr. Educación 789", capacidad: 300 },
    { id: 4, nombre: "Mini Coliseo Infantil", direccion: "Jr. Atahualpa 202", capacidad: 150 },
  ];

  // ----- Estados -----
  const [search, setSearch] = useState("");
  const [capacidadFiltro, setCapacidadFiltro] = useState("Todas");

  // ----- Lógica de filtrado -----
  const sedesFiltradas = sedesData.filter((sede) => {
    const coincideBusqueda = sede.nombre.toLowerCase().includes(search.toLowerCase());

    const coincideCapacidad =
      capacidadFiltro === "Todas" ||
      (capacidadFiltro === "Pequeña" && sede.capacidad <= 500) ||
      (capacidadFiltro === "Mediana" && sede.capacidad > 500 && sede.capacidad <= 2000) ||
      (capacidadFiltro === "Grande" && sede.capacidad > 2000);

    return coincideBusqueda && coincideCapacidad;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-2">
        <FaMapMarkerAlt className="text-red-500" />
        Sedes Registradas
      </h2>

      {/* BARRA SUPERIOR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

        {/* Buscador */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar sede..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border shadow focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filtro por capacidad */}
        <select
          className="px-4 py-2 border rounded-lg shadow"
          value={capacidadFiltro}
          onChange={(e) => setCapacidadFiltro(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Pequeña">Pequeña (0 - 500)</option>
          <option value="Mediana">Mediana (500 - 2000)</option>
          <option value="Grande">Grande (+2000)</option>
        </select>

        {/* Botón Nueva Sede */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition">
          <FaPlus /> Nueva Sede
        </button>
      </div>

      {/* LISTA DE SEDES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sedesFiltradas.map((sede) => (
          <div
            key={sede.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> {sede.nombre}
            </h3>

            <p className="text-gray-700">Dirección: {sede.direccion}</p>
            <p className="text-gray-700 mb-3">
              Capacidad: <b>{sede.capacidad}</b> personas
            </p>

            <div className="flex gap-2 mt-3">
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

      {/* No hay resultados */}
      {sedesFiltradas.length === 0 && (
        <p className="text-center text-gray-500 mt-6 text-lg">
          No se encontraron sedes con esos filtros.
        </p>
      )}
    </div>
  );
}

export { SedesPage };