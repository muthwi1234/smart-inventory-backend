// i want to create category of all products with name and description
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
module.exports = productSchema;
module.exports = User;

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
module.exports = Category;