import React from 'react';

function Footer() {
  return (
    <footer style={footerStyles}>
      <p>Admin Store &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      <p>Gerencie seus produtos de maneira fácil e prática.</p>
    </footer>
  );
}

const footerStyles = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
