import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



export function IniciarSesionPage() {
  const navigate = useNavigate();
  const { loginAsAdmin, loginAsGuest } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "amigos@gmail.com" && password === "cascada1234") {
      loginAsAdmin();
      navigate("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* INPUT CORREO */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600">
              Correo
            </label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* INPUT PASSWORD */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* BOTÓN ENTRAR */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        {/* INVITADO */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">¿No deseas iniciar sesión?</p>
          <button
            onClick={() => {
              loginAsGuest();
              navigate("/");
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Entrar como invitado
          </button>
        </div>

      </div>
    </div>
  );
}
