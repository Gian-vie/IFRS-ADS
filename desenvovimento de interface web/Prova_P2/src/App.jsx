// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './paginaInicial';
import ProductList from './listaDeProdutos';
import ProductDetails from './detalhesProdutos';
import AddProduct from './AddProdutos';
// import EditProduct from './editarProdutos';
// import Header from './components/header';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        {/* <Route path="/edit-product/:id" element={<EditProduct />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;