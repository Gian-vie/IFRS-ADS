import { useContext } from "react";
import ThemeContext from "./ThemeContext"; // Importando o contexto
function Header() {
    const { tema, toggleTheme } = useContext(ThemeContext); // Consumindo o tema e a função de alternância
    return (
        <header
            style={{
                backgroundColor: tema === "light" ? "#f1f1f1" : "#333",
                color: tema === "light" ? "#000" : "#fff",
                padding: "10px",
                textAlign: "center",
            }}
        >
            <h1>Minha Aplicação</h1>
            <button onClick={toggleTheme}>
                Alternar para tema {tema === "light" ? "escuro" : "claro"}
            </button>
        </header>
    );
}
export default Header;
