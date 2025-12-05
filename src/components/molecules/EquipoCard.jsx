import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { FaUsers, FaEdit, FaTrash } from "react-icons/fa";

export default function EquipoCard({ equipo, onEdit, onDelete }) {
  return (
    <Card>
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
        <Button
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 px-3 py-1.5"
          onClick={onEdit}
        >
          <FaEdit /> Editar
        </Button>

        <Button
          className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 px-3 py-1.5"
          onClick={onDelete}
        >
          <FaTrash /> Eliminar
        </Button>
      </div>
    </Card>
  );
}
