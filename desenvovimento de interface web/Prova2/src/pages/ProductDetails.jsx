import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Erro ao buscar detalhes:', error));
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className='productDetails'>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Categoria: {product.category}</p>
      <p>Preço: R$ {product.price}</p>
    </div>
  );
}

export default ProductDetails;
