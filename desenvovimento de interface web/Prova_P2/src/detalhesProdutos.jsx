import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetails() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((response) => {
      setProduct(response.data);
    });
  });

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
