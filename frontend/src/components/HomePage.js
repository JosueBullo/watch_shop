// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // Create and import the CSS file for styling

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Extreme Sportsware</h1>
                <p>Your one-stop shop for extreme sports equipment!</p>
            </header>
            <main className="home-content">
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    {/* Example of product cards, replace with actual product data */}
                    <div className="product-card">Product 1</div>
                    <div className="product-card">Product 2</div>
                    <div className="product-card">Product 3</div>
                </section>
                <section className="about">
                    <h2>About Us</h2>
                    <p>We provide high-quality gear for all your extreme sports needs.</p>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2024 Extreme Sportsware</p>
                <div className="auth-links">
                    <Link to="/login">
                        <button>Login</button> {/* Button to navigate to the login page */}
                    </Link>
                    <Link to="/register">
                        <button>Register</button> {/* Button to navigate to the register page */}
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
