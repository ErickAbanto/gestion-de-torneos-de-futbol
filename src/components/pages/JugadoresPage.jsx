import { useState } from "react";
import {
  FaUser,
  FaEdit,
  FaTrash,
  FaTshirt,
  FaUsers,
  FaPlus,
  FaVenusMars,
} from "react-icons/fa";

function JugadoresPage() {
  const [jugadores, setJugadores] = useState([
    {
      id: 1,
      nombre: "Pedro López",
      equipo: "Los Celendinos",
      posicion: "Delantero",
      camiseta: 9,
      categoria: "Adultos",
      genero: "Masculino",
    },
    {
      id: 2,
      nombre: "Luis Ramírez",
      equipo: "Juveniles Unidos",
      posicion: "Portero",
      camiseta: 1,
      categoria: "Juveniles",
      genero: "Masculino",
    },
    {
      id: 3,
      nombre: "Ana Gómez",
      equipo: "Escolares FC",
      posicion: "Defensa",
      camiseta: 5,
      categoria: "Escolares",
      genero: "Femenino",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const [generoFiltro, setGeneroFiltro] = useState("Todos");

  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    equipo: "",
    posicion: "",
    camiseta: "",
    categoria: "Adultos",
    genero: "Masculino",
  });

  // Abrir modal
  const abrirModal = (jugador = null) => {
    if (jugador) {
      setForm(jugador);
      setEditando(jugador.id);
    } else {
      setForm({
        nombre: "",
        equipo: "",
        posicion: "",
        camiseta: "",
        categoria: "Adultos",
        genero: "Masculino",
      });
      setEditando(null);
    }
    setModalOpen(true);
  };

  const cerrarModal = () => setModalOpen(false);

  // Guardar
  const guardarJugador = () => {
    if (editando) {
      setJugadores(
        jugadores.map((j) =>
          j.id === editando ? { ...form, id: editando } : j
        )
      );
    } else {
      setJugadores([...jugadores, { ...form, id: Date.now() }]);
    }
    cerrarModal();
  };

  // Eliminar
  const eliminarJugador = (id) => {
    if (confirm("¿Seguro que deseas eliminar este jugador?")) {
      setJugadores(jugadores.filter((j) => j.id !== id));
    }
  };

  // FILTRO avanzado
  const jugadoresFiltrados = jugadores.filter((j) => {
    const texto = busqueda.toLowerCase();

    const coincideTexto =
      j.nombre.toLowerCase().includes(texto) ||
      j.equipo.toLowerCase().includes(texto);

    const coincideCategoria =
      categoriaFiltro === "Todas" || j.categoria === categoriaFiltro;

    const coincideGenero =
      generoFiltro === "Todos" || j.genero === generoFiltro;

    return coincideTexto && coincideCategoria && coincideGenero;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Jugadores Registrados
      </h2>

      {/* Barra superior */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar jugador o equipo..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {/* Filtros */}
        <select
          className="px-4 py-2 border rounded-lg shadow"
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
        >
          <option>Todas</option>
          <option>Adultos</option>
          <option>Juveniles</option>
          <option>Escolares</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg shadow"
          value={generoFiltro}
          onChange={(e) => setGeneroFiltro(e.target.value)}
        >
          <option>Todos</option>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Mixto</option>
        </select>

        <button
          onClick={() => abrirModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
        >
          <FaPlus /> Nuevo Jugador
        </button>
      </div>

      {/* Lista */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jugadoresFiltrados.map((jugador) => (
          <div
            key={jugador.id}
            className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaUser className="text-green-600" /> {jugador.nombre}
            </h3>

            <p className="text-gray-700">
              <b>Equipo:</b> {jugador.equipo}
            </p>

            <p className="text-gray-700">
              <b>Posición:</b> {jugador.posicion}
            </p>

            <p className="text-gray-700">
              <b>N° Camiseta:</b> {jugador.camiseta}
            </p>

            <p className="text-gray-700">
              <b>Categoría:</b> {jugador.categoria}
            </p>

            <p className="text-gray-700 mb-3">
              <b>Género:</b>{" "}
              <span className="text-purple-600 font-semibold">
                {jugador.genero}
              </span>
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => abrirModal(jugador)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <FaEdit /> Editar
              </button>

              <button
                onClick={() => eliminarJugador(jugador.id)}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h3 className="text-xl font-bold mb-4">
              {editando ? "Editar Jugador" : "Nuevo Jugador"}
            </h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nombre"
                className="border px-3 py-2 rounded"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
              <input
                type="text"
                placeholder="Equipo"
                className="border px-3 py-2 rounded"
                value={form.equipo}
                onChange={(e) => setForm({ ...form, equipo: e.target.value })}
              />
              <input
                type="text"
                placeholder="Posición"
                className="border px-3 py-2 rounded"
                value={form.posicion}
                onChange={(e) =>
                  setForm({ ...form, posicion: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Número de camiseta"
                className="border px-3 py-2 rounded"
                value={form.camiseta}
                onChange={(e) =>
                  setForm({ ...form, camiseta: e.target.value })
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
                <option>Adultos</option>
                <option>Juveniles</option>
                <option>Escolares</option>
              </select>

              {/* Género */}
              <select
                className="border px-3 py-2 rounded"
                value={form.genero}
                onChange={(e) =>
                  setForm({ ...form, genero: e.target.value })
                }
              >
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Mixto</option>
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
                onClick={guardarJugador}
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

export { JugadoresPage };
