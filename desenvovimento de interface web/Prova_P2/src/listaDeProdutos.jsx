import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
      setProducts(products.filter(product => product.id !== id));
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>Details</Link>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
