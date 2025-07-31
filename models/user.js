// i want to create a user model with name, email, password, and different roles with admin,user, and manager.
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'manager'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
module.exports = Product;
