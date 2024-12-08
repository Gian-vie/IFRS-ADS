import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setForm(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar produto:', error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${id}`, form)
      .then(() => {
        alert('Produto atualizado com sucesso!');
        navigate('/products');
      })
      .catch((error) => {
        console.error('Erro ao atualizar produto:', error);
        alert('Erro ao atualizar produto.');
      });
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="updateProductContainer">
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit} className="updateProductContainer">
        <label>
          Nome: <br />
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <label>
          Preço: <br />
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
        </label>
        <label className='labelDescrição'>
          Descrição: <br />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </label>
        <label>
          URL: <br />
          <input
            type="url"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required 
          />
        </label>
        <label>
          Categoria: <br />
          <input
            type="text"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
