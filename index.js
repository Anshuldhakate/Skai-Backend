const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const cors = require('cors');

dotenv.config();
const app = express();


mongoose(); 

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routs/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
