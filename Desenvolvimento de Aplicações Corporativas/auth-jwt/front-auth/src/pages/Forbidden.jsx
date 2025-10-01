// Página exibida quando o usuário não possui permissão para acessar uma rota.
// Usada nos fluxos de RequireRole ou ao tratar 403.
export default function Forbidden() {
  return (
    <section className="card">
      <h1>403 — Acesso negado</h1>
      <p>Você não possui permissão para acessar este recurso.</p>
    </section>
  );
}
