const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const cors = require('cors');

dotenv.config();
const app = express();

mongoose(); 

app.use(express.json());

// Configure CORS
const allowedOrigins = [
  'http://localhost:3000', 
  'https://mellow-salamander-b62922.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials like cookies
}));

// Routes
app.use('/api/auth', require('./routs/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
