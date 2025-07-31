// this is a model of invoices and transactions
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const saleSchema = new Schema({
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

module.exports = mongoose.model('Sale', saleSchema);
// This model represents sales transactions, linking products to their sold quantities and dates.