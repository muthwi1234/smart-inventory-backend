const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    trim: true
  },
  barcode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
