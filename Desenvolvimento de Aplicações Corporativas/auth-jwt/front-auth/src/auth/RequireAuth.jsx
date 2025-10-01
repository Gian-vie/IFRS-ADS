// RequireAuth garante que a rota só seja acessível com sessão válida.
// - Lê 'token' e 'loading' do AuthContext.
// - Se ainda está carregando (restaurando sessão do localStorage), renderiza um feedback.
// - Se não há token, redireciona para /login, preservando a rota de origem em 'state'.
// - Se há token, renderiza os filhos (a página protegida).
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function RequireAuth({ children }) {
  const { token, loading } = useAuth();
  const location = useLocation();
  // Enquanto restaura a sessão, evite "piscar" conteúdo incorreto
  if (loading) {
    return (
      <div style={{ padding: 24 }}>
        <p>Carregando sessão...</p>
      </div>
    );
  }
  // Sem token → manda para /login e guarda onde o usuário queria ir
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // Com token válido → permite acesso
  return children;
}
