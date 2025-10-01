// O RootLayout define a “casca” da aplicação: navbar fixa + área de conteúdo.
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          © {new Date().getFullYear()} CorpApps • IFRS
        </div>
      </footer>
    </>
  );
}
