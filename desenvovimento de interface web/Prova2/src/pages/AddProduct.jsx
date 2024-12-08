import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://fakestoreapi.com/products', formData)
      .then((response) => console.log('Produto adicionado:', response.data))
      .catch((error) => console.error('Erro ao adicionar produto:', error));
  }

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Nome" onChange={handleChange} required /><br />
        <input name="price" placeholder="Preço" onChange={handleChange} required /><br />
        <input name="description" placeholder="Descrição" onChange={handleChange} required /><br />
        <input name="image" placeholder="URL da Imagem" onChange={handleChange} required type='url' /><br />
        <input name="category" placeholder="Categoria" onChange={handleChange} required  /><br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddProduct;
