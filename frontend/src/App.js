import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'https://wmttest2-production.up.railway.app';

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/items`);
      setItems(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch items. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editItem) {
        await axios.put(`${API_URL}/api/items/${editItem._id}`, formData);
      } else {
        await axios.post(`${API_URL}/api/items`, formData);
      }
      setEditItem(null);
      fetchItems();
    } catch (err) {
      setError('Failed to save item.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await axios.delete(`${API_URL}/api/items/${id}`);
      fetchItems();
    } catch (err) {
      setError('Failed to delete item.');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Item Manager</h1>
        <p>MERN Stack Application</p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <h2>{editItem ? 'Edit Item' : 'Add New Item'}</h2>
          <ItemForm
            onSubmit={handleSubmit}
            editItem={editItem}
            onCancel={() => setEditItem(null)}
          />
        </section>

        <section className="list-section">
          <h2>Items ({items.length})</h2>
          {error && <p className="error">{error}</p>}
          {loading ? (
            <p className="loading">Loading items...</p>
          ) : (
            <ItemList
              items={items}
              onEdit={setEditItem}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
