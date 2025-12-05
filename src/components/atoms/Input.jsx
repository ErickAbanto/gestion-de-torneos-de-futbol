export default function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative w-full">
      {Icon && (
        <Icon className="absolute left-3 top-3 text-gray-500" />
      )}
      <input
        {...props}
        className={`w-full pl-10 pr-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
}
