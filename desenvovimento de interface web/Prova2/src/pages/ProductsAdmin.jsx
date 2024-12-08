import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsAdmin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  function handleDelete(id) {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((error) => console.error('Erro ao excluir produto:', error));
  }

  return (
    <div className="productsAdmin">
      <h1>Administração de Produtos</h1>
      <Link to="/add-product">Adicionar Produto</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.title} className="imagemAdmin" />
              <h3>{product.title}</h3>
              <p>R$ {product.price}</p>
              <Link to={`/product/${product.id}`}>Detalhes</Link>
              <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsAdmin;
