import React, { useState } from 'react';
import axios from "axios";

function AddProduct() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fakestoreapi.com/products', form).then(() => {
      alert('Product added successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
      <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
      <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} required />
      <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
