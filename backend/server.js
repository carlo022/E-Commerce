const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8000'],
  credentials: true
}));
app.use(express.json());

// Import models
const Product = require('./models/Product');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI) // No options needed here anymore!
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

// ==================== PRODUCTS ROUTES ====================

// GET all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET single product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: parseInt(req.params.id) });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST new product (Create)
app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create product', details: error.message });
  }
});

// PUT update product
app.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update product' });
  }
});

// DELETE product
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: parseInt(req.params.id) });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// ==================== USERS/AUTH ROUTES ====================

// GET all users
app.get('/db', async (req, res) => {
  try {
    const products = await Product.find();
    const users = await User.find();
    res.json({
      products,
      users
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// GET users for auth
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// CREATE user (login/register)
app.post('/users', async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      id: req.body.id || new Date().getTime().toString()
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user', details: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}`);
});