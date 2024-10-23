// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link for navigation and Outlet for nested routes
import './AdminLayout.css'; // Add any styles you want for the layout

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">🏠 Home</Link>
                </div>
                <div className="navbar-menu">
                    <Link to="/admin" className="navbar-item">📋 Admin Page</Link>
                    <Link to="/admin/products" className="navbar-item">📦 Manage Products</Link>
                    <Link to="/admin/orders" className="navbar-item">🛒 Manage Orders</Link>
                    <Link to="/admin/users" className="navbar-item">👥 Manage Users</Link>
                </div>
            </nav>
            <div className="content">
                <Outlet /> {/* Render the matched child route here */}
            </div>
        </div>
    );
};

export default AdminLayout;
