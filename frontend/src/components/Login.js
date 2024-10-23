// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../api/auth'; // Ensure this path is correct
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password };
            const response = await loginUser(userData); // Make the API call
            setMessage('Login successful!'); // Set success message
        } catch (error) {
            setMessage('Login failed!'); // Set error message
        }
    };

    return (
        <div className="login-container">
            <div className="form-wrapper">
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {message && <p className="message">{message}</p>} {/* Display the message if exists */}
            </div>
        </div>
    );
};

export default Login;
