import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import { FaShoppingCart, FaUser, FaSignInAlt } from 'react-icons/fa';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    // Fetch the top 3 products from the backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                const sortedProducts = response.data
                    .sort((a, b) => b.price - a.price) // Sort products based on price
                    .slice(0, 3); // Get the top 3 products
                setProducts(sortedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-container container mt-5">
            <header className="home-header text-center mb-5">
                <h1 className="display-4 font-weight-bold">Welcome to Extreme Sportsware</h1>
                <p className="lead">Your ultimate destination for high-quality extreme sports equipment!</p>
            </header>

            <main className="home-content">
                {/* Featured Products Section */}
                <section className="featured-products mb-5">
      
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product._id}>
                                <div className="card text-center shadow border-0">
                                    <div className="card-body">
                                        <img
                                            src={`http://localhost:5000/uploads/${product.imageUrl}`}
                                            alt={product.name}
                                            className="img-fluid mb-3 rounded"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${Number(product.price).toFixed(2)}</p>
                                        <Link to={`/products/${product._id}`} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Actions Section */}
                <section className="actions text-center">
                    <h3 className="mb-4">What would you like to do?</h3>
                    <div className="action-buttons">
                        <Link to="/login" className="btn btn-outline-secondary mx-2">
                            <FaSignInAlt /> Login
                        </Link>
                        <Link to="/register" className="btn btn-outline-secondary mx-2">
                            <FaUser /> Register
                        </Link>
                        <Link to="/cart" className="btn btn-outline-secondary mx-2">
                            <FaShoppingCart /> View Cart
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
