const customer = require('../models/customer');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCustomer = async (req, res) => {
    const newCustomer = new customer(req.body);
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customerData = await customer.findById(req.params.id);
        if (!customerData) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customerData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
