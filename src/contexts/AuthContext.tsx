import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";
import type UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextType {
  usuario: UsuarioLogin | null;
  setUsuario: (usuario: UsuarioLogin | null) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioLogin | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const usuarioArmazenado = localStorage.getItem("usuario");
      if (usuarioArmazenado) {
        setUsuario(JSON.parse(usuarioArmazenado));
      }
    }
  }, []);

  function handleLogout() {
    setUsuario(null);
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
