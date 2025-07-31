// creating an incoming stock purchases and restocks
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stockEntrySchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('StockEntry', stockEntrySchema);
