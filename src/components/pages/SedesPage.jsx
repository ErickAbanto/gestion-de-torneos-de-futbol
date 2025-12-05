import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaSearch,
  FaPlus,
} from "react-icons/fa";

function SedesPage() {
  const [sedes, setSedes] = useState([
    { id: 1, nombre: "Estadio Municipal Celendín", direccion: "Av. Principal 123", capacidad: 5000 },
    { id: 2, nombre: "Cancha Comunal La Floresta", direccion: "Calle Los Pinos 45", capacidad: 500 },
    { id: 3, nombre: "Coliseo Escolar", direccion: "Jr. Educación 789", capacidad: 300 },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [capFiltro, setCapFiltro] = useState("Todas");

  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    capacidad: "",
  });

  // ABRIR MODAL
  const abrirModal = (sede = null) => {
    if (sede) {
      setForm(sede);
      setEditando(sede.id);
    } else {
      setForm({ nombre: "", direccion: "", capacidad: "" });
      setEditando(null);
    }
    setModalOpen(true);
  };

  const cerrarModal = () => setModalOpen(false);

  // GUARDAR
  const guardarSede = () => {
    if (editando) {
      setSedes(
        sedes.map((s) =>
          s.id === editando ? { ...form, id: editando } : s
        )
      );
    } else {
      setSedes([...sedes, { ...form, id: Date.now() }]);
    }
    cerrarModal();
  };

  // ELIMINAR
  const eliminarSede = (id) => {
    if (confirm("¿Seguro que deseas eliminar esta sede?")) {
      setSedes(sedes.filter((s) => s.id !== id));
    }
  };

  // FILTRO
  const sedesFiltradas = sedes.filter((s) => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCapacidad =
      capFiltro === "Todas" ||
      (capFiltro === "Pequeña" && s.capacidad <= 500) ||
      (capFiltro === "Mediana" && s.capacidad > 500 && s.capacidad <= 2000) ||
      (capFiltro === "Grande" && s.capacidad > 2000);

    return coincideNombre && coincideCapacidad;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center gap-2">
        <FaMapMarkerAlt /> Sedes Registradas
      </h2>

      {/* BARRA SUPERIOR */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar sede..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <select
          className="px-4 py-2 border rounded-lg shadow"
          value={capFiltro}
          onChange={(e) => setCapFiltro(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Pequeña">Pequeña (0 - 500)</option>
          <option value="Mediana">Mediana (500 - 2000)</option>
          <option value="Grande">Grande (2000+)</option>
        </select>

        <button
          onClick={() => abrirModal()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          <FaPlus /> Nueva Sede
        </button>
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sedesFiltradas.map((sede) => (
          <div
            key={sede.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition border"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> {sede.nombre}
            </h3>
            <p className="text-gray-700">Dirección: {sede.direccion}</p>
            <p className="text-gray-700 mb-3">
              Capacidad: <b>{sede.capacidad}</b> personas
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => abrirModal(sede)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded flex items-center gap-1"
              >
                <FaEdit /> Editar
              </button>

              <button
                onClick={() => eliminarSede(sede.id)}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded flex items-center gap-1"
              >
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96 animate-fade-down">
            <h3 className="text-xl font-bold mb-4">
              {editando ? "Editar Sede" : "Nueva Sede"}
            </h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nombre de la sede"
                className="border px-3 py-2 rounded"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />

              <input
                type="text"
                placeholder="Dirección"
                className="border px-3 py-2 rounded"
                value={form.direccion}
                onChange={(e) => setForm({ ...form, direccion: e.target.value })}
              />

              <input
                type="number"
                placeholder="Capacidad"
                className="border px-3 py-2 rounded"
                value={form.capacidad}
                onChange={(e) => setForm({ ...form, capacidad: Number(e.target.value) })}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={cerrarModal}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
              >
                Cancelar
              </button>

              <button
                onClick={guardarSede}
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

export { SedesPage };