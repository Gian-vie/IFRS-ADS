import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAdmin from './pages/ProductsAdmin';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/updateProducts';
import AddProduct from './pages/AddProduct';
import './App.css';


function App() {
  return (
    <div className='appDiv'>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/admin">Administração</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProductsAdmin />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <footer>
          <p>© 2024 Meu Website. Todos os direitos reservados.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
