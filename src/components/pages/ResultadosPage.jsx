import { useState } from "react";
import {
  FaFutbol,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaClock,
  FaPlus,
} from "react-icons/fa";

function ResultadosPage() {
  const [resultados, setResultados] = useState([
    {
      id: 1,
      torneo: "Torneo Comunales 2025",
      equipoA: "Los Celendinos",
      equipoB: "Juveniles Unidos",
      golesA: 3,
      golesB: 1,
      fecha: "2025-03-15",
      hora: "16:00",
      categoria: "Adultos",
      rama: "Masculino",
    },
    {
      id: 2,
      torneo: "Copa Interbarrial 2025",
      equipoA: "Escolares FC",
      equipoB: "Los Celendinos",
      golesA: 2,
      golesB: 2,
      fecha: "2025-03-18",
      hora: "18:00",
      categoria: "Juveniles",
      rama: "Mixto",
    },
    {
      id: 3,
      torneo: "Torneo Escolar 2025",
      equipoA: "Juveniles Unidos",
      equipoB: "Escolares FC",
      golesA: 0,
      golesB: 1,
      fecha: "2025-03-20",
      hora: "15:00",
      categoria: "Infantil",
      rama: "Masculino",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    torneo: "",
    equipoA: "",
    equipoB: "",
    golesA: "",
    golesB: "",
    fecha: "",
    hora: "",
    categoria: "",
    rama: "",
  });

  // ----- Abrir modal -----
  const abrirModal = (res = null) => {
    if (res) {
      setForm(res);
      setEditando(res.id);
    } else {
      setForm({
        torneo: "",
        equipoA: "",
        equipoB: "",
        golesA: "",
        golesB: "",
        fecha: "",
        hora: "",
        categoria: "",
        rama: "",
      });
      setEditando(null);
    }
    setModalOpen(true);
  };

  const cerrarModal = () => setModalOpen(false);

  // ----- Guardar -----
  const guardarResultado = () => {
    if (editando) {
      setResultados(
        resultados.map((r) =>
          r.id === editando ? { ...form, id: editando } : r
        )
      );
    } else {
      setResultados([...resultados, { ...form, id: Date.now() }]);
    }
    cerrarModal();
  };

  const eliminarResultado = (id) => {
    if (confirm("¿Seguro que deseas eliminar este resultado?")) {
      setResultados(resultados.filter((r) => r.id !== id));
    }
  };

  // ----- Filtro -----
  const filtrados = resultados.filter((r) => {
    const t = busqueda.toLowerCase();
    return (
      r.torneo.toLowerCase().includes(t) ||
      r.equipoA.toLowerCase().includes(t) ||
      r.equipoB.toLowerCase().includes(t) ||
      r.categoria.toLowerCase().includes(t)
    );
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Resultados de Partidos
      </h2>

      {/* Barra superior */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar torneo, equipo o categoría..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button
          onClick={() => abrirModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
        >
          <FaPlus /> Nuevo Resultado
        </button>
      </div>

      {/* Lista */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtrados.map((resultado) => (
          <div
            key={resultado.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl border transition"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaFutbol className="text-green-600" /> {resultado.torneo}
            </h3>

            {/* Categoría y Rama */}
            <div className="flex gap-2 my-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                {resultado.categoria}
              </span>
              <span className="px-2 py-1 text-xs bg-pink-100 text-pink-700 rounded-full">
                {resultado.rama}
              </span>
            </div>

            <p className="text-gray-700">
              {resultado.equipoA} <b>{resultado.golesA}</b> -{" "}
              <b>{resultado.golesB}</b> {resultado.equipoB}
            </p>

            <p className="text-gray-700 mt-2 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" /> {resultado.fecha}
            </p>

            <p className="text-gray-700 flex items-center gap-2">
              <FaClock className="text-yellow-600" /> {resultado.hora}
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => abrirModal(resultado)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <FaEdit /> Editar
              </button>

              <button
                onClick={() => eliminarResultado(resultado.id)}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h3 className="text-xl font-bold mb-4">
              {editando ? "Editar Resultado" : "Nuevo Resultado"}
            </h3>

            <div className="flex flex-col gap-3">
              {/* Inputs básicos */}
              <input
                type="text"
                placeholder="Torneo"
                className="border px-3 py-2 rounded"
                value={form.torneo}
                onChange={(e) =>
                  setForm({ ...form, torneo: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Equipo A"
                className="border px-3 py-2 rounded"
                value={form.equipoA}
                onChange={(e) =>
                  setForm({ ...form, equipoA: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Equipo B"
                className="border px-3 py-2 rounded"
                value={form.equipoB}
                onChange={(e) =>
                  setForm({ ...form, equipoB: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Goles Equipo A"
                className="border px-3 py-2 rounded"
                value={form.golesA}
                onChange={(e) =>
                  setForm({ ...form, golesA: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Goles Equipo B"
                className="border px-3 py-2 rounded"
                value={form.golesB}
                onChange={(e) =>
                  setForm({ ...form, golesB: e.target.value })
                }
              />

              {/* Categoría */}
              <select
                className="border px-3 py-2 rounded"
                value={form.categoria}
                onChange={(e) =>
                  setForm({ ...form, categoria: e.target.value })
                }
              >
                <option value="">Seleccione categoría</option>
                <option value="Adultos">Adultos</option>
                <option value="Juveniles">Juveniles</option>
                <option value="Infantil">Infantil</option>
                <option value="Libre">Libre</option>
              </select>

              {/* Rama */}
              <select
                className="border px-3 py-2 rounded"
                value={form.rama}
                onChange={(e) =>
                  setForm({ ...form, rama: e.target.value })
                }
              >
                <option value="">Seleccione rama</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Mixto">Mixto</option>
              </select>

              {/* Fecha */}
              <input
                type="date"
                className="border px-3 py-2 rounded"
                value={form.fecha}
                onChange={(e) =>
                  setForm({ ...form, fecha: e.target.value })
                }
              />

              {/* Hora */}
              <input
                type="time"
                className="border px-3 py-2 rounded"
                value={form.hora}
                onChange={(e) =>
                  setForm({ ...form, hora: e.target.value })
                }
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
                onClick={guardarResultado}
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

export { ResultadosPage };