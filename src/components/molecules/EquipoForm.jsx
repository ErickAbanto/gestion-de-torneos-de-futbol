import Input from "../atoms/Input";
import Select from "../atoms/Select";

export default function EquipoForm({ form, setForm }) {
  return (
    <div className="flex flex-col gap-3">
      <Input
        placeholder="Nombre del equipo"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />

      <Input
        placeholder="Representante"
        value={form.representante}
        onChange={(e) => setForm({ ...form, representante: e.target.value })}
      />

      <Select
        value={form.categoria}
        onChange={(e) => setForm({ ...form, categoria: e.target.value })}
      >
        <option value="">Seleccione categoría</option>
        <option>Adultos</option>
        <option>Juveniles</option>
        <option>Escolares</option>
      </Select>
    </div>
  );
}
