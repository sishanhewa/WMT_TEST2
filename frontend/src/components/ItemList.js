import React from 'react';
import './ItemList.css';

function ItemList({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return <p className="empty-state">No items yet. Add your first item!</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item._id} className="item-card">
          <div className="item-info">
            <h3 className="item-name">{item.name}</h3>
            {item.description && (
              <p className="item-description">{item.description}</p>
            )}
            <div className="item-meta">
              <span className="item-qty">Qty: {item.quantity}</span>
                {item.category && <span className="item-category">{item.category}</span>}
            </div>
          </div>
          <div className="item-actions">
            <button className="btn-edit" onClick={() => onEdit(item)}>Edit</button>
            <button className="btn-delete" onClick={() => onDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
