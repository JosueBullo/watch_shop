import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserPage.css';

const UserPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (err) {
                setError(err.response ? err.response.data : 'Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="dashboard">
            <nav className="sidebar">
                <h2>User Dashboard</h2>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Orders</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className="main-content">
                <header className="dashboard-header">
                    <h1>Welcome to Your Dashboard</h1>
                    <p>Shop Our Products</p>
                </header>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product-card" key={product._id}>
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: ${product.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
