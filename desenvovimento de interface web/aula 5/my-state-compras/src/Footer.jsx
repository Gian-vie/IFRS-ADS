import { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Importando o contexto
function Footer() {
    const { tema } = useContext(ThemeContext);
    return (
        <footer style={{
            backgroundColor: tema === 'light' ? '#f1f1f1' : '#333',
            color: tema === 'light' ? '#000' : '#fff',
            padding: '5px',
            textAlign: 'center'
        }}>
            <p>&copy; 2024 Minha Aplicação</p>
        </footer>
    );
}
export default Footer;