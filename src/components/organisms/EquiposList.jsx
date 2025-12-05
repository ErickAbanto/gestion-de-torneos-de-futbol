import EquipoCard from "../molecules/EquipoCard";

export default function EquiposList({ equipos, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {equipos.map((e) => (
        <EquipoCard
          key={e.id}
          equipo={e}
          onEdit={() => onEdit(e)}
          onDelete={() => onDelete(e.id)}
        />
      ))}
    </div>
  );
}
