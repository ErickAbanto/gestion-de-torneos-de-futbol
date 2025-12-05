import { useState } from "react";
import {
  FaUsers,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaFilter
} from "react-icons/fa";

function EquiposPage() {
  const [equipos, setEquipos] = useState([
    { id: 1, nombre: "Celendinos FC", representante: "Juan Pérez", categoria: "Adultos" },
    { id: 2, nombre: "Juveniles FC", representante: "María Gómez", categoria: "Juveniles" },
    { id: 3, nombre: "Escolares FC", representante: "Carlos Díaz", categoria: "Escolares" },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    representante: "",
    categoria: "",
  });

  // --------------------------
  // Abrir modal
  // --------------------------
  const abrirModal = (equipo = null) => {
    if (equipo) {
      setForm(equipo);
      setEditando(equipo.id);
    } else {
      setForm({ nombre: "", representante: "", categoria: "" });
      setEditando(null);
    }
    setModalOpen(true);
  };

  const cerrarModal = () => setModalOpen(false);

  // --------------------------
  // Guardar equipo
  // --------------------------
  const guardarEquipo = () => {
    if (!form.nombre.trim() || !form.representante.trim() || !form.categoria.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    if (editando) {
      setEquipos(
        equipos.map((e) =>
          e.id === editando ? { ...form, id: editando } : e
        )
      );
    } else {
      setEquipos([
        ...equipos,
        { ...form, id: Date.now() }
      ]);
    }

    cerrarModal();
  };

  // --------------------------
  // Eliminar equipo
  // --------------------------
  const eliminarEquipo = (id) => {
    if (confirm("¿Seguro que deseas eliminar este equipo?")) {
      setEquipos(equipos.filter((e) => e.id !== id));
    }
  };

  // --------------------------
  // Filtrado completo
  // --------------------------
  const equiposFiltrados = equipos.filter((e) => {
    const coincideTexto =
      e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.representante.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      filtroCategoria === "Todas" || e.categoria === filtroCategoria;

    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      {/* ----------- TÍTULO ----------- */}
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 tracking-wide flex items-center gap-2">
        <FaUsers className="text-blue-600" />
        Equipos Registrados
      </h2>

      {/* ----------- Barra superior ----------- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">

        {/* Buscador */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar por nombre o representante..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* Filtro categoría */}
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-600" />
          <select
            className="px-4 py-2 border rounded-lg shadow"
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option>Todas</option>
            <option>Adultos</option>
            <option>Juveniles</option>
            <option>Escolares</option>
          </select>
        </div>

        {/* Botón nuevo */}
        <button
          onClick={() => abrirModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
        >
          <FaPlus /> Nuevo Equipo
        </button>

      </div>

      {/* ----------- LISTA ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {equiposFiltrados.map((equipo) => (
          <div
            key={equipo.id}
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
              <FaUsers className="text-green-600" /> {equipo.nombre}
            </h3>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Representante:</span> {equipo.representante}
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Categoría:</span> {equipo.categoria}
            </p>

            <div className="mt-4 flex gap-3">

              <button
                onClick={() => abrirModal(equipo)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md hover:scale-105 transition"
              >
                <FaEdit /> Editar
              </button>

              <button
                onClick={() => eliminarEquipo(equipo.id)}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md hover:scale-105 transition"
              >
                <FaTrash /> Eliminar
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Sin resultados */}
      {equiposFiltrados.length === 0 && (
        <p className="mt-6 text-center text-gray-500 text-lg">
          No se encontraron equipos.
        </p>
      )}

      {/* ----------- MODAL ----------- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm animate-fadeIn">

          <div className="bg-white p-6 rounded-xl shadow-xl w-96 animate-scaleIn">

            <h3 className="text-xl font-bold mb-4 text-center">
              {editando ? "Editar Equipo" : "Nuevo Equipo"}
            </h3>

            <div className="flex flex-col gap-3">

              <input
                type="text"
                placeholder="Nombre del equipo"
                className="border px-3 py-2 rounded"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />

              <input
                type="text"
                placeholder="Representante"
                className="border px-3 py-2 rounded"
                value={form.representante}
                onChange={(e) => setForm({ ...form, representante: e.target.value })}
              />

              <select
                className="border px-3 py-2 rounded"
                value={form.categoria}
                onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              >
                <option value="">Seleccione categoría</option>
                <option>Adultos</option>
                <option>Juveniles</option>
                <option>Escolares</option>
              </select>

            </div>

            <div className="flex justify-between mt-6">

              <button
                onClick={cerrarModal}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
              >
                Cancelar
              </button>

              <button
                onClick={guardarEquipo}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Guardar
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export { EquiposPage };
