import { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Importando o contexto
function Home() {
    const { tema } = useContext(ThemeContext);
    return (
        <main style={{
            backgroundColor: tema === 'light' ? '#fff' : '#444',
            color: tema === 'light' ? '#000' : '#fff',
            padding: '20px',
            minHeight: '100vh',
        }}>
            <p>
                Este é o conteúdo principal da página.
            </p>
        </main>
    );
}
export default Home;