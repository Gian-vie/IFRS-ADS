// src/api/http.js
import axios from "axios";
export const http = axios.create({
  baseURL: "http://localhost:3000",
});
// Interceptor de REQUEST: anexa o Bearer se houver token no localStorage
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
// Interceptor de RESPONSE: trata erros 401/403 (token inválido/expirado)
http.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      // Estratégia simples: limpar sessão e recarregar login
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Evite chamar hooks aqui. Use redirect imperativo:
      if (window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }
    return Promise.reject(error);
  }
);
