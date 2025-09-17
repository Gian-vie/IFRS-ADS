// Rota protegida por RequireAuth: exige token válido.
import { useEffect, useState } from "react";
import { http } from "../api/http";
export default function Dashboard() {
  const [msg, setMsg] = useState("Carregando...");
  useEffect(() => {
    http
      .get("/protected/dashboard")
      .then(({ data }) => setMsg(data.message)) // ex.: "Bem-vindo ao painel, email"
      .catch(() => setMsg("Erro ao carregar painel"));
  }, []);
  return (
    <section className="card">
      <h1>Dashboard</h1>
      <p>{msg}</p>
    </section>
  );
}
