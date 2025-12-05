import Select from "../atoms/Select";
import { FaFilter } from "react-icons/fa";

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <FaFilter className="text-gray-600" />
      <Select value={value} onChange={onChange}>
        <option>Todas</option>
        <option>Adultos</option>
        <option>Juveniles</option>
        <option>Escolares</option>
      </Select>
    </div>
  );
}
