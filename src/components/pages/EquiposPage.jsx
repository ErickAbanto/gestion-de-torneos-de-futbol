import { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import CategoryFilter from "../molecules/CategoryFilter";
import Button from "../atoms/Button";
import EquiposList from "../organisms/EquiposList";
import EquiposModal from "../organisms/EquiposModal";
import { FaPlus, FaUsers } from "react-icons/fa";

export function EquiposPage() {
  const [equipos, setEquipos] = useState([
    { id: 1, nombre: "Celendinos FC", representante: "Juan Pérez", categoria: "Adultos" },
    { id: 2, nombre: "Juveniles FC", representante: "María Gómez", categoria: "Juveniles" },
    { id: 3, nombre: "Escolares FC", representante: "Carlos Díaz", categoria: "Escolares" },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  const [modalOpen, setModalOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    representante: "",
    categoria: "",
  });

  const abrir = (eq = null) => {
    setEdit(eq?.id || null);
    setForm(eq || { nombre: "", representante: "", categoria: "" });
    setModalOpen(true);
  };

  const cerrar = () => setModalOpen(false);

  const guardar = () => {
    if (!form.nombre || !form.representante || !form.categoria) {
      alert("Completa todos los campos.");
      return;
    }

    if (edit) {
      setEquipos(equipos.map((e) => (e.id === edit ? { ...form, id: edit } : e)));
    } else {
      setEquipos([...equipos, { ...form, id: Date.now() }]);
    }

    cerrar();
  };

  const eliminar = (id) => {
    if (confirm("¿Eliminar equipo?")) {
      setEquipos(equipos.filter((e) => e.id !== id));
    }
  };

  const filtrados = equipos.filter((e) => {
    const matchText =
      e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.representante.toLowerCase().includes(busqueda.toLowerCase());
    const matchCat = filtroCategoria === "Todas" || e.categoria === filtroCategoria;
    return matchText && matchCat;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 flex items-center gap-2">
        <FaUsers className="text-blue-600" /> Equipos Registrados
      </h2>

      {/* Barra superior */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <div className="w-full md:w-1/3">
          <SearchBar value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        </div>

        <CategoryFilter value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)} />

        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          onClick={() => abrir()}
        >
          <FaPlus /> Nuevo Equipo
        </Button>
      </div>

      <EquiposList equipos={filtrados} onEdit={abrir} onDelete={eliminar} />

      {filtrados.length === 0 && (
        <p className="mt-6 text-center text-gray-500 text-lg">No se encontraron equipos.</p>
      )}

      <EquiposModal
        open={modalOpen}
        cerrarModal={cerrar}
        form={form}
        setForm={setForm}
        editar={edit}
        guardar={guardar}
      />
    </div>
  );
}
