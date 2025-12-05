export default function Card({ children }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {children}
    </div>
  );
}
