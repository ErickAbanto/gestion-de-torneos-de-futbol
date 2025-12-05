import { FaMapMarkerAlt, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

function SedesPage() {
  // Datos de ejemplo de sedes (en estado)
  const [sedes, setSedes] = useState([
    { id: 1, nombre: "Estadio Municipal Celendín", direccion: "Av. Principal 123", capacidad: 900 },
    { id: 2, nombre: "Gras los pajuros", direccion: "calle los pajuros", capacidad: 200 },
    { id: 3, nombre: "Videna", direccion: "Barrio Chacapampa", capacidad: 300 },
  ]);

  // Manejo de edición
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    nombre: "",
    direccion: "",
    capacidad: 0,
  });

  // Crear nueva sede de ejemplo
  const handleNuevaSede = () => {
    const nueva = {
      id: Date.now(),
      nombre: "Nueva Sede",
      direccion: "Dirección por definir",
      capacidad: 0,
    };
    setSedes((prev) => [...prev, nueva]);
  };

  // Eliminar sede
  const handleEliminar = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta sede?")) {
      setSedes((prev) => prev.filter((s) => s.id !== id));
    }
  };

  // Activar edición
  const handleEditar = (sede) => {
    setEditingId(sede.id);
    setEditForm({
      nombre: sede.nombre,
      direccion: sede.direccion,
      capacidad: sede.capacidad,
    });
  };

  // Inputs del formulario
  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: name === "capacidad" ? Number(value) : value,
    }));
  };

  // Guardar la edición
  const handleGuardar = (id) => {
    setSedes((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, ...editForm } : s
      )
    );
    setEditingId(null);
  };

  // Cancelar edición
  const handleCancelar = () => {
    setEditingId(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Sedes Registradas</h2>

      {/* BOTÓN NUEVA SEDE */}
      <div className="mb-6">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
          onClick={handleNuevaSede}
        >
          <FaMapMarkerAlt /> Nueva Sede
        </button>
      </div>

      {/* LISTA DE SEDES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sedes.map((sede) => (
          <div
            key={sede.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            {editingId === sede.id ? (
              <>
                {/* EDITANDO */}
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    name="nombre"
                    value={editForm.nombre}
                    onChange={handleChangeEdit}
                  />
                </h3>

                <p className="text-gray-600 mb-1">
                  Dirección:
                  <input
                    className="border rounded px-2 py-1 w-full text-sm mt-1"
                    name="direccion"
                    value={editForm.direccion}
                    onChange={handleChangeEdit}
                  />
                </p>

                <p className="text-gray-600 mb-2">
                  Capacidad:
                  <input
                    className="border rounded px-2 py-1 w-full text-sm mt-1"
                    type="number"
                    name="capacidad"
                    value={editForm.capacidad}
                    onChange={handleChangeEdit}
                  />
                </p>

                <div className="mt-4 flex gap-2">
                  <button
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => handleGuardar(sede.id)}
                  >
                    Guardar
                  </button>
                  <button
                    className="text-sm bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={handleCancelar}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* VISTA NORMAL */}
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> {sede.nombre}
                </h3>

                <p className="text-gray-600 mb-1">Dirección: {sede.direccion}</p>
                <p className="text-gray-600 mb-2">Capacidad: {sede.capacidad} personas</p>

                <div className="mt-4 flex gap-2">
                  <button
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1"
                    onClick={() => handleEditar(sede)}
                  >
                    <FaEdit /> Editar
                  </button>
                  <button
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
                    onClick={() => handleEliminar(sede.id)}
                  >
                    <FaTrash /> Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { SedesPage };
