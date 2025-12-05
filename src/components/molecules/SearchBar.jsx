import Input from "../atoms/Input";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <Input
      icon={FaSearch}
      placeholder="Buscar por nombre o representante..."
      value={value}
      onChange={onChange}
    />
  );
}
