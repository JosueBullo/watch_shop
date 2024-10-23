/*const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Update a product
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;*/
const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');


// Define your routes
router.post('/products', createProduct); // Create a new product
router.get('/products', getAllProducts); // Get all products
router.put('/products:id', updateProduct); // Update a product
router.delete('/products:id', deleteProduct); // Delete a product

module.exports = router;

