// i need to create a customer with their name, contact information, address, email, phone number, and a history of their transactions
const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,   
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    transactionHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }]
});

module.exports = mongoose.model('Customer', customerSchema);
