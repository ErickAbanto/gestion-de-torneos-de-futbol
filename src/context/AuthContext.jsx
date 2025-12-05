import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    setRole(savedRole || null);
  }, []);

  const loginAsAdmin = () => {
    localStorage.setItem("role", "admin");
    setRole("admin");
  };

  const loginAsGuest = () => {
    localStorage.setItem("role", "guest");
    setRole("guest");
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
