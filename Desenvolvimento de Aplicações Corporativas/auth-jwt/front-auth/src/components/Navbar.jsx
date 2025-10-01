// Importamos o Link para navegação entre rotas
// e o hook de autenticação para exibir login/logout dinamicamente
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        {/* brand separado da lista de links */}
        <div className="brand">CorpApps</div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              {user.role === "admin" && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
              <li>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
