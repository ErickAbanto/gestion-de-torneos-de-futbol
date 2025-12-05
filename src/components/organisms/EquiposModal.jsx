import Modal from "../atoms/Modal";
import Button from "../atoms/Button";
import EquipoForm from "../molecules/EquipoForm";

export default function EquiposModal({
  open,
  cerrarModal,
  form,
  setForm,
  editar,
  guardar,
}) {
  if (!open) return null;

  return (
    <Modal>
      <h3 className="text-xl font-bold mb-4 text-center">
        {editar ? "Editar Equipo" : "Nuevo Equipo"}
      </h3>

      <EquipoForm form={form} setForm={setForm} />

      <div className="flex justify-between mt-6">
        <Button className="bg-gray-400 hover:bg-gray-500 text-white" onClick={cerrarModal}>
          Cancelar
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={guardar}>
          Guardar
        </Button>
      </div>
    </Modal>
  );
}
