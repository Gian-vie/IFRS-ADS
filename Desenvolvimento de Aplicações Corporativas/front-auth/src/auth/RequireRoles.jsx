// RequireRole impede acesso a rotas quando o papel do usuário não corresponde.
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function RequireRole({ role, children }) {
  const { user } = useAuth();
  // Sem usuário ou papel diferente do exigido → bloqueia
  if (!user || user.role !== role) {
    return <Navigate to="/forbidden" replace />;
  }
  return children;
}
