import React, { useState, useEffect } from 'react';
import './ItemForm.css';

// Add the new `category` field to the initial state
const initialState = { name: '', description: '', quantity: 0, category: '' };

function ItemForm({ onSubmit, editItem, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editItem) {
      setFormData({
        name: editItem.name || '',
        description: editItem.description || '',
        quantity: editItem.quantity || 0,
        category: editItem.category || '',
      });
    } else {
      setFormData(initialState);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert('Name is required');
    onSubmit(formData);
    if (!editItem) setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item name"
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Item description"
          rows={3}
        />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="0"
        />
      </div>
        <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Electronics"
        />
      </div>
      {/* TODO (LAB TASK): Add your new field input here */}
      {/* Example:
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Electronics"
        />
      </div>
      */}

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editItem ? 'Update Item' : 'Add Item'}
        </button>
        {editItem && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ItemForm;
