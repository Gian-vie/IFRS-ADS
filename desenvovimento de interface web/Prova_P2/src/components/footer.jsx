import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Admin Store. Todos os direitos reservados.</p>
      <p>Contato: suporte@adminstore.com</p>
    </footer>
  );
}

export default Footer;
