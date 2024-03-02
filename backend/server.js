const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_database',
  password: 'Sreekaree@4',
  port: 5432,
});

// Test PostgreSQL connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL at:', res.rows[0].now);
  }
});

// Define the /api/customers endpoint
app.get('/api/customers', (req, res) => {
  pool.query('SELECT name, age, phone, location, created_at FROM customers', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// Define route for the root path
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
