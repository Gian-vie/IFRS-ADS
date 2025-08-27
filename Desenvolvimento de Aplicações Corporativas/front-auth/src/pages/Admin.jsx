// Rota protegida por RequireAuth + RequireRole('admin').
import { useEffect, useState } from "react";
import { http } from "../api/http";
export default function Admin() {
  const [msg, setMsg] = useState("Carregando...");
  useEffect(() => {
    http
      .get("/protected/admin")
      .then(({ data }) => setMsg(data.message)) // ex.: "Bem-vindo à área admin, email"
      .catch(() => setMsg("Acesso negado"));
  }, []);
  return (
    <section className="card">
      <h1>Área Administrativa</h1>
      <p>{msg}</p>
    </section>
  );
}
