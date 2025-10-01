// src/auth/AuthContext.jsx
// Responsável por gerenciar a sessão: login, logout e restauração.
// Armazena token e user no localStorage e expõe via contexto.
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { http } from "../api/http";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null); // JWT
  const [user, setUser] = useState(null); // { email, role }
  const [loading, setLoading] = useState(true); // indica restauração da sessão
  // Restaura sessão ao iniciar o app (ex.: após F5)
  useEffect(() => {
    const t = localStorage.getItem("token");
    const u = localStorage.getItem("user");
    setToken(t || null);
    try {
      setUser(u ? JSON.parse(u) : null);
    } catch {
      // Se algo inválido foi salvo (ex.: "undefined"), limpa e segue sem user.
      localStorage.removeItem("user");
      setUser(null);
    }
    setLoading(false);
  }, []);
  // Faz login chamando a API e salva sessão
  async function login({ email, password }) {
    const { data } = await http.post("/auth/login", { email, password });
    // Espera-se { token, user: { email, role } }
    if (!data?.token) throw new Error("Token ausente na resposta");
    localStorage.setItem("token", data.token);
    setToken(data.token);
    if (data?.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } else {
      // fallback defensivo
      localStorage.removeItem("user");
      setUser(null);
    }
  }
  // Encerra sessão
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }
  // Valor do contexto memoizado (evita re-renders desnecessários)
  const value = useMemo(
    () => ({ token, user, login, logout, loading }),
    [token, user, loading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// Hook de conveniência para consumir o contexto
export function useAuth() {
  return useContext(AuthContext);
}
