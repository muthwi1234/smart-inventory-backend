// this is a model for outgoing stocks and damages 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stockExitSchema = new Schema({
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

module.exports = mongoose.model('StockExit', stockExitSchema);

