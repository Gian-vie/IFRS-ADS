import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">Admin Store</h1>
      <nav className="header-nav">
        <Link to="../paginaInicial">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
    </header>
  );
}

export default Header;
