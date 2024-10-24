// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../api/auth'; // Ensure this path is correct
import './Register.css'; // Import the CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { username, email, password };
            const response = await registerUser(userData); // Make the API call
            setMessage(response.message); // Set success message
        } catch (error) {
            setMessage('Registration failed!'); // Set error message
        }
    };

    return (
        <div className="register-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Register</button>
            </form>
            {message && <p className="message">{message}</p>} {/* Display the message if exists */}
        </div>
    );
};

export default Register;
