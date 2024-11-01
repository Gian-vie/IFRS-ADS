import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import ThemeProvider from './ThemeProvider'; // Importando o Provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}
export default App;