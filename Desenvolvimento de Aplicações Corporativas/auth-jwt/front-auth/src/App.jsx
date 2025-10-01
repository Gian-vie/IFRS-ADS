// Roteador principal: define rotas públicas, protegidas e o layout base.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import RequireRole from "./auth/RequireRoles";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
// (Opcional) Fallback simples para rotas inexistentes
function NotFound() {
  return (
    <main className="container">
      <h1>404 — Página não encontrada</h1>
      <p>Verifique a URL ou volte para a Home.</p>
    </main>
  );
}
// Árvore de rotas aninhadas sob o RootLayout.
// O <Outlet /> do RootLayout renderiza os filhos declarados em "children".
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />, // opcional
    children: [
      // públicas
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "forbidden", element: <Forbidden /> },
      // protegida por autenticação (token)
      {
        path: "dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      // protegida por autenticação + papel específico (admin)
      {
        path: "admin",
        element: (
          <RequireAuth>
            <RequireRole role="admin">
              <Admin />
            </RequireRole>
          </RequireAuth>
        ),
      },
      // fallback interno (opcional)
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  // O AuthProvider envolve o Router para que todas as rotas
  // tenham acesso a user/token/login/logout via contexto.
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
