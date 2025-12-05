import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { role } = useAuth();

  // si no es admin → redirige a login
  if (role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
