// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link for navigation and Outlet for nested routes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome component
import { faHome, faClipboard, faBoxOpen, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './AdminLayout.css'; // Import the styles

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </div>
                <div className="navbar-menu">
                    <Link to="/admin" className="navbar-item">
                        <FontAwesomeIcon icon={faClipboard} /> Admin Page
                    </Link>
                    <Link to="/admin/products" className="navbar-item">
                        <FontAwesomeIcon icon={faBoxOpen} /> Manage Products
                    </Link>
                    <Link to="/admin/orders" className="navbar-item">
                        <FontAwesomeIcon icon={faShoppingCart} /> Manage Orders
                    </Link>
                    <Link to="/admin/users" className="navbar-item">
                        <FontAwesomeIcon icon={faUsers} /> Manage Users
                    </Link>
                </div>
            </nav>
            <div className="content">
                <Outlet /> {/* Render the matched child route here */}
            </div>
        </div>
    );
};

export default AdminLayout;
