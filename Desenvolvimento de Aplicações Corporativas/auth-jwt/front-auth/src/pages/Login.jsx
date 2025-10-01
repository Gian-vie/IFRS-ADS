// Tela de login: consome /auth/login na API.
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(form); // chama AuthContext → POST /auth/login
      // redireciona para a rota pretendida ou para /dashboard
      navigate(state?.from?.pathname || "/dashboard", { replace: true });
    } catch {
      setErr("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="card">
      <h1>Login</h1>
      {err && <p className="alert">{err}</p>}
      <form onSubmit={handleSubmit} className="form form--inline">
        <FormInput
          label="E-mail"
          type="email"
          name="email"
          value={form.email}
          placeholder="usuario@ifrs.edu.br"
          onChange={updateField}
          required
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          value={form.password}
          placeholder="••••••"
          onChange={updateField}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </section>
  );
}
