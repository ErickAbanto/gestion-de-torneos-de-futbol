export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 animate-scaleIn">
        {children}
      </div>
    </div>
  );
}
