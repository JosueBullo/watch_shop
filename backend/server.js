const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes'); // Ensure the path is correct

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Set up authentication routes
app.use('/api/auth', authRoutes); 

// Set up product routes
app.use('/api/products', productRoutes); 

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
