// i want to create supplier information with name, contact, address, and email and phone number also history of transactions
const mongoose = require('mongoose');
const supplierSchema = new mongoose.Schema({
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
        date: {
            type: Date,
            default: Date.now
        },
        amount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            trim: true
        }
    }]
});
const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
module.exports = supplierSchema;
module.exports = mongoose.model('Supplier', supplierSchema);
