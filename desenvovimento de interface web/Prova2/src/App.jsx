import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAdmin from './pages/ProductsAdmin';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import './App.css';


function App() {
  return (
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
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <footer>
        <p>Admin Store - Gerencie seus produtos de maneira fácil e prática!</p>
      </footer>
    </Router>
  );
}

export default App;
