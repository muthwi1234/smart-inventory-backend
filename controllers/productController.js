const Product = require('../models/product');

// ✅ Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, barcode } = req.body;
    const product = new Product({ name, price, quantity, description, barcode });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, barcode } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, quantity, description, barcode },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
