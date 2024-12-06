import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EditProduct.css';

function EditProduct() {
  const { id } = useParams(); // Obtém o ID do produto pela URL
  const navigate = useNavigate(); // Para redirecionar após a edição
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });
  const [loading, setLoading] = useState(true);

  // Buscar os dados do produto com base no ID
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setForm(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produto:', error);
        setLoading(false);
      });
  }, [id]);

  // Atualizar os dados do produto
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${id}`, form)
      .then(() => {
        alert('Produto atualizado com sucesso!');
        navigate('/products'); // Redireciona para a lista de produtos
      })
      .catch((error) => {
        console.error('Erro ao atualizar produto:', error);
      });
  };

  if (loading) return <p>Carregando dados do produto...</p>;

  return (
    <div className="edit-product-container">
      <h2>Editar Produto
