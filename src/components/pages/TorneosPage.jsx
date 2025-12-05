import { useState } from "react";
import { FaTrophy, FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function TorneosPage() {
  // ----- Lista de torneos (ejemplo) -----
  const torneosData = [
    { id: 1, nombre: "Liga Distrital 2025", categoria: "Adultos", estado: "Activo" },
    { id: 2, nombre: "Copa Juvenil Celendín", categoria: "Juveniles", estado: "Finalizado" },
    { id: 3, nombre: "Torneo Escolar", categoria: "Escolares", estado: "Activo" },
    { id: 4, nombre: "Copa Internacional", categoria: "Adultos", estado: "Activo" },
  ];

  // ----- Estados -----
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [estado, setEstado] = useState("Todos");

  // ----- Filtro avanzado -----
  const torneosFiltrados = torneosData.filter(torneo => {
    const coincideBusqueda =
      torneo.nombre.toLowerCase().includes(search.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || torneo.categoria === categoria;

    const coincideEstado =
      estado === "Todos" || torneo.estado === estado;

    return coincideBusqueda && coincideCategoria && coincideEstado;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
        <FaTrophy className="text-yellow-500" />
        Torneos Registrados
      </h2>

      {/* Barra superior */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        {/* Buscador */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar torneo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3">

          {/* Categoría */}
          <select
            className="px-4 py-2 border rounded-lg shadow"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option>Todas</option>
            <option>Adultos</option>
            <option>Juveniles</option>
            <option>Escolares</option>
          </select>

          {/* Estado */}
          <select
            className="px-4 py-2 border rounded-lg shadow"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option>Todos</option>
            <option>Activo</option>
            <option>Finalizado</option>
          </select>

        </div>

        {/* Botón nuevo torneo */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition">
          <FaPlus /> Nuevo Torneo
        </button>
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {torneosFiltrados.map((torneo) => (
          <div
            key={torneo.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
              <FaTrophy className="text-yellow-500" />
              {torneo.nombre}
            </h3>

            <p className="text-gray-700">Categoría: <b>{torneo.categoria}</b></p>
            <p className="text-gray-700 mb-3">
              Estado:{" "}
              <span
                className={`font-semibold ${
                  torneo.estado === "Activo" ? "text-green-600" : "text-red-500"
                }`}
              >
                {torneo.estado}
              </span>
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

      {/* Si no hay resultados */}
      {torneosFiltrados.length === 0 && (
        <p className="mt-6 text-center text-gray-500 text-lg">
          No se encontraron torneos con esos filtros.
        </p>
      )}
    </div>
  );
}

export { TorneosPage };
