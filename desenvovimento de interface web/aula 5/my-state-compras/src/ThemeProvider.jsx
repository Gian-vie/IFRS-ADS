import { useState } from "react";
import ThemeContext from "./ThemeContext"; // Importando o contexto

// Componente Provider para gerenciar o tema
function ThemeProvider({ children }) {
    const [tema, setTema] = useState("light"); // Estado para o tema atual
    
    // Alterna entre tema claro e escuro
    const toggleTheme = () => {
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ tema, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
