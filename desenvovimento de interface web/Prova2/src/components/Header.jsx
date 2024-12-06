import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyles}>
      <h1>Admin Store</h1>
      <nav>
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/admin" style={linkStyles}>Administração</Link>
      </nav>
    </header>
  );
}

const headerStyles = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyles = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};

export default Header;
