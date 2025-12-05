export default function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="px-4 py-2 border rounded-lg shadow"
    >
      {children}
    </select>
  );
}
