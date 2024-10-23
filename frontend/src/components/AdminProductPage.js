// src/components/AdminProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProductPage.css'; // Your CSS file for styling

const AdminProductPage = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        // Fetch all products when the component mounts
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data); // Set the fetched products to state
            } catch (error) {
                console.error('Error fetching products:', error.response ? error.response.data : error.message);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this runs once on mount

    // Handle form submission for adding/updating products
    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price), // Ensure price is a number
            category: formData.category,
            imageUrl: formData.imageUrl
        };

        try {
            if (editingProductId) {
                // Update existing product
                await axios.put(`http://localhost:5000/api/products/${editingProductId}`, productData);
                setProducts(products.map((product) =>
                    product._id === editingProductId ? { ...product, ...productData } : product
                ));
                setEditingProductId(null);
            } else {
                // Add new product
                const response = await axios.post('http://localhost:5000/api/products', productData);
                setProducts([...products, response.data.product]); // Ensure your backend sends back the newly created product
            }
            // Clear the form after submission
            setFormData({ name: '', description: '', price: '', category: '', imageUrl: '' });
        } catch (error) {
            console.error('Error adding/updating product:', error.response ? error.response.data : error.message);
        }
    };

    // Handle product editing
    const handleEdit = (product) => {
        setEditingProductId(product._id);
        setFormData(product); // Set formData to the selected product's data for editing
    };

    // Handle product deletion
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`http://localhost:5000/api/products/${id}`);
                setProducts(products.filter((product) => product._id !== id));
            } catch (error) {
                console.error('Error deleting product:', error.response ? error.response.data : error.message);
            }
        }
    };

    return (
        <div className="admin-product-page">
            <h2>Manage Products</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    required
                />
                <button type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
            </form>

            <div className="product-list">
                <h3>Product List</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Category: {product.category}</p>
                            <img src={product.imageUrl} alt={product.name} />
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminProductPage;
