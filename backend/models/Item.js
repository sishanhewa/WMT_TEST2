const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: 0,
      default: 0,
    },
    
    category: {
      type: String,
      trim: true,
      default: 'General',
    },

    // TODO (LAB TASK): Add your new field here
    // Example: category, price, status, etc.
    // category: {
    //   type: String,
    //   trim: true,
    //   default: 'General',
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
